type Props = {
  name: string;
  dob: string;
  weeksOld: number | null;
};

export default function WelcomeCard({ name, dob, weeksOld }: Props) {
  const renderContent = () => {
    if (weeksOld === null) return null;

    if (weeksOld < 4) {
      return <p>👶 Dit barn er nyfødt – husk masser af hudkontakt.</p>;
    } else if (weeksOld < 12) {
      return <p>😊 Din baby er i gang med at lære at smile og holde hovedet selv.</p>;
    } else {
      return <p>🎉 Din baby er nu over 3 måneder – tid til motoriske lege!</p>;
    }
  };

  return (
    <div
      style={{
        padding: "1rem",
        border: "1px solid #ccc",
        borderRadius: "8px",
        marginTop: "1rem",
      }}
    >
      <h2>Hej {name} 👶</h2>
      <p>Velkommen til BabyGuiden+</p>
      {weeksOld !== null && <p>Din alder: {weeksOld} uger</p>}
      {renderContent()}
    </div>
  );
}
