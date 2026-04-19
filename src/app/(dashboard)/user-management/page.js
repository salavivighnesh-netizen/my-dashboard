"use client";

import { Badge, Button, Card, TextInput } from "@tremor/react";

const users = [
  { name: "Alex Morgan", email: "alex@company.com", role: "Admin" },
  { name: "Jordan Lee", email: "jordan@company.com", role: "Editor" },
  { name: "Sam Rivera", email: "sam@company.com", role: "Editor" },
];

export default function UserManagementPage() {
  return (
    <>
      <section className="db-section" aria-labelledby="um-intro">
        <h2 id="um-intro" className="db-section__label">
          Team &amp; roles
        </h2>
        <Card className="db-card">
          <h3 style={{ margin: "0 0 4px", fontSize: 20, fontWeight: 700 }}>User Management</h3>
          <p className="db-muted" style={{ margin: 0 }}>
            Add or remove teammates and assign roles. <strong>Admin</strong> can manage billing and users;{" "}
            <strong>Editor</strong> can create and publish content.
          </p>
        </Card>
      </section>

      <section className="db-section" aria-labelledby="um-invite">
        <h2 id="um-invite" className="db-section__label">
          Invite
        </h2>
        <Card className="db-card">
          <h3 style={{ margin: "0 0 12px", fontSize: 18, fontWeight: 700 }}>Invite user</h3>
          <div style={{ display: "grid", gap: 10, maxWidth: 480 }}>
            <TextInput placeholder="Email address" />
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
              <span className="db-muted" style={{ fontSize: 13 }}>
                Role
              </span>
              <Button size="xs" variant="secondary">
                Admin
              </Button>
              <Button size="xs" variant="primary">
                Editor
              </Button>
            </div>
            <Button size="xs" variant="primary">
              Send invite
            </Button>
          </div>
        </Card>
      </section>

      <section className="db-section" aria-labelledby="um-members">
        <h2 id="um-members" className="db-section__label">
          Members
        </h2>
        <Card className="db-card">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 8 }}>
            <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>Team members</h3>
            <Button size="xs" variant="secondary">
              Export list
            </Button>
          </div>
          {users.map((u) => (
            <div className="db-row" key={u.email}>
              <div>
                <strong>{u.name}</strong>
                <p className="db-muted" style={{ margin: "2px 0 0" }}>
                  {u.email}
                </p>
              </div>
              <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                <Badge color={u.role === "Admin" ? "violet" : "blue"}>{u.role}</Badge>
                <Button size="xs" variant="secondary">
                  Change role
                </Button>
                <Button size="xs" variant="secondary">
                  Remove
                </Button>
              </div>
            </div>
          ))}
        </Card>
      </section>
    </>
  );
}
