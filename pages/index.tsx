import { useState, useEffect } from "react";
import BabyForm from "../components/BabyForm";
import WelcomeCard from "../components/WelcomeCard";

export default function Home() {
  const [babyName, setBabyName] = useState("");

  // Hent navnet fra localStorage når appen loader
useEffect(() => {
  const storedName = localStorage.getItem("babyName");
  const storedDob = localStorage.getItem("babyDob");
  if (storedName) setBabyName(storedName);
  if (storedDob) setBabyDob(storedDob);
}, []);

  // Gem navnet i localStorage når det ændres
const [babyDob, setBabyDob] = useState("");

const handleNameSubmit = (name: string, dob: string) => {
  setBabyName(name);
  setBabyDob(dob);
  localStorage.setItem("babyName", name);
  localStorage.setItem("babyDob", dob);
};

function calculateWeeksOld(dob: string): number {
  const birthDate = new Date(dob);
  const now = new Date();
  const diffInMs = now.getTime() - birthDate.getTime();
  const weeks = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 7));
  return weeks;
}

const weeksOld = babyDob ? calculateWeeksOld(babyDob) : null;

return (
  <div style={{ padding: "2rem", fontFamily: "Arial" }}>
    <h1>BabyGuiden+ Webapp 👶</h1>
    {babyName ? (
      <WelcomeCard name={babyName} dob={babyDob} weeksOld={weeksOld} />
    ) : (
      <BabyForm onSubmit={handleNameSubmit} />
    )}
  </div>
);

