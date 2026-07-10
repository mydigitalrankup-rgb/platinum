import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Lead from "@/models/Lead";

export async function GET() {
  await connectDB();
  const leads = await Lead.find().sort({ createdAt: -1 }).limit(200).lean();
  return NextResponse.json({ leads });
}
