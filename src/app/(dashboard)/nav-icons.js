/** Inline stroke icons for sidebar (24×24 viewBox). */

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function NavIcon({ name }) {
  const s = stroke;
  switch (name) {
    case "home":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden {...s}>
          <path d="M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5z" />
        </svg>
      );
    case "fileText":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden {...s}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
          <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
        </svg>
      );
    case "calendar":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden {...s}>
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
        </svg>
      );
    case "share":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden {...s}>
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <path d="m8.59 13.51 6.83 3.98M15.41 6.51l-6.82 4.02" />
        </svg>
      );
    case "send":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden {...s}>
          <path d="m22 2-7 20-4-9-9-4 20-7z" />
          <path d="M22 2 11 13" />
        </svg>
      );
    case "message":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden {...s}>
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      );
    case "chart":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden {...s}>
          <path d="M18 20V10M12 20V4M6 20v-6" />
        </svg>
      );
    case "target":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden {...s}>
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      );
    case "bell":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden {...s}>
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      );
    case "users":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden {...s}>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "settings":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden {...s}>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      );
    case "zap":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden {...s}>
          <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      );
    case "image":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden {...s}>
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="m21 15-5-5L5 21" />
        </svg>
      );
    default:
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden {...s}>
          <circle cx="12" cy="12" r="4" />
        </svg>
      );
  }
}
