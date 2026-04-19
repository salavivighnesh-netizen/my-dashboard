"use client";

import { Button, Card, TextInput } from "@tremor/react";

const integrations = [
  { name: "Default API key", masked: "vel_••••••••••••8f2a", scope: "Full workspace" },
  { name: "Zapier webhook", masked: "https://hooks…/velora", scope: "Publish events only" },
];

export default function SettingsPage() {
  return (
    <>
      <section className="db-section" aria-labelledby="set-intro">
        <h2 id="set-intro" className="db-section__label">
          Workspace settings
        </h2>
        <Card className="db-card">
          <h3 style={{ margin: "0 0 4px", fontSize: 20, fontWeight: 700 }}>Settings</h3>
          <p className="db-muted" style={{ margin: 0 }}>
            Profile details, API keys, third-party integrations, and appearance. Use the sidebar theme control for light/dark
            mode.
          </p>
        </Card>
      </section>

      <section className="db-section" aria-labelledby="set-profile">
        <h2 id="set-profile" className="db-section__label">
          Profile &amp; preferences
        </h2>
        <div className="db-grid-2">
          <Card className="db-card">
            <h3 style={{ margin: "0 0 12px", fontSize: 18, fontWeight: 700 }}>Profile</h3>
            <div style={{ display: "grid", gap: 10 }}>
              <TextInput placeholder="Display name" defaultValue="Alex Morgan" />
              <TextInput placeholder="Work email" type="email" defaultValue="alex@company.com" />
              <TextInput placeholder="Job title" defaultValue="Marketing Lead" />
              <Button size="xs" variant="primary">
                Save profile
              </Button>
            </div>
          </Card>

          <Card className="db-card">
            <h3 style={{ margin: "0 0 12px", fontSize: 18, fontWeight: 700 }}>Preferences</h3>
            <p className="db-muted" style={{ margin: "0 0 10px", fontSize: 13 }}>
              Time zone, date format, and default post language for the composer.
            </p>
            <div style={{ display: "grid", gap: 10 }}>
              <TextInput placeholder="Time zone" defaultValue="UTC+5:30 — India" />
              <TextInput placeholder="Default language" defaultValue="English (US)" />
              <Button size="xs" variant="secondary">
                Save preferences
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <section className="db-section" aria-labelledby="set-api">
        <h2 id="set-api" className="db-section__label">
          API &amp; integrations
        </h2>
        <Card className="db-card">
          <h3 style={{ margin: "0 0 8px", fontSize: 18, fontWeight: 700 }}>API keys &amp; integrations</h3>
          <p className="db-muted" style={{ margin: "0 0 14px", fontSize: 13 }}>
            Rotate keys regularly. Scoped keys limit access for automation tools.
          </p>
          {integrations.map((row) => (
            <div className="db-row" key={row.name}>
              <div>
                <strong>{row.name}</strong>
                <p className="db-muted" style={{ margin: "2px 0 0", fontFamily: "var(--font-geist-mono), monospace", fontSize: 12 }}>
                  {row.masked}
                </p>
                <p className="db-muted" style={{ margin: "4px 0 0", fontSize: 12 }}>
                  {row.scope}
                </p>
              </div>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                <Button size="xs" variant="secondary">
                  Copy
                </Button>
                <Button size="xs" variant="secondary">
                  Rotate
                </Button>
              </div>
            </div>
          ))}
          <div style={{ marginTop: 12 }}>
            <Button size="xs" variant="primary">
              Create new API key
            </Button>
          </div>
        </Card>
      </section>
    </>
  );
}
