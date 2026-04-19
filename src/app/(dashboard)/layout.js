"use client";

import { logout } from "@/actions/auth";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NAV_GROUPS, NAV_ITEMS } from "./nav-config";
import { NavIcon } from "./nav-icons";

function pageMeta(pathname) {
  const normalized = pathname.endsWith("/") && pathname !== "/" ? pathname.slice(0, -1) : pathname;
  const item = NAV_ITEMS.find((n) => n.href === normalized);
  if (item) return { title: item.label, subtitle: item.subtitle };
  const fallback = NAV_ITEMS[0];
  return { title: fallback.label, subtitle: fallback.subtitle };
}

function isActiveLink(pathname, href) {
  if (href === "/") return pathname === "/" || pathname === "";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function DashboardLayout({ children }) {
  const pathname = usePathname() || "/";
  const { title, subtitle } = pageMeta(pathname);
  const [theme, setTheme] = useState("light");
  const navRef = useRef(null);
  const isHome = pathname === "/" || pathname === "";

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      const root = navRef.current;
      if (!root) return;
      const active = root.querySelector("a.db-nav-link.is-active");
      if (active && typeof active.scrollIntoView === "function") {
        active.scrollIntoView({ block: "nearest", inline: "nearest" });
      }
    });
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return (
    <div className="db-root">
      <div className="db-shell">
        <aside className="db-panel db-sidebar">
          <Link href="/" className="db-sidebar-brand">
            <span className="db-sidebar-brand__mark" aria-hidden>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 3 4 8v8l8 5 8-5V8l-8-5Z"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinejoin="round"
                />
                <path d="M12 12V3M12 12l8-4M12 12 4 8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              </svg>
            </span>
            <span className="db-sidebar-brand__text">Velora</span>
          </Link>
          <p className="db-sidebar-tagline">Marketing workspace</p>

          <nav ref={navRef} className="db-nav" aria-label="Main">
            {NAV_GROUPS.map((group) => (
              <div className="db-nav-group" key={group.title}>
                <p className="db-nav-group__title">{group.title}</p>
                <ul className="db-nav-group__list">
                  {group.items.map((item) => {
                    const active = isActiveLink(pathname, item.href);
                    return (
                      <li key={item.href}>
                        <Link href={item.href} className={`db-nav-link ${active ? "is-active" : ""}`}>
                          <span className="db-nav-link__icon">
                            <NavIcon name={item.icon} />
                          </span>
                          <span className="db-nav-link__label">{item.label}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>

          <div className="db-sidebar-foot">
            <button
              type="button"
              className="db-icon-btn"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
              title="Theme"
            >
              {theme === "light" ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                </svg>
              )}
            </button>
            <span className="db-sidebar-foot__hint">Appearance</span>
          </div>
        </aside>

        <main className="db-panel db-main">
          <header className="db-header">
            <div className="db-header__spacer" aria-hidden />
            <div className="db-header__search-wrap">
              <label className="db-header-search">
                <span className="db-header-search__icon" aria-hidden>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                  </svg>
                </span>
                <input type="search" className="db-header-search__input" placeholder="Search campaigns, posts, accounts…" />
              </label>
            </div>
            <div className="db-header__actions">
              <button type="button" className="db-icon-btn db-icon-btn--ghost" aria-label="Notifications">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
              </button>
              <button type="button" className="db-icon-btn db-icon-btn--ghost" aria-label="Messages">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <path d="m22 6-10 7L2 6" />
                </svg>
              </button>
              <div className="db-user-pill">
                <div className="db-user-pill__avatar" aria-hidden>
                  WA
                </div>
                <div className="db-user-pill__meta">
                  <span className="db-user-pill__role">Workspace Admin</span>
                </div>
              </div>
              <button type="button" className="db-logout" onClick={() => logout()} aria-label="Log out">
                Log out
              </button>
            </div>
          </header>

          <div className={`db-page${isHome ? " db-page--home" : ""}`}>
            {!isHome && (
              <div className="db-page-intro">
                <h1 className="db-page-intro__title">{title}</h1>
                <p className="db-page-intro__subtitle">{subtitle}</p>
              </div>
            )}
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
