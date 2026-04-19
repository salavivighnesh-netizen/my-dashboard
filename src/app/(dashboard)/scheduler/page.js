"use client";

import { Badge, Button, Card } from "@tremor/react";

const week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const scheduled = [
  { day: "Tue", time: "09:00", label: "LinkedIn — hiring update", auto: true },
  { day: "Wed", time: "14:30", label: "Instagram — story set", auto: false },
  { day: "Fri", time: "11:00", label: "X — thread (3 parts)", auto: true },
];

export default function SchedulerPage() {
  return (
    <>
      <section className="db-section" aria-labelledby="sch-plan">
        <h2 id="sch-plan" className="db-section__label">
          Plan &amp; calendar
        </h2>
        <div className="db-grid-2">
          <Card className="db-card">
            <h3 style={{ margin: "0 0 8px", fontSize: 20, fontWeight: 700 }}>Schedule a post</h3>
            <p className="db-muted" style={{ margin: "0 0 12px" }}>
              Pick date and time; enable auto-post when integrations are connected.
            </p>
            <div style={{ display: "grid", gap: 10, maxWidth: 420 }}>
              <label className="db-muted" style={{ fontSize: 12 }}>
                Date
                <input type="date" className="db-input-field mt-1" />
              </label>
              <label className="db-muted" style={{ fontSize: 12 }}>
                Time
                <input type="time" className="db-input-field mt-1" />
              </label>
              <label className="flex items-center gap-8 text-sm" style={{ color: "var(--text)" }}>
                <input type="checkbox" defaultChecked />
                Auto-post at scheduled time
              </label>
              <Button size="xs">Add to calendar</Button>
            </div>
          </Card>

          <Card className="db-card">
            <h3 style={{ margin: "0 0 8px", fontSize: 20, fontWeight: 700 }}>Calendar view</h3>
            <p className="db-muted" style={{ margin: "0 0 12px" }}>
              Week-at-a-glance (placeholder grid).
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: `repeat(${week.length}, minmax(0, 1fr))`,
                gap: 8,
              }}
            >
              {week.map((d) => (
                <div key={d} className="db-cal-cell">
                  {d}
                </div>
              ))}
            </div>
            <p className="db-muted" style={{ margin: "12px 0 0", fontSize: 12 }}>
              Connect accounts in Social Accounts to sync live calendar data.
            </p>
          </Card>
        </div>
      </section>

      <section className="db-section" aria-labelledby="sch-upcoming">
        <h2 id="sch-upcoming" className="db-section__label">
          Upcoming queue
        </h2>
        <Card className="db-card">
          <h3 style={{ margin: "0 0 8px", fontSize: 20, fontWeight: 700 }}>Upcoming</h3>
          {scheduled.map((s) => (
            <div className="db-row" key={`${s.day}-${s.time}`}>
              <div>
                <strong>
                  {s.day} · {s.time}
                </strong>
                <p className="db-muted" style={{ margin: "2px 0 0" }}>
                  {s.label}
                </p>
              </div>
              <Badge color={s.auto ? "emerald" : "gray"}>{s.auto ? "Auto-post" : "Manual"}</Badge>
            </div>
          ))}
        </Card>
      </section>
    </>
  );
}
