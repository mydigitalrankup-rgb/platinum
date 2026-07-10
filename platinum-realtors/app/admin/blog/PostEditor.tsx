"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const CATEGORIES = [
  "Market Trends",
  "Buying Guide",
  "Selling Guide",
  "Investment Tips",
  "Property News",
  "Legal & Documentation",
  "Commercial",
];

export type PostFormData = {
  _id?: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  category: string;
  tags: string[];
  status: "draft" | "published" | "scheduled";
  metaTitle: string;
  metaDescription: string;
};

const EMPTY: PostFormData = {
  title: "",
  slug: "",
  excerpt: "",
  content: "",
  featuredImage: "",
  category: CATEGORIES[0],
  tags: [],
  status: "draft",
  metaTitle: "",
  metaDescription: "",
};

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
}

export default function PostEditor({ initial }: { initial?: Partial<PostFormData> }) {
  const router = useRouter();
  const isEditing = Boolean(initial?._id);
  const [form, setForm] = useState<PostFormData>({ ...EMPTY, ...initial });
  const [saving, setSaving] = useState(false);
  const [savedAt, setSavedAt] = useState<Date | null>(null);
  const [tagInput, setTagInput] = useState("");
  const [uploadingImage, setUploadingImage] = useState(false);
  const [uploadingFeatured, setUploadingFeatured] = useState(false);
  const autosaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const imageInputRef = useRef<HTMLInputElement | null>(null);
  const featuredImageInputRef = useRef<HTMLInputElement | null>(null);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
        autolink: true,
        HTMLAttributes: {
          rel: "noopener noreferrer",
          target: "_blank",
        },
      }),
      Image.configure({
        HTMLAttributes: { class: "editor-image" },
      }),
    ],
    content: initial?.content || "",
    onUpdate: ({ editor }) => {
      setForm((f) => ({ ...f, content: editor.getHTML() }));
    },
  });

  // Autosave drafts 2s after the last change, so nothing gets lost mid-edit
  useEffect(() => {
    if (!isEditing || !form.title) return;
    if (autosaveTimer.current) clearTimeout(autosaveTimer.current);
    autosaveTimer.current = setTimeout(() => {
      save(true);
    }, 2000);
    return () => {
      if (autosaveTimer.current) clearTimeout(autosaveTimer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.title, form.content, form.excerpt]);

  async function save(isAutosave = false) {
    setSaving(true);
    const url = isEditing ? `/api/admin/blog/${form._id}` : "/api/admin/blog";
    const method = isEditing ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setSaving(false);

    if (res.ok) {
      setSavedAt(new Date());
      if (!isEditing) {
        const data = await res.json();
        router.push(`/admin/blog/${data.post._id}/edit`);
      }
    } else if (!isAutosave) {
      let message = "Failed to save post.";
      try {
        const data = await res.json();
        if (data?.errors) {
          message = Object.values(data.errors)
            .map((e: any) => e.message)
            .join("\n");
        } else if (data?.message) {
          message = data.message;
        }
      } catch {
        // response wasn't JSON, fall back to generic message
      }
      alert(message);
    }
  }

  function handleSetLink() {
    if (!editor) return;

    const previousUrl = editor.getAttributes("link").href as string | undefined;
    const url = window.prompt("URL (leave blank to remove link)", previousUrl || "https://");

    if (url === null) return;

    if (url.trim() === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }

    editor.chain().focus().extendMarkRange("link").setLink({ href: url.trim() }).run();
  }

  async function uploadFile(file: File): Promise<string | null> {
    if (!file.type.startsWith("image/")) {
      alert("Please select an image file.");
      return null;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        alert(data?.message || "Image upload failed.");
        return null;
      }

      const data = await res.json();
      return data.url as string;
    } catch (err) {
      alert("Image upload failed.");
      return null;
    }
  }

  async function handleInsertImage(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file || !editor) {
      e.target.value = "";
      return;
    }

    setUploadingImage(true);
    const url = await uploadFile(file);
    setUploadingImage(false);

    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
    e.target.value = "";
  }

  async function handleFeaturedImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingFeatured(true);
    const url = await uploadFile(file);
    setUploadingFeatured(false);

    if (url) {
      setForm((f) => ({ ...f, featuredImage: url }));
    }
    e.target.value = "";
  }

  function addTag() {
    const t = tagInput.trim();
    if (t && !form.tags.includes(t)) {
      setForm((f) => ({ ...f, tags: [...f.tags, t] }));
    }
    setTagInput("");
  }

  return (
    <div className="editor-page">
      <div className="editor-header">
        <input
          className="title-input"
          placeholder="Post title"
          value={form.title}
          onChange={(e) => {
            const title = e.target.value;
            setForm((f) => ({
              ...f,
              title,
              slug: f.slug === slugify(f.title) || !f.slug ? slugify(title) : f.slug,
            }));
          }}
        />
        <div className="header-actions">
          <span className="save-status">
            {saving ? "Saving..." : savedAt ? `Saved ${savedAt.toLocaleTimeString()}` : ""}
          </span>
          <select value={form.status} onChange={(e) => setForm((f) => ({ ...f, status: e.target.value as PostFormData["status"] }))}>
            <option value="draft">Draft</option>
            <option value="published">Published</option>
            <option value="scheduled">Scheduled</option>
          </select>
          <button
            className="primary-btn"
            onClick={() => save(false)}
            disabled={saving || !form.title.trim()}
            title={!form.title.trim() ? "Add a title before saving" : undefined}
          >
            Save
          </button>
        </div>
      </div>

      <input
        className="slug-input"
        value={form.slug}
        onChange={(e) => setForm((f) => ({ ...f, slug: slugify(e.target.value) }))}
        placeholder="post-slug"
      />

      <div className="layout">
        <div className="main-col">
          <div className="editor-toolbar">
            <button onClick={() => editor?.chain().focus().toggleBold().run()}>Bold</button>
            <button onClick={() => editor?.chain().focus().toggleItalic().run()}>Italic</button>
            <button onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()}>H2</button>
            <button onClick={() => editor?.chain().focus().toggleBulletList().run()}>List</button>
            <button onClick={() => editor?.chain().focus().toggleBlockquote().run()}>Quote</button>
            <button
              onClick={handleSetLink}
              className={editor?.isActive("link") ? "active" : ""}
            >
              Link
            </button>
            <button
              onClick={() => imageInputRef.current?.click()}
              disabled={uploadingImage}
            >
              {uploadingImage ? "Uploading..." : "Image"}
            </button>
            <input
              ref={imageInputRef}
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleInsertImage}
            />
          </div>
          <div className="editor-body">
            <EditorContent editor={editor} />
          </div>

          <textarea
            className="excerpt-input"
            placeholder="Short excerpt for the blog listing page..."
            value={form.excerpt}
            onChange={(e) => setForm((f) => ({ ...f, excerpt: e.target.value }))}
            rows={3}
          />
        </div>

        <aside className="side-col">
          <div className="panel">
            <label>Category</label>
            <select value={form.category} onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}>
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div className="panel">
            <label>Featured image</label>
            <input
              value={form.featuredImage}
              onChange={(e) => setForm((f) => ({ ...f, featuredImage: e.target.value }))}
              placeholder="https://..."
            />
            <button
              type="button"
              className="upload-btn"
              onClick={() => featuredImageInputRef.current?.click()}
              disabled={uploadingFeatured}
            >
              {uploadingFeatured ? "Uploading..." : "Upload from computer"}
            </button>
            <input
              ref={featuredImageInputRef}
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleFeaturedImageUpload}
            />
            {form.featuredImage && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={form.featuredImage} alt="Featured preview" className="featured-preview" />
            )}
          </div>

          <div className="panel">
            <label>Tags</label>
            <div className="tag-input-row">
              <input
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
                placeholder="Add a tag..."
              />
              <button onClick={addTag}>Add</button>
            </div>
            <div className="tag-list">
              {form.tags.map((t) => (
                <span key={t} className="tag-chip">
                  {t}
                  <button onClick={() => setForm((f) => ({ ...f, tags: f.tags.filter((x) => x !== t) }))}>×</button>
                </span>
              ))}
            </div>
          </div>

          <div className="panel seo-panel">
            <label>SEO</label>
            <input
              value={form.metaTitle}
              onChange={(e) => setForm((f) => ({ ...f, metaTitle: e.target.value }))}
              placeholder="Meta title"
            />
            <textarea
              value={form.metaDescription}
              onChange={(e) => setForm((f) => ({ ...f, metaDescription: e.target.value }))}
              placeholder="Meta description"
              rows={3}
            />
          </div>
        </aside>
      </div>

      <style jsx>{`
        .editor-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          margin-bottom: 8px;
        }
        .title-input {
          flex: 1;
          background: transparent;
          border: none;
          font-family: Georgia, serif;
          font-size: 26px;
          color: var(--text);
          outline: none;
        }
        .header-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .save-status {
          color: var(--text-muted);
          font-size: 12px;
          min-width: 90px;
        }
        select {
          background: var(--surface);
          border: 1px solid var(--border);
          color: var(--text);
          padding: 8px 10px;
          border-radius: 6px;
          font-size: 13px;
        }
        .primary-btn {
          background: var(--gold);
          color: var(--bg);
          border: none;
          padding: 8px 16px;
          border-radius: 6px;
          font-weight: 600;
          font-size: 13px;
          cursor: pointer;
        }
        .primary-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .slug-input {
          background: transparent;
          border: none;
          color: var(--text-muted);
          font-size: 13px;
          margin-bottom: 24px;
          outline: none;
          width: 100%;
        }
        .layout {
          display: flex;
          gap: 24px;
        }
        .main-col {
          flex: 1;
          min-width: 0;
        }
        .editor-toolbar {
          display: flex;
          gap: 6px;
          margin-bottom: 8px;
          flex-wrap: wrap;
        }
        .editor-toolbar button {
          background: var(--surface);
          border: 1px solid var(--border);
          color: var(--text-muted);
          padding: 6px 10px;
          border-radius: 6px;
          font-size: 12px;
          cursor: pointer;
        }
        .editor-toolbar button:hover {
          color: var(--text);
        }
        .editor-toolbar button.active {
          color: var(--gold);
          border-color: var(--gold);
        }
        .editor-toolbar button:disabled {
          opacity: 0.5;
          cursor: default;
        }
        .editor-body :global(a) {
          color: var(--gold);
          text-decoration: underline;
        }
        .editor-body :global(img.editor-image) {
          max-width: 100%;
          border-radius: 6px;
          margin: 8px 0;
        }
        .editor-body {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 16px;
          min-height: 320px;
          margin-bottom: 16px;
        }
        .editor-body :global(.ProseMirror) {
          outline: none;
          color: var(--text);
          line-height: 1.6;
        }
        .excerpt-input {
          width: 100%;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 12px;
          color: var(--text);
          font-size: 13px;
          resize: vertical;
        }
        .side-col {
          width: 280px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .panel {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 14px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        label {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: var(--text-muted);
        }
        .panel input,
        .panel textarea,
        .panel select {
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 6px;
          padding: 8px 10px;
          color: var(--text);
          font-size: 13px;
          outline: none;
          width: 100%;
        }
        .upload-btn {
          background: var(--surface-hover);
          border: 1px solid var(--border);
          color: var(--text);
          border-radius: 6px;
          padding: 8px 10px;
          font-size: 12px;
          cursor: pointer;
        }
        .upload-btn:disabled {
          opacity: 0.5;
          cursor: default;
        }
        .featured-preview {
          width: 100%;
          border-radius: 6px;
          margin-top: 4px;
          border: 1px solid var(--border);
        }
        .tag-input-row {
          display: flex;
          gap: 6px;
        }
        .tag-input-row button {
          background: var(--surface-hover);
          border: 1px solid var(--border);
          color: var(--text);
          border-radius: 6px;
          padding: 0 12px;
          cursor: pointer;
        }
        .tag-list {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .tag-chip {
          background: var(--surface-hover);
          color: var(--text-muted);
          font-size: 12px;
          padding: 3px 6px 3px 10px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .tag-chip button {
          background: none;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}