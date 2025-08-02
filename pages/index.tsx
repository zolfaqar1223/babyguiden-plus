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


  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>BabyGuiden+ Webapp 👶</h1>
      {babyName ? (
<WelcomeCard name={babyName} dob={babyDob} />
      ) : (
        <BabyForm onSubmit={handleNameSubmit} />
      )}
    </div>
  );
}
