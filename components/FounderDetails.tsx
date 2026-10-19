import React from "react";

type Link = { label: string; url: string };

type Props = {
  name: string;
  title?: string;
  bio?: string;
  avatarUrl?: string;
  links?: Link[];
  className?: string;
};

export default function FounderDetails({ name, title, bio, avatarUrl, links = [], className }: Props) {
  return (
    <section className={className ?? "founder-details"} style={{ marginTop: 20 }}>
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        {avatarUrl && (
          <img
            src={avatarUrl}
            alt={`${name} avatar`}
            style={{ width: 80, height: 80, borderRadius: 12, objectFit: "cover" }}
          />
        )}
        <div>
          <h3 style={{ margin: 0 }}>{name}</h3>
          {title && <p style={{ margin: 0, color: "#666" }}>{title}</p>}
        </div>
      </div>

      {bio && <p style={{ marginTop: 12 }}>{bio}</p>}

      {links.length > 0 && (
        <p style={{ marginTop: 8 }}>
          {links.map((l) => (
            <a key={l.url} href={l.url} target="_blank" rel="noreferrer" style={{ marginRight: 12 }}>
              {l.label}
            </a>
          ))}
        </p>
      )}
    </section>
  );
}
