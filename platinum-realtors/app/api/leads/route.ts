import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Lead from "@/models/Lead";
import BlogPost from "@/models/BlogPost";

export async function POST(req: NextRequest) {
  await connectDB();
  const body = await req.json();

  if (!body.name || !body.email) {
    return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
  }

  let sourcePostId = null;
  if (body.sourcePostSlug) {
    const post = await BlogPost.findOne({ slug: body.sourcePostSlug }).select("_id");
    sourcePostId = post?._id || null;
  }

  const lead = await Lead.create({
    name: body.name,
    email: body.email,
    phone: body.phone || "",
    message: body.message || "",
    sourceType: body.sourcePostSlug ? "blog" : body.sourceType || "contact",
    sourcePostId,
    sourcePostSlug: body.sourcePostSlug || null,
  });

  return NextResponse.json({ lead }, { status: 201 });
}
