export default function WelcomeCard({
  name,
  dob,
}: {
  name: string;
  dob?: string;
}) {
  return (
    <div style={{ padding: "1rem", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2>Hej {name} 👶</h2>
      {dob && <p>Født: {dob}</p>}
      <p>Velkommen til BabyGuiden+</p>
    </div>
  );
}
