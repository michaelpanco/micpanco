import {
  PiBasketball,
  PiPlant,
  PiTelevisionSimple,
  PiUsersThree,
} from "react-icons/pi";

const interests = [
  {
    title: "Japanese anime",
    description:
      "I enjoy isekai and slow-growth stories. Mushoku Tensei is one of my favorites.",
    Icon: PiTelevisionSimple,
  },
  {
    title: "Basketball",
    description:
      "A lifelong Boston Celtics fan. I enjoy watching and playing whenever I can.",
    Icon: PiBasketball,
  },
  {
    title: "Gardening",
    description:
      "I enjoy growing Bougainvillea, Plumeria, and Star gooseberry. It’s a relaxing way to unwind.",
    Icon: PiPlant,
  },
  {
    title: "Family time",
    description:
      "Spending quality time with my family keeps me grounded and motivated.",
    Icon: PiUsersThree,
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="section about-section"
      aria-labelledby="about-title"
    >
      <div className="site-shell about-grid">
        <div className="about-intro">
          <div className="eyebrow">About me</div>
          <h2 id="about-title" className="section-title">
            Beyond <span>code</span>
          </h2>
          <p>
            I’m a developer who enjoys turning ideas into real products. I
            started in design, which taught me the importance of good visuals
            and thoughtful user experiences. That foundation still influences
            how I build websites and applications today.
          </p>
          <p>
            Outside of work, I enjoy Japanese anime, basketball, gardening, and
            spending quality time with my family. These hobbies keep me
            inspired, balanced, and curious.
          </p>
        </div>
        <div className="interest-grid" aria-label="Personal interests">
          {interests.map(({ title, description, Icon }) => (
            <article className="interest-card" key={title}>
              <div className="interest-card-header">
                <div className="interest-icon" aria-hidden="true">
                  <Icon size={22} />
                </div>
                <h3>{title}</h3>
              </div>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
