"use client";

import { Button, Card } from "@tremor/react";

const platforms = ["Facebook", "Instagram", "LinkedIn", "X"];

export default function PostPublisherPage() {
  return (
    <>
      <section className="db-section" aria-labelledby="pp-publish">
        <h2 id="pp-publish" className="db-section__label">
          Publish
        </h2>
        <Card className="db-card">
          <h3 style={{ margin: "0 0 8px", fontSize: 20, fontWeight: 700 }}>Publish now</h3>
          <p className="db-muted" style={{ margin: "0 0 12px" }}>
            Select platforms and send your latest composed post immediately.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 12 }}>
            {platforms.map((p) => (
              <label key={p} className="flex items-center gap-8 text-sm" style={{ color: "var(--text)" }}>
                <input type="checkbox" defaultChecked={p !== "X"} />
                {p}
              </label>
            ))}
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <Button size="xs" variant="primary">
              Publish to selected
            </Button>
            <Button size="xs" variant="secondary">
              Preview per platform
            </Button>
          </div>
        </Card>
      </section>

      <section className="db-section" aria-labelledby="pp-checklist">
        <h2 id="pp-checklist" className="db-section__label">
          Pre-flight checks
        </h2>
        <Card className="db-card">
          <h3 style={{ margin: "0 0 8px", fontSize: 20, fontWeight: 700 }}>Multi-platform checklist</h3>
          <div className="db-row">
            <strong>Copy length</strong>
            <span className="db-muted">Within limits for all selected</span>
          </div>
          <div className="db-row">
            <strong>Media</strong>
            <span className="db-muted">1 image · formats OK</span>
          </div>
          <div className="db-row">
            <strong>Compliance</strong>
            <span className="db-muted">No blocked keywords flagged</span>
          </div>
        </Card>
      </section>
    </>
  );
}
