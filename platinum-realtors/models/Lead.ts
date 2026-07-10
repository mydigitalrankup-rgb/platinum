import mongoose, { Schema, models, model } from "mongoose";

const LeadSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, default: "" },
    message: { type: String, default: "" },

    // Where the lead came from - this is what powers "this post generated N leads"
    sourceType: {
      type: String,
      enum: ["blog", "property", "contact"],
      default: "contact",
    },
    sourcePostId: { type: Schema.Types.ObjectId, ref: "BlogPost", default: null },
    sourcePostSlug: { type: String, default: null },
  },
  { timestamps: true }
);

export type LeadDoc = mongoose.InferSchemaType<typeof LeadSchema> & { _id: string };

export default models.Lead || model("Lead", LeadSchema);
