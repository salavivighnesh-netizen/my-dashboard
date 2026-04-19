"use client";

import { Badge, Button, Card, TextInput } from "@tremor/react";

const campaigns = [
  { name: "Q2 awareness", status: "Active", spend: "$4,200", roas: "3.4x" },
  { name: "Product launch — paid", status: "Paused", spend: "$1,850", roas: "2.1x" },
  { name: "Retargeting web visitors", status: "Active", spend: "$980", roas: "4.8x" },
];

export default function CampaignManagementPage() {
  return (
    <>
      <section className="db-section" aria-labelledby="camp-create">
        <h2 id="camp-create" className="db-section__label">
          New campaign
        </h2>
        <Card className="db-card">
          <h3 style={{ margin: "0 0 8px", fontSize: 20, fontWeight: 700 }}>Campaign setup</h3>
          <p className="db-muted" style={{ margin: "0 0 12px" }}>
            Define objective, budget, and linked ad accounts (integration placeholder).
          </p>
          <div style={{ display: "grid", gap: 10, maxWidth: 480 }}>
            <TextInput placeholder="Campaign name" />
            <TextInput placeholder="Objective (e.g. conversions, reach)" />
            <TextInput placeholder="Daily budget (USD)" />
            <Button size="xs" variant="primary">
              Create draft campaign
            </Button>
          </div>
        </Card>
      </section>

      <section className="db-section" aria-labelledby="camp-list">
        <h2 id="camp-list" className="db-section__label">
          Campaign list
        </h2>
        <Card className="db-card">
          <h3 style={{ margin: "0 0 8px", fontSize: 20, fontWeight: 700 }}>Active &amp; paused</h3>
          {campaigns.map((c) => (
            <div className="db-row" key={c.name}>
              <div>
                <strong>{c.name}</strong>
                <p className="db-muted" style={{ margin: "2px 0 0" }}>
                  Spend {c.spend} · ROAS {c.roas}
                </p>
              </div>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <Badge color={c.status === "Active" ? "emerald" : "gray"}>{c.status}</Badge>
                <Button size="xs" variant="secondary">
                  View performance
                </Button>
              </div>
            </div>
          ))}
        </Card>
      </section>
    </>
  );
}
