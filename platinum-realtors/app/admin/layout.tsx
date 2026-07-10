"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

type Post = { _id: string; title: string; slug: string };

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);

  const navItems = [
    { label: "Dashboard", href: "/admin/blog" },
    { label: "New Post", href: "/admin/blog/new" },
    { label: "Leads", href: "/admin/leads" },
  ];

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setPaletteOpen((open) => !open);
      }
      if (e.key === "Escape") setPaletteOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    if (paletteOpen && posts.length === 0) {
      fetch("/api/admin/blog")
        .then((r) => r.json())
        .then((d) => setPosts(d.posts || []));
    }
  }, [paletteOpen, posts.length]);

  const goTo = useCallback(
    (href: string) => {
      setPaletteOpen(false);
      setQuery("");
      router.push(href);
    },
    [router]
  );

  const filteredNav = navItems.filter((n) => n.label.toLowerCase().includes(query.toLowerCase()));
  const filteredPosts = query
    ? posts.filter((p) => p.title.toLowerCase().includes(query.toLowerCase())).slice(0, 6)
    : [];

  return (
    <div className="admin-shell">
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-mark" />
          Platinum <span className="brand-thin">Admin</span>
        </div>
        <nav>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link ${pathname === item.href ? "active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button className="palette-hint" onClick={() => setPaletteOpen(true)}>
          Search <kbd>⌘K</kbd>
        </button>
      </aside>

      <main className="content">{children}</main>

      {paletteOpen && (
        <div className="palette-overlay" onClick={() => setPaletteOpen(false)}>
          <div className="palette" onClick={(e) => e.stopPropagation()}>
            <input
              autoFocus
              placeholder="Jump to a page or post..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <div className="palette-results">
              {filteredNav.map((n) => (
                <div key={n.href} className="palette-item" onClick={() => goTo(n.href)}>
                  <span className="palette-tag">Go to</span> {n.label}
                </div>
              ))}
              {filteredPosts.map((p) => (
                <div
                  key={p._id}
                  className="palette-item"
                  onClick={() => goTo(`/admin/blog/${p._id}/edit`)}
                >
                  <span className="palette-tag">Post</span> {p.title}
                </div>
              ))}
              {query && filteredNav.length === 0 && filteredPosts.length === 0 && (
                <div className="palette-empty">No matches for &ldquo;{query}&rdquo;</div>
              )}
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        :root {
          --bg: #0f1115;
          --surface: #171a21;
          --surface-hover: #1d212b;
          --border: #262b35;
          --text: #edeef0;
          --text-muted: #8b93a1;
          --gold: #c9a24b;
          --platinum: #b9c0cb;
          --success: #5fbf8b;
          --warning: #e0a23b;
          --danger: #e0645f;
        }
        body {
          background: var(--bg);
          color: var(--text);
          font-family: "Inter", -apple-system, sans-serif;
        }
      `}</style>

      <style jsx>{`
        .admin-shell {
          display: flex;
          min-height: 100vh;
        }
        .sidebar {
          width: 220px;
          background: var(--surface);
          border-right: 1px solid var(--border);
          padding: 24px 16px;
          display: flex;
          flex-direction: column;
          position: fixed;
          height: 100vh;
        }
        .brand {
          font-family: "Georgia", serif;
          font-size: 18px;
          letter-spacing: 0.02em;
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 32px;
          color: var(--text);
        }
        .brand-thin {
          color: var(--text-muted);
          font-weight: 300;
        }
        .brand-mark {
          width: 8px;
          height: 8px;
          border-radius: 2px;
          background: var(--gold);
        }
        nav {
          display: flex;
          flex-direction: column;
          gap: 2px;
          flex: 1;
        }
        .nav-link {
          padding: 10px 12px;
          border-radius: 6px;
          color: var(--text-muted);
          text-decoration: none;
          font-size: 14px;
          border-top: 2px solid transparent;
        }
        .nav-link:hover {
          background: var(--surface-hover);
          color: var(--text);
        }
        .nav-link.active {
          background: var(--surface-hover);
          color: var(--text);
          border-top: 2px solid var(--gold);
        }
        .palette-hint {
          background: var(--bg);
          border: 1px solid var(--border);
          color: var(--text-muted);
          padding: 8px 12px;
          border-radius: 6px;
          font-size: 13px;
          text-align: left;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
        }
        .palette-hint kbd {
          background: var(--surface-hover);
          padding: 1px 6px;
          border-radius: 4px;
          font-size: 11px;
        }
        .content {
          margin-left: 220px;
          padding: 32px 40px;
          flex: 1;
        }
        .palette-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding-top: 15vh;
          z-index: 100;
        }
        .palette {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 10px;
          width: 480px;
          max-width: 90vw;
          overflow: hidden;
        }
        .palette input {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid var(--border);
          padding: 16px;
          color: var(--text);
          font-size: 15px;
          outline: none;
        }
        .palette-results {
          max-height: 320px;
          overflow-y: auto;
        }
        .palette-item {
          padding: 12px 16px;
          cursor: pointer;
          font-size: 14px;
          display: flex;
          gap: 10px;
        }
        .palette-item:hover {
          background: var(--surface-hover);
        }
        .palette-tag {
          color: var(--gold);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding-top: 2px;
        }
        .palette-empty {
          padding: 16px;
          color: var(--text-muted);
          font-size: 13px;
        }
      `}</style>
    </div>
  );
}
