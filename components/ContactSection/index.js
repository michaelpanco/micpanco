import Link from "next/link";
import { FiLinkedin, FiMail } from "react-icons/fi";

export default function ContactSection() {
  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-title">
      <div className="site-shell">
        <div className="contact-card">
          <div className="contact-content">
            <div className="availability-badge"><span aria-hidden="true" />Open to new opportunities</div>
            <h2 id="contact-title">Let’s build something <span>great</span></h2>
            <p>I’m currently exploring new opportunities as a Senior Frontend or Full-Stack Developer. With over 15 years of experience, I enjoy building thoughtful, scalable digital products and collaborating with teams that value quality and great user experiences.</p>
          </div>
          <div className="contact-links">
            <Link href="mailto:micpanco@gmail.com" className="button button-primary"><FiMail /> Get in touch</Link>
            <Link href="https://www.linkedin.com/in/michaelpanco/" target="_blank" rel="noopener noreferrer" className="button button-secondary"><FiLinkedin /> LinkedIn</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
