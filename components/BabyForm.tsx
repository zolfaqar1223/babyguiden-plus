import { useState } from "react";

type Props = {
  onSubmit: (name: string, dob: string) => void;
};

export default function BabyForm({ onSubmit }: Props) {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(name, dob);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
      <label>
        Navn:{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Fødselsdato:{" "}
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit" style={{ marginTop: "1rem" }}>
        Gem
      </button>
    </form>
  );
}
