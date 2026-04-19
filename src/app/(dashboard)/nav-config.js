/** Grouped navigation (sidebar). `NAV_ITEMS` is flat for route meta lookup. */

const items = {
  dashboard: {
    label: "Dashboard",
    href: "/",
    subtitle: "Overview of all activities — posts, engagement, and followers",
    icon: "home",
  },
  content: {
    label: "Content Management",
    href: "/content-management",
    subtitle: "Create new posts, drafts, and media uploads",
    icon: "fileText",
  },
  scheduler: {
    label: "Scheduler",
    href: "/scheduler",
    subtitle: "Calendar, scheduled posts, and auto-post",
    icon: "calendar",
  },
  social: {
    label: "Social Accounts",
    href: "/social-accounts",
    subtitle: "Connect Facebook, Instagram, LinkedIn, and X",
    icon: "share",
  },
  publisher: {
    label: "Post Publisher",
    href: "/post-publisher",
    subtitle: "Multi-platform publish and instant posting",
    icon: "send",
  },
  media: {
    label: "Media Library",
    href: "/media-library",
    subtitle: "Central store for images and videos used across posts and campaigns",
    icon: "image",
  },
  engagement: {
    label: "Engagement",
    href: "/engagement",
    subtitle: "Comments, messages, and replies",
    icon: "message",
  },
  analytics: {
    label: "Analytics & Reports",
    href: "/analytics-reports",
    subtitle: "Reach, impressions, and platform-wise analysis",
    icon: "chart",
  },
  campaigns: {
    label: "Campaign Management",
    href: "/campaign-management",
    subtitle: "Campaigns, performance, and ad integration",
    icon: "target",
  },
  notifications: {
    label: "Notifications",
    href: "/notifications",
    subtitle: "Alerts for activity, post status, and system events",
    icon: "bell",
  },
  users: {
    label: "User Management",
    href: "/user-management",
    subtitle: "Add or remove users and assign Admin or Editor roles for team collaboration",
    icon: "users",
  },
  settings: {
    label: "Settings",
    href: "/settings",
    subtitle: "Profile, API keys, integrations, theme, and workspace preferences",
    icon: "settings",
  },
  automation: {
    label: "Automation",
    href: "/automation",
    subtitle: "Auto-post rules, content suggestions, and Telegram or Discord bots",
    icon: "zap",
  },
};

export const NAV_GROUPS = [
  {
    title: "Main menu",
    items: [items.dashboard, items.content, items.scheduler],
  },
  {
    title: "Publishing",
    items: [items.social, items.publisher, items.media],
  },
  {
    title: "Growth",
    items: [items.engagement, items.analytics, items.campaigns, items.notifications],
  },
  {
    title: "Workspace",
    items: [items.users, items.settings, items.automation],
  },
];

export const NAV_ITEMS = NAV_GROUPS.flatMap((g) => g.items);
