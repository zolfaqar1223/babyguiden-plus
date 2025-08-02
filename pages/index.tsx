import { useState } from "react";
import BabyForm from "../components/BabyForm";
import WelcomeCard from "../components/WelcomeCard";

export default function Home() {
  const [babyName, setBabyName] = useState("");

  return (
    <div style={{ padding: "2rem" }}>
      <h1>BabyGuiden+ Webapp</h1>
      {babyName ? (
        <WelcomeCard name={babyName} />
      ) : (
        <BabyForm onSubmit={setBabyName} />
      )}
    </div>
  );
}
