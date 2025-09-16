"use client";

import { useState } from "react";

export default function Home() {
  const [votes, setVotes] = useState(0);

  return (
    <main style={{ display: "flex", flexDirection: "column", height: "100vh", justifyContent: "center", alignItems: "center" }}>
      <h1 style={{ fontSize: "3rem", color: "blue" }}>
        🗳️ Caleb for President 2044 🗳️
      </h1>

      <p style={{ fontSize: "1.5rem", margin: "20px 0" }}>
        Current Votes: {votes}
      </p>

      <button
        onClick={() => setVotes(votes + 1)}
        style={{
          padding: "10px 20px",
          fontSize: "1.2rem",
          backgroundColor: "green",
          color: "white",
          borderRadius: "8px",
          cursor: "pointer"
        }}
      >
        Vote
      </button>
    </main>
  );
}
