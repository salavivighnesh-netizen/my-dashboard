"use client";

import { Badge, Button, Card } from "@tremor/react";

const items = [
  { title: "New comment thread", detail: "Instagram · 4 unread mentions", type: "Engagement", time: "5m ago" },
  { title: "Post published", detail: "LinkedIn · Hiring update is live", type: "Publishing", time: "1h ago" },
  { title: "Campaign cap warning", detail: "Q2 awareness at 90% daily budget", type: "Campaign", time: "3h ago" },
  { title: "Integration health", detail: "X token refresh succeeded", type: "System", time: "Yesterday" },
];

export default function NotificationsPage() {
  return (
    <>
      <section className="db-section" aria-labelledby="notif-actions">
        <h2 id="notif-actions" className="db-section__label">
          Inbox controls
        </h2>
        <Card className="db-card">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
            <div>
              <h3 style={{ margin: "0 0 4px", fontSize: 20, fontWeight: 700 }}>Notifications</h3>
              <p className="db-muted" style={{ margin: 0 }}>
                Alerts for comments, messages, post status, and system events.
              </p>
            </div>
            <Button size="xs" variant="secondary">
              Mark all read
            </Button>
          </div>
        </Card>
      </section>

      <section className="db-section" aria-labelledby="notif-feed">
        <h2 id="notif-feed" className="db-section__label">
          Activity feed
        </h2>
        <Card className="db-card">
          {items.map((n) => (
            <div className="db-row" key={n.title}>
              <div>
                <strong>{n.title}</strong>
                <p className="db-muted" style={{ margin: "2px 0 0" }}>
                  {n.detail}
                </p>
              </div>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <Badge color="blue">{n.type}</Badge>
                <span className="db-muted" style={{ fontSize: 12 }}>
                  {n.time}
                </span>
              </div>
            </div>
          ))}
        </Card>
      </section>
    </>
  );
}
