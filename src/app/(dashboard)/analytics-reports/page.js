"use client";

import { Button, Card } from "@tremor/react";

const kpis = [
  { label: "Likes", value: "24.5K", delta: "+8%" },
  { label: "Shares", value: "3.1K", delta: "+12%" },
  { label: "Comments", value: "1.9K", delta: "+3%" },
  { label: "Reach", value: "612K", delta: "+15%" },
];

const byPlatform = [
  { platform: "Instagram", impressions: "240K", engagement: "7.2%" },
  { platform: "Facebook", impressions: "118K", engagement: "4.1%" },
  { platform: "LinkedIn", impressions: "86K", engagement: "5.4%" },
  { platform: "X", impressions: "168K", engagement: "6.0%" },
];

export default function AnalyticsReportsPage() {
  return (
    <>
      <section className="db-section" aria-labelledby="ar-kpis">
        <h2 id="ar-kpis" className="db-section__label">
          Key metrics
        </h2>
        <div className="db-grid-4">
          {kpis.map((k) => (
            <Card className="db-card" key={k.label}>
              <p className="db-label">{k.label}</p>
              <p className="db-value" style={{ fontSize: 26 }}>
                {k.value}
              </p>
              <p className="db-trend-up" style={{ margin: 0 }}>
                {k.delta} vs prior period
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section className="db-section" aria-labelledby="ar-reports">
        <h2 id="ar-reports" className="db-section__label">
          Breakdown &amp; exports
        </h2>
        <div className="db-grid-2">
          <Card className="db-card">
            <h3 style={{ margin: "0 0 8px", fontSize: 20, fontWeight: 700 }}>Platform-wise analysis</h3>
            <p className="db-muted" style={{ margin: "0 0 12px" }}>
              Impressions and engagement rate (sample data).
            </p>
            {byPlatform.map((row) => (
              <div className="db-row" key={row.platform}>
                <strong>{row.platform}</strong>
                <span className="db-muted">
                  {row.impressions} imp. · {row.engagement} ER
                </span>
              </div>
            ))}
          </Card>

          <Card className="db-card">
            <h3 style={{ margin: "0 0 8px", fontSize: 20, fontWeight: 700 }}>Reports</h3>
            <p className="db-muted" style={{ margin: "0 0 12px" }}>
              Export summaries for stakeholders.
            </p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <Button size="xs" variant="primary">
                Generate PDF
              </Button>
              <Button size="xs" variant="secondary">
                Export CSV
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
