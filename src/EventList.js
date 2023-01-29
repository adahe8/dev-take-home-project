import React from "react";

export default function EventList({ pastEvents }) {
  return (
    <div>
      {pastEvents.map((p) => (
        <div key={p}>{p}</div>
      ))}
    </div>
  );
}