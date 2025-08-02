type Props = {
  name: string;
  dob: string;
  weeksOld: number | null;
};

export default function WelcomeCard({ name, dob, weeksOld }: Props) {
  const renderContent = () => {
    if (weeksOld === null) return null;

    if (weeksOld < 4) {
      return <p>🍼 Dit barn er nyfødt – husk masser af hudkontakt og ro.</p>;
    } else if (weeksOld < 12) {
      return <p>😊 Din baby er begyndt at smile og løfte hovedet – nyd samværet.</p>;
    } else if (weeksOld < 24) {
      return <p>🧠 Nu begynder din baby at udforske! Giv plads til leg og bevægelse.</p>;
    } else {
      return <p>🎉 Din baby vokser hurtigt – måske er det tid til grød og tumlelege?</p>;
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
