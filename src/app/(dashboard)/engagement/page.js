"use client";

import { Badge, Button, Card, TextInput } from "@tremor/react";

const threads = [
  { from: "Jordan · Instagram", preview: "Love the new drop — will restock?", unread: true },
  { from: "Alex · X", preview: "@velora can you share the spec sheet?", unread: true },
  { from: "Priya · Facebook", preview: "Thanks for the quick shipping update post!", unread: false },
];

export default function EngagementPage() {
  return (
    <section className="db-section" aria-labelledby="eng-inbox">
      <h2 id="eng-inbox" className="db-section__label">
        Inbox &amp; replies
      </h2>
      <div className="db-grid-2">
        <Card className="db-card">
          <h3 style={{ margin: "0 0 8px", fontSize: 20, fontWeight: 700 }}>Inbox</h3>
          <p className="db-muted" style={{ margin: "0 0 12px" }}>
            Comments and DMs across connected accounts.
          </p>
          {threads.map((t) => (
            <div className="db-row" key={t.from}>
              <div>
                <strong>{t.from}</strong>
                <p className="db-muted" style={{ margin: "2px 0 0" }}>
                  {t.preview}
                </p>
              </div>
              {t.unread ? <Badge color="blue">New</Badge> : <span className="db-muted">Read</span>}
            </div>
          ))}
        </Card>

        <Card className="db-card">
          <h3 style={{ margin: "0 0 8px", fontSize: 20, fontWeight: 700 }}>Reply</h3>
          <TextInput placeholder="Search conversation…" className="mb-2" />
          <textarea className="db-input-field" rows={5} placeholder="Type a reply…" />
          <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
            <Button size="xs" variant="primary">
              Send reply
            </Button>
            <Button size="xs" variant="secondary">
              Assign to teammate
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
