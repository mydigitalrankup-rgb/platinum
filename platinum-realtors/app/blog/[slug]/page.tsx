import { connectDB } from "@/lib/mongodb";
import BlogPost from "@/models/BlogPost";
import { notFound } from "next/navigation";
import InquiryForm from "./InquiryForm";

export const revalidate = 0;

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  await connectDB();

  const post = await BlogPost.findOneAndUpdate(
    { slug, status: "published" },
    { $inc: { viewCount: 1 } },
    { returnDocument: "after" }
  ).lean();

  if (!post) notFound();

  return (
    <div style={styles.page}>
      <article style={styles.container}>
        <span style={styles.category}>{post.category}</span>
        <h1 style={styles.title}>{post.title}</h1>
        <div style={styles.accentLine} />

        {post.featuredImage && (
          <div style={styles.imageWrap}>
            <img src={post.featuredImage} alt={post.title} style={styles.image} />
          </div>
        )}

        <div
          dangerouslySetInnerHTML={{ __html: post.content }}
          style={styles.content}
        />

        <div style={styles.inquiryBox}>
          <h3 style={styles.inquiryTitle}>Interested in this? Talk to us.</h3>
          <InquiryForm sourcePostSlug={post.slug} />
        </div>
      </article>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    background: "linear-gradient(180deg, #0a0a0a 0%, #120606 100%)",
    minHeight: "100vh",
    padding: "64px 0",
  },
  container: { maxWidth: 760, margin: "0 auto", padding: "0 24px" },
  category: {
    display: "block",
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    color: "#d99a9a",
    marginBottom: 10,
  },
  title: { fontFamily: "Georgia, serif", fontSize: 38, color: "#f5f0e8", margin: "0 0 16px", lineHeight: 1.25 },
  accentLine: {
    width: 60,
    height: 3,
    background: "linear-gradient(90deg, #7a0e0e, #c9302c)",
    marginBottom: 32,
    borderRadius: 2,
  },
  imageWrap: {
    borderRadius: 14,
    overflow: "hidden",
    marginBottom: 36,
    boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
  },
  image: { width: "100%", display: "block" },
  content: {
    lineHeight: 1.8,
    fontSize: 17,
    color: "#e5ded6",
  },
  inquiryBox: {
    marginTop: 56,
    padding: 28,
    background: "linear-gradient(135deg, rgba(122,14,14,0.35), rgba(20,4,4,0.6))",
    border: "1px solid rgba(201,48,44,0.35)",
    borderRadius: 14,
  },
  inquiryTitle: { fontFamily: "Georgia, serif", color: "#f5f0e8", marginTop: 0, fontSize: 22 },
};