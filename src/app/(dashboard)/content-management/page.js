"use client";

import { Badge, Button, Card, TextInput } from "@tremor/react";

const drafts = [
  { title: "Spring sale teaser", updated: "2h ago", status: "Draft" },
  { title: "Customer story — Acme Co.", updated: "Yesterday", status: "Draft" },
  { title: "Weekly tips thread", updated: "3d ago", status: "Review" },
];

export default function ContentManagementPage() {
  return (
    <>
      <section className="db-section" aria-labelledby="cm-editor">
        <h2 id="cm-editor" className="db-section__label">
          Composer &amp; library
        </h2>
        <div className="db-grid-2">
          <Card className="db-card">
            <h3 style={{ margin: "0 0 8px", fontSize: 20, fontWeight: 700 }}>New post</h3>
            <p className="db-muted" style={{ margin: "0 0 12px" }}>
              Compose copy, attach media, and save as draft or publish when ready.
            </p>
            <div style={{ display: "grid", gap: 10 }}>
              <TextInput placeholder="Post title" />
              <textarea
                className="db-input-field"
                rows={5}
                placeholder="Write your caption or article…"
              />
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <Button size="xs">Upload image</Button>
                <Button size="xs" variant="secondary">
                  Upload video
                </Button>
                <Button size="xs" variant="secondary">
                  Save draft
                </Button>
                <Button size="xs" variant="primary">
                  Continue to publisher
                </Button>
              </div>
            </div>
          </Card>

          <Card className="db-card">
            <h3 style={{ margin: "0 0 8px", fontSize: 20, fontWeight: 700 }}>Published &amp; drafts</h3>
            <p className="db-muted" style={{ margin: "0 0 12px" }}>
              Edit, delete, or duplicate existing posts.
            </p>
            <div className="db-row">
              <div>
                <strong>Product drop — teaser</strong>
                <p className="db-muted" style={{ margin: "2px 0 0" }}>
                  Instagram · Published Apr 12
                </p>
              </div>
              <div style={{ display: "flex", gap: 6 }}>
                <Button size="xs" variant="secondary">
                  Edit
                </Button>
                <Button size="xs" variant="secondary">
                  Delete
                </Button>
              </div>
            </div>
            <div className="db-row">
              <div>
                <strong>HR hiring post</strong>
                <p className="db-muted" style={{ margin: "2px 0 0" }}>
                  LinkedIn · Published Apr 10
                </p>
              </div>
              <div style={{ display: "flex", gap: 6 }}>
                <Button size="xs" variant="secondary">
                  Edit
                </Button>
                <Button size="xs" variant="secondary">
                  Delete
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="db-section" aria-labelledby="cm-drafts">
        <h2 id="cm-drafts" className="db-section__label">
          Quick drafts
        </h2>
        <Card className="db-card">
          <h3 style={{ margin: "0 0 8px", fontSize: 20, fontWeight: 700 }}>Drafts</h3>
          <p className="db-muted" style={{ margin: "0 0 12px" }}>
            Pick up where you left off.
          </p>
          {drafts.map((d) => (
            <div className="db-row" key={d.title}>
              <div>
                <strong>{d.title}</strong>
                <p className="db-muted" style={{ margin: "2px 0 0" }}>
                  Updated {d.updated}
                </p>
              </div>
              <Badge color={d.status === "Review" ? "amber" : "gray"}>{d.status}</Badge>
            </div>
          ))}
        </Card>
      </section>
    </>
  );
}
