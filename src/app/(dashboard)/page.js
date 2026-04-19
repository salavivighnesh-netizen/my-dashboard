"use client";

import Link from "next/link";
import { Card } from "@tremor/react";

const dots = [3, 5, 2, 6, 8, 10, 2, 7, 5, 3, 8, 6];

const activity = [
  {
    swatch: "blue",
    text: "Workspace Admin scheduled “Q2 launch carousel” for Instagram · TY campaign",
    time: "Apr 18, 2026",
  },
  {
    swatch: "purple",
    text: "Editor Jordan saved draft “Customer story — Acme Co.” for review",
    time: "Apr 18, 2026",
  },
  {
    swatch: "green",
    text: "Published post reached 12.4K impressions in the first 6 hours on LinkedIn",
    time: "Apr 17, 2026",
  },
  {
    swatch: "blue",
    text: "Automation rule “Weekday morning queue” queued 3 posts for tomorrow 09:00",
    time: "Apr 17, 2026",
  },
  {
    swatch: "purple",
    text: "New comment thread on Instagram · 4 unread mentions assigned to Engagement",
    time: "Apr 16, 2026",
  },
];

function IconUsers() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function IconPresentation() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M2 3h20v14H2zM12 17v4M8 21h8" />
      <path d="m7 8 3 3 3-3M7 12h6" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="M22 4 12 14.01l-3-3" />
    </svg>
  );
}

function IconHourglass() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M5 22h14M5 2h14M17 22v-4.5a2 2 0 0 0-2-2 2 2 0 0 0 2-2V2M7 2v4.5a2 2 0 0 0 2 2 2 2 0 0 0-2 2V22" />
    </svg>
  );
}

export default function DashboardHome() {
  return (
    <>
      <div className="db-stat-tiles">
        <article className="db-stat-tile">
          <div className="db-stat-tile__body">
            <span className="db-stat-tile__value">1,248</span>
            <span className="db-stat-tile__label">Total posts</span>
            <span className="db-stat-tile__pill db-stat-tile__pill--up">↑ +4.2% vs last month</span>
          </div>
          <div className="db-stat-tile__icon db-stat-tile__icon--blue" aria-hidden>
            <IconUsers />
          </div>
        </article>
        <article className="db-stat-tile">
          <div className="db-stat-tile__body">
            <span className="db-stat-tile__value">6.8%</span>
            <span className="db-stat-tile__label">Engagement rate</span>
            <span className="db-stat-tile__pill db-stat-tile__pill--down">↓ Flat vs prior week</span>
          </div>
          <div className="db-stat-tile__icon db-stat-tile__icon--purple" aria-hidden>
            <IconPresentation />
          </div>
        </article>
        <article className="db-stat-tile">
          <div className="db-stat-tile__body">
            <span className="db-stat-tile__value">482K</span>
            <span className="db-stat-tile__label">Followers</span>
            <span className="db-stat-tile__pill db-stat-tile__pill--up">↑ +12.1K new</span>
          </div>
          <div className="db-stat-tile__icon db-stat-tile__icon--green" aria-hidden>
            <IconCheck />
          </div>
        </article>
        <article className="db-stat-tile">
          <div className="db-stat-tile__body">
            <span className="db-stat-tile__value">34</span>
            <span className="db-stat-tile__label">Scheduled</span>
            <span className="db-stat-tile__pill db-stat-tile__pill--down">↓ No new this week</span>
          </div>
          <div className="db-stat-tile__icon db-stat-tile__icon--amber" aria-hidden>
            <IconHourglass />
          </div>
        </article>
      </div>

      <section className="db-activity-panel" aria-labelledby="activity-heading">
        <div className="db-activity-panel__head">
          <h2 id="activity-heading" className="db-activity-panel__title">
            Recent Activity
          </h2>
          <Link href="/notifications" className="db-activity-panel__link">
            View all
          </Link>
        </div>
        <ul className="db-activity-list">
          {activity.map((row, i) => (
            <li key={i} className="db-activity-item">
              <span className={`db-activity-item__swatch db-activity-item__swatch--${row.swatch}`} aria-hidden />
              <div>
                <p className="db-activity-item__text">{row.text}</p>
                <p className="db-activity-item__time">{row.time}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="db-section" aria-labelledby="dash-analytics">
        <h2 id="dash-analytics" className="db-section__label">
          Analytics snapshot
        </h2>
        <div className="db-grid-main">
          <Card className="db-card">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>Performance summary</h3>
              <span className="db-muted">Last 12 months</span>
            </div>
            <div className="db-dot-chart">
              {dots.map((n, i) => (
                <div className="db-col" key={i}>
                  {Array.from({ length: n }).map((_, idx) => (
                    <span className="db-dot" key={idx} />
                  ))}
                </div>
              ))}
            </div>
          </Card>

          <Card className="db-card">
            <h3 style={{ margin: "0 0 8px", fontSize: 18, fontWeight: 700 }}>Platform mix</h3>
            <p className="db-muted" style={{ margin: "0 0 8px" }}>
              Share of scheduled content
            </p>
            <div className="db-row">
              <strong>Instagram</strong>
              <span className="db-muted">38%</span>
            </div>
            <div className="db-row">
              <strong>Facebook</strong>
              <span className="db-muted">24%</span>
            </div>
            <div className="db-row">
              <strong>LinkedIn</strong>
              <span className="db-muted">22%</span>
            </div>
            <div className="db-row">
              <strong>X</strong>
              <span className="db-muted">16%</span>
            </div>
          </Card>
        </div>
      </section>

      <section className="db-section" aria-labelledby="dash-regions">
        <h2 id="dash-regions" className="db-section__label">
          Audience
        </h2>
        <div className="db-grid-2">
          <Card className="db-card">
            <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>Top regions</h3>
            <p className="db-muted">By reach this month</p>
            <div className="db-row">
              <strong>United States</strong>
              <span>124K</span>
            </div>
            <div className="db-row">
              <strong>United Kingdom</strong>
              <span>41K</span>
            </div>
            <div className="db-row">
              <strong>India</strong>
              <span>36K</span>
            </div>
          </Card>
          <Card className="db-card db-stat-primary">
            <p className="db-label">Next sync</p>
            <p className="db-value" style={{ fontSize: 22 }}>
              All channels
            </p>
            <p className="db-trend-up" style={{ margin: "8px 0 0" }}>
              Social accounts healthy · open Scheduler to plan
            </p>
          </Card>
        </div>
      </section>
    </>
  );
}
