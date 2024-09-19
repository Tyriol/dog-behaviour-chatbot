import dogTrainingSections from "../Data";
import Card from "../cards/Card";
console.log(dogTrainingSections[0].title);

export default function Main() {
  return (
    <main className="main">
      <div className="intro-container">
        <h2>The Importance of Training Your Dog</h2>
        <p>
          Training your dog is a rewarding part of pet ownership that enhances
          your bond and improves behavior. It teaches boundaries, prevents
          destructive habits like chewing or barking, and helps your dog
          understand how to behave at home and around guests. In social
          settings, training builds confidence, reducing anxiety and aggression,
          making outings more enjoyable. Beyond obedience, training strengthens
          trust and deepens your connection with your dog. A well-trained dog is
          happier, more confident, and a joy to be around, enriching both their
          life and yours with a harmonious, stress-free relationship.
        </p>
      </div>

      <section className="card-container">
        {dogTrainingSections.map((section) => (
          <Card
            title={section.title}
            text={section.text}
            src={section.src}
            key={section.title}
          />
        ))}
      </section>
    </main>
  );
}
