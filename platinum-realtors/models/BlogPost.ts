import mongoose, { Schema, models, model } from "mongoose";

const BlogPostSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true, index: true },
    excerpt: { type: String, default: "" },
    content: { type: String, required: true },
    featuredImage: { type: String, default: "" },

    category: {
      type: String,
      enum: [
        "Market Trends",
        "Buying Guide",
        "Selling Guide",
        "Investment Tips",
        "Property News",
        "Legal & Documentation",
        "Commercial",
      ],
      required: true,
    },
    tags: { type: [String], default: [] },
    author: { type: String, default: "Platinum Realtors" },

    status: {
      type: String,
      enum: ["draft", "published", "scheduled"],
      default: "draft",
    },
    scheduledFor: { type: Date, default: null },
    publishedAt: { type: Date, default: null },

    metaTitle: { type: String, default: "" },
    metaDescription: { type: String, default: "" },

    // Real estate content ages fast - this is checked against publishedAt
    // to flag posts that likely reference stale prices/rates/trends
    freshnessReviewedAt: { type: Date, default: () => new Date() },

    viewCount: { type: Number, default: 0 },

    // Optional links to live property listings referenced inline in the post
    linkedProperties: { type: [String], default: [] },
  },
  { timestamps: true }
);

export type BlogPostDoc = mongoose.InferSchemaType<typeof BlogPostSchema> & { _id: string };

export default models.BlogPost || model("BlogPost", BlogPostSchema);
