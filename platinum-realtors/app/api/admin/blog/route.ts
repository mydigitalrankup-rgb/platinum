import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import BlogPost from "@/models/BlogPost";
import Lead from "@/models/Lead";

const STALE_AFTER_DAYS = 180; // real estate content ages fast - flag after 6 months

function isStale(publishedAt: Date | null, freshnessReviewedAt: Date | null) {
  const reference = freshnessReviewedAt || publishedAt;
  if (!reference) return false;
  const daysSince = (Date.now() - new Date(reference).getTime()) / (1000 * 60 * 60 * 24);
  return daysSince > STALE_AFTER_DAYS;
}

export async function GET() {
  await connectDB();

  const posts = await BlogPost.find().sort({ createdAt: -1 }).lean();

  const leadCounts = await Lead.aggregate([
    { $match: { sourceType: "blog", sourcePostId: { $ne: null } } },
    { $group: { _id: "$sourcePostId", count: { $sum: 1 } } },
  ]);
  const leadCountMap = new Map(leadCounts.map((l) => [String(l._id), l.count]));

  const enriched = posts.map((post) => ({
    ...post,
    isStale: post.status === "published" && isStale(post.publishedAt, post.freshnessReviewedAt),
    leadsGenerated: leadCountMap.get(String(post._id)) || 0,
  }));

  return NextResponse.json({ posts: enriched });
}

export async function POST(req: NextRequest) {
  await connectDB();
  const body = await req.json();

  if (body.status === "published" && !body.publishedAt) {
    body.publishedAt = new Date();
  }
  body.freshnessReviewedAt = new Date();

  const post = await BlogPost.create(body);
  return NextResponse.json({ post }, { status: 201 });
}
