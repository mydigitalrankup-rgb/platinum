import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import BlogPost from "@/models/BlogPost";

type RouteContext = { params: Promise<{ id: string }> };

export async function GET(_req: NextRequest, { params }: RouteContext) {
  const { id } = await params;

  await connectDB();
  const post = await BlogPost.findById(id);
  if (!post) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ post });
}

export async function PUT(req: NextRequest, { params }: RouteContext) {
  const { id } = await params;

  await connectDB();
  const body = await req.json();

  const existing = await BlogPost.findById(id);
  if (!existing) return NextResponse.json({ error: "Not found" }, { status: 404 });

  if (body.status === "published" && existing.status !== "published" && !body.publishedAt) {
    body.publishedAt = new Date();
  }

  // Editing a published post's content counts as a freshness review
  if (body.content && body.content !== existing.content) {
    body.freshnessReviewedAt = new Date();
  }

  const post = await BlogPost.findByIdAndUpdate(id, body, { returnDocument: "after" });
  return NextResponse.json({ post });
}

export async function DELETE(_req: NextRequest, { params }: RouteContext) {
  const { id } = await params;

  await connectDB();
  await BlogPost.findByIdAndDelete(id);
  return NextResponse.json({ success: true });
}