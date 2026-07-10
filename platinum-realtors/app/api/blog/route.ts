import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import BlogPost from "@/models/BlogPost";

export async function GET(req: NextRequest) {
  await connectDB();
  const category = req.nextUrl.searchParams.get("category");

  const query: Record<string, unknown> = { status: "published" };
  if (category) query.category = category;

  const posts = await BlogPost.find(query)
    .select("title slug excerpt featuredImage category publishedAt")
    .sort({ publishedAt: -1 })
    .lean();

  return NextResponse.json({ posts });
}
