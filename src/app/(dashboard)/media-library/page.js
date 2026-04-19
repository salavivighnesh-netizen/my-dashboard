"use client";

import { Badge, Button, Card } from "@tremor/react";

const assets = [
  { name: "spring-launch-hero.jpg", type: "Image", size: "2.4 MB", used: "3 posts" },
  { name: "product-demo-loop.mp4", type: "Video", size: "18.1 MB", used: "1 reel" },
  { name: "logo-mark-dark.svg", type: "Image", size: "12 KB", used: "Brand kit" },
  { name: "team-offsite-broll.mp4", type: "Video", size: "240 MB", used: "Draft only" },
];

export default function MediaLibraryPage() {
  return (
    <>
      <section className="db-section" aria-labelledby="ml-actions">
        <h2 id="ml-actions" className="db-section__label">
          Library &amp; uploads
        </h2>
        <Card className="db-card">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
            <div>
              <h3 style={{ margin: "0 0 4px", fontSize: 20, fontWeight: 700 }}>Media Library</h3>
              <p className="db-muted" style={{ margin: 0 }}>
                Store images and videos in one place. Attach files from here when composing or scheduling posts.
              </p>
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <Button size="xs" variant="secondary">
                Upload images
              </Button>
              <Button size="xs" variant="primary">
                Upload videos
              </Button>
            </div>
          </div>
        </Card>
      </section>

      <section className="db-section" aria-labelledby="ml-files">
        <h2 id="ml-files" className="db-section__label">
          Files
        </h2>
        <Card className="db-card">
          <h3 style={{ margin: "0 0 12px", fontSize: 18, fontWeight: 700 }}>Recent uploads</h3>
          {assets.map((a) => (
            <div className="db-row" key={a.name}>
              <div>
                <strong>{a.name}</strong>
                <p className="db-muted" style={{ margin: "2px 0 0" }}>
                  {a.type} · {a.size}
                </p>
              </div>
              <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                <Badge color="slate">{a.used}</Badge>
                <Button size="xs" variant="secondary">
                  Copy link
                </Button>
                <Button size="xs" variant="secondary">
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </Card>
      </section>

      <section className="db-section" aria-labelledby="ml-folders">
        <h2 id="ml-folders" className="db-section__label">
          Organization
        </h2>
        <Card className="db-card">
          <h3 style={{ margin: "0 0 8px", fontSize: 18, fontWeight: 700 }}>Folders (demo)</h3>
          <p className="db-muted" style={{ margin: "0 0 10px", fontSize: 13 }}>
            Organize by campaign or brand. Drag-and-drop would plug in here in a full build.
          </p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <Button size="xs" variant="secondary">
              /Q2 Campaign
            </Button>
            <Button size="xs" variant="secondary">
              /Brand assets
            </Button>
            <Button size="xs" variant="secondary">
              + New folder
            </Button>
          </div>
        </Card>
      </section>
    </>
  );
}
