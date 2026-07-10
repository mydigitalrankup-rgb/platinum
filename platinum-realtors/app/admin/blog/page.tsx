"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Post = {
  _id: string;
  title: string;
  status: string;
  category: string;
  viewCount: number;
  leadsGenerated: number;
  isStale: boolean;
  publishedAt: string | null;
  createdAt: string;
};

export default function BlogDashboard() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState<"recent" | "leads" | "views">("recent");
  const [filterStale, setFilterStale] = useState(false);

  useEffect(() => {
    fetch("/api/admin/blog")
      .then((r) => r.json())
      .then((d) => {
        setPosts(d.posts || []);
        setLoading(false);
      });
  }, []);

  async function handleDelete(id: string) {
    if (!confirm("Delete this post? This cannot be undone.")) return;
    await fetch(`/api/admin/blog/${id}`, { method: "DELETE" });
    setPosts((prev) => prev.filter((p) => p._id !== id));
  }

  let display = [...posts];
  if (filterStale) display = display.filter((p) => p.isStale);
  if (sortBy === "leads") display.sort((a, b) => b.leadsGenerated - a.leadsGenerated);
  if (sortBy === "views") display.sort((a, b) => b.viewCount - a.viewCount);

  const staleCount = posts.filter((p) => p.isStale).length;

  return (
    <div>
      <div className="header-row">
        <div>
          <h1>Blog Posts</h1>
          <p className="subtitle">{posts.length} total &middot; {staleCount} flagged for review</p>
        </div>
        <Link href="/admin/blog/new" className="primary-btn">
          + New Post
        </Link>
      </div>

      <div className="controls">
        <div className="sort-group">
          <button className={sortBy === "recent" ? "active" : ""} onClick={() => setSortBy("recent")}>
            Recent
          </button>
          <button className={sortBy === "leads" ? "active" : ""} onClick={() => setSortBy("leads")}>
            Top by leads
          </button>
          <button className={sortBy === "views" ? "active" : ""} onClick={() => setSortBy("views")}>
            Top by views
          </button>
        </div>
        <label className="stale-toggle">
          <input type="checkbox" checked={filterStale} onChange={(e) => setFilterStale(e.target.checked)} />
          Needs review only
        </label>
      </div>

      {loading ? (
        <p className="subtitle">Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Status</th>
              <th>Views</th>
              <th>Leads</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {display.map((post) => (
              <tr key={post._id}>
                <td>
                  <Link href={`/admin/blog/${post._id}/edit`} className="post-title">
                    {post.title}
                  </Link>
                  {post.isStale && <span className="badge badge-warning">Needs review</span>}
                </td>
                <td className="muted">{post.category}</td>
                <td>
                  <span className={`badge badge-${post.status}`}>{post.status}</span>
                </td>
                <td>{post.viewCount}</td>
                <td>{post.leadsGenerated > 0 ? <strong>{post.leadsGenerated}</strong> : "—"}</td>
                <td className="row-actions">
                  <Link href={`/admin/blog/${post._id}/edit`}>Edit</Link>
                  <button onClick={() => handleDelete(post._id)}>Delete</button>
                </td>
              </tr>
            ))}
            {display.length === 0 && (
              <tr>
                <td colSpan={6} className="muted">
                  No posts match this view.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}

      <style jsx>{`
        .header-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 24px;
        }
        h1 {
          font-family: Georgia, serif;
          font-size: 24px;
          margin: 0;
        }
        .subtitle {
          color: var(--text-muted);
          font-size: 13px;
          margin-top: 4px;
        }
        .primary-btn {
          background: var(--gold);
          color: var(--bg);
          padding: 10px 16px;
          border-radius: 6px;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
          height: fit-content;
        }
        .controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }
        .sort-group {
          display: flex;
          gap: 4px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 4px;
        }
        .sort-group button {
          background: transparent;
          border: none;
          color: var(--text-muted);
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 13px;
          cursor: pointer;
        }
        .sort-group button.active {
          background: var(--surface-hover);
          color: var(--text);
        }
        .stale-toggle {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: var(--text-muted);
        }
        table {
          width: 100%;
          border-collapse: collapse;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 10px;
          overflow: hidden;
        }
        th {
          text-align: left;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: var(--text-muted);
          padding: 12px 16px;
          border-bottom: 1px solid var(--border);
        }
        td {
          padding: 14px 16px;
          border-bottom: 1px solid var(--border);
          font-size: 14px;
        }
        tr:last-child td {
          border-bottom: none;
        }
        .post-title {
          color: var(--text);
          text-decoration: none;
          font-weight: 500;
        }
        .post-title:hover {
          color: var(--gold);
        }
        .muted {
          color: var(--text-muted);
        }
        .badge {
          display: inline-block;
          font-size: 11px;
          padding: 2px 8px;
          border-radius: 20px;
          margin-left: 8px;
          text-transform: capitalize;
        }
        .badge-warning {
          background: rgba(224, 162, 59, 0.15);
          color: var(--warning);
        }
        .badge-published {
          background: rgba(95, 191, 139, 0.15);
          color: var(--success);
        }
        .badge-draft {
          background: rgba(139, 147, 161, 0.15);
          color: var(--text-muted);
        }
        .badge-scheduled {
          background: rgba(201, 162, 75, 0.15);
          color: var(--gold);
        }
        .row-actions {
          display: flex;
          gap: 12px;
        }
        .row-actions a,
        .row-actions button {
          background: none;
          border: none;
          color: var(--text-muted);
          font-size: 13px;
          cursor: pointer;
          text-decoration: none;
          padding: 0;
        }
        .row-actions a:hover,
        .row-actions button:hover {
          color: var(--text);
        }
      `}</style>
    </div>
  );
}
