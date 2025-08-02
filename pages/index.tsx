import { useState, useEffect } from "react";
import BabyForm from "../components/BabyForm";
import WelcomeCard from "../components/WelcomeCard";

export default function Home() {
  const [babyName, setBabyName] = useState("");

  // Hent navnet fra localStorage når appen loader
  useEffect(() => {
    const storedName = localStorage.getItem("babyName");
    if (storedName) {
      setBabyName(storedName);
    }
  }, []);

  // Gem navnet i localStorage når det ændres
  const handleNameSubmit = (name: string) => {
    setBabyName(name);
    localStorage.setItem("babyName", name);
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>BabyGuiden+ Webapp 👶</h1>
      {babyName ? (
        <WelcomeCard name={babyName} />
      ) : (
        <BabyForm onSubmit={handleNameSubmit} />
      )}
    </div>
  );
}
