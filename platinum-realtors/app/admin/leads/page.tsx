"use client";

import { useEffect, useState } from "react";

type Lead = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  sourceType: string;
  sourcePostSlug: string | null;
  createdAt: string;
};

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/leads")
      .then((r) => r.json())
      .then((d) => {
        setLeads(d.leads || []);
        setLoading(false);
      });
  }, []);

  const fromBlog = leads.filter((l) => l.sourceType === "blog").length;

  return (
    <div>
      <h1>Leads</h1>
      <p className="subtitle">
        {leads.length} total &middot; {fromBlog} from blog posts
      </p>

      {loading ? (
        <p className="subtitle">Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Contact</th>
              <th>Source</th>
              <th>Received</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead._id}>
                <td>
                  {lead.name}
                  {lead.message && <div className="message">{lead.message}</div>}
                </td>
                <td className="muted">
                  {lead.email}
                  {lead.phone && <div>{lead.phone}</div>}
                </td>
                <td>
                  {lead.sourceType === "blog" && lead.sourcePostSlug ? (
                    <span className="badge">Blog: {lead.sourcePostSlug}</span>
                  ) : (
                    <span className="muted">{lead.sourceType}</span>
                  )}
                </td>
                <td className="muted">{new Date(lead.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
            {leads.length === 0 && (
              <tr>
                <td colSpan={4} className="muted">
                  No leads yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}

      <style jsx>{`
        h1 {
          font-family: Georgia, serif;
          font-size: 24px;
          margin: 0;
        }
        .subtitle {
          color: var(--text-muted);
          font-size: 13px;
          margin: 4px 0 24px;
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
          vertical-align: top;
        }
        tr:last-child td {
          border-bottom: none;
        }
        .muted {
          color: var(--text-muted);
          font-size: 13px;
        }
        .message {
          color: var(--text-muted);
          font-size: 12px;
          margin-top: 4px;
          max-width: 320px;
        }
        .badge {
          background: rgba(201, 162, 75, 0.15);
          color: var(--gold);
          font-size: 12px;
          padding: 3px 8px;
          border-radius: 20px;
        }
      `}</style>
    </div>
  );
}
