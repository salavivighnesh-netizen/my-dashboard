"use client";

import { Badge, Button, Card, TextInput } from "@tremor/react";

const rules = [
  { name: "Weekday morning queue", detail: "Mon–Fri · 09:00 · Instagram + LinkedIn", on: true },
  { name: "Stories when engagement > 5%", detail: "Trigger from Analytics threshold", on: false },
];

const suggestions = [
  { title: "Carousel: Q2 product roadmap", reason: "Matches trending topics in your niche" },
  { title: "Poll: feature prioritization", reason: "High reply rate on similar past posts" },
];

export default function AutomationPage() {
  return (
    <>
      <section className="db-section" aria-labelledby="auto-intro">
        <h2 id="auto-intro" className="db-section__label">
          Automation overview
        </h2>
        <Card className="db-card">
          <h3 style={{ margin: "0 0 4px", fontSize: 20, fontWeight: 700 }}>Automation</h3>
          <p className="db-muted" style={{ margin: 0 }}>
            Optional advanced flows: scheduled auto-post rules, AI-assisted content ideas, and bot bridges for Telegram or
            Discord.
          </p>
        </Card>
      </section>

      <section className="db-section" aria-labelledby="auto-rules">
        <h2 id="auto-rules" className="db-section__label">
          Rules &amp; suggestions
        </h2>
        <div style={{ display: "grid", gap: 14 }}>
          <Card className="db-card">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 8 }}>
              <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>Auto-post rules</h3>
              <Button size="xs" variant="primary">
                New rule
              </Button>
            </div>
            {rules.map((r) => (
              <div className="db-row" key={r.name}>
                <div>
                  <strong>{r.name}</strong>
                  <p className="db-muted" style={{ margin: "2px 0 0" }}>
                    {r.detail}
                  </p>
                </div>
                <Badge color={r.on ? "emerald" : "gray"}>{r.on ? "Active" : "Paused"}</Badge>
              </div>
            ))}
          </Card>

          <Card className="db-card">
            <h3 style={{ margin: "0 0 12px", fontSize: 18, fontWeight: 700 }}>Content suggestions</h3>
            <p className="db-muted" style={{ margin: "0 0 12px", fontSize: 13 }}>
              Ideas generated from your calendar, performance data, and industry signals (demo copy).
            </p>
            {suggestions.map((s) => (
              <div className="db-row" key={s.title}>
                <div>
                  <strong>{s.title}</strong>
                  <p className="db-muted" style={{ margin: "2px 0 0" }}>
                    {s.reason}
                  </p>
                </div>
                <Button size="xs" variant="secondary">
                  Open in composer
                </Button>
              </div>
            ))}
          </Card>
        </div>
      </section>

      <section className="db-section" aria-labelledby="auto-bots">
        <h2 id="auto-bots" className="db-section__label">
          Bot integrations
        </h2>
        <div className="db-grid-2">
          <Card className="db-card">
            <h3 style={{ margin: "0 0 8px", fontSize: 18, fontWeight: 700 }}>Telegram bot</h3>
            <p className="db-muted" style={{ margin: "0 0 10px", fontSize: 13 }}>
              Approve drafts and get publish alerts in a private channel.
            </p>
            <TextInput placeholder="Bot token (masked in production)" />
            <div style={{ marginTop: 10, display: "flex", gap: 8 }}>
              <Button size="xs" variant="primary">
                Connect
              </Button>
              <Button size="xs" variant="secondary">
                Test message
              </Button>
            </div>
          </Card>
          <Card className="db-card">
            <h3 style={{ margin: "0 0 8px", fontSize: 18, fontWeight: 700 }}>Discord integration</h3>
            <p className="db-muted" style={{ margin: "0 0 10px", fontSize: 13 }}>
              Webhook URL for a server channel; Velora posts rich embeds for scheduled and live events.
            </p>
            <TextInput placeholder="https://discord.com/api/webhooks/…" />
            <div style={{ marginTop: 10 }}>
              <Button size="xs" variant="primary">
                Save webhook
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
