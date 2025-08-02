export default function WelcomeCard({ name }: { name: string }) {
  return (
    <div style={{ padding: "1rem", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2>Hej {name} 👶</h2>
      <p>Velkommen til BabyGuiden+</p>
    </div>
  );
}
