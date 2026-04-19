"use client";

import { Badge, Button, Card } from "@tremor/react";

const platforms = [
  { name: "Facebook", handle: "Velora Official", connected: true },
  { name: "Instagram", handle: "@velora", connected: true },
  { name: "LinkedIn", handle: "Velora Inc.", connected: false },
  { name: "X (Twitter)", handle: "@velora", connected: false },
];

export default function SocialAccountsPage() {
  return (
    <section className="db-section" aria-labelledby="sa-connections">
      <h2 id="sa-connections" className="db-section__label">
        Platform connections
      </h2>
      <Card className="db-card">
        <h3 style={{ margin: "0 0 8px", fontSize: 20, fontWeight: 700 }}>Connected platforms</h3>
        <p className="db-muted" style={{ margin: "0 0 12px" }}>
          Connect OAuth accounts to enable publishing, analytics, and engagement sync.
        </p>
        {platforms.map((p) => (
          <div className="db-row" key={p.name}>
            <div>
              <strong>{p.name}</strong>
              <p className="db-muted" style={{ margin: "2px 0 0" }}>
                {p.connected ? p.handle : "Not connected"}
              </p>
            </div>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <Badge color={p.connected ? "emerald" : "gray"}>{p.connected ? "Connected" : "Disconnected"}</Badge>
              <Button size="xs" variant={p.connected ? "secondary" : "primary"}>
                {p.connected ? "Manage" : "Connect"}
              </Button>
            </div>
          </div>
        ))}
      </Card>
    </section>
  );
}
