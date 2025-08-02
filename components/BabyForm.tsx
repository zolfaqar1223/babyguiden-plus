// components/BabyForm.tsx
import { useState } from "react";

export default function BabyForm({ onSubmit }: { onSubmit: (babyName: string) => void }) {
  const [name, setName] = useState("");

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      if (name) onSubmit(name);
    }}>
      <label>
        Babyens navn:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginLeft: "1rem" }}
        />
      </label>
      <button type="submit" style={{ marginLeft: "1rem" }}>Gem</button>
    </form>
  );
}
