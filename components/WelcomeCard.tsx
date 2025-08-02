type Props = {
  name: string;
  dob: string;
  weeksOld: number | null;
};

export default function WelcomeCard({ name, dob, weeksOld }: Props) {
  const renderContent = () => {
    if (weeksOld === null) return <p>Indtast din babys fødselsdato for at se vejledning</p>;

    if (weeksOld < 4) {
      return <p>🍼 Dit barn er nyfødt – husk masser af hudkontakt og ro.</p>;
    } else if (weeksOld < 12) {
      return <p>😊 Din baby er i gang med at lære at smile og holde hovedet – støt op!</p>;
    } else if (weeksOld < 24) {
      return <p>🧸 Babyen elsker motoriske lege – tid til mavetid og trillelege!</p>;
    } else {
      return <p>🌟 Din baby udvikler sig hurtigt – husk at stimulere med leg og kontakt.</p>;
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
      {weeksOld !== null && <p>Din alder: {weeksOld} uge{weeksOld !== 1 ? "r" : ""}</p>}
      {renderContent()}
    </div>
  );
}
