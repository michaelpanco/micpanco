import Image from "next/image";
import Link from "next/link";
import { FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-shell footer-inner">
        <div>
          <Link href="/" className="brand"><Image src="/assets/img/logo.png" width={45} height={25} alt="" /><div>michael<span>panco</span></div></Link>
          <div className="footer-copy">Senior Frontend / Full-Stack Developer<br />© {new Date().getFullYear()} Michael Panco.</div>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          <Link href="/#about">About</Link><Link href="/projects">Projects</Link><Link href="/#experience">Experience</Link><Link href="/#skills">Skills</Link>
        </nav>
        <div className="footer-social">
          <Link href="https://www.linkedin.com/in/michaelpanco/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FiLinkedin size={19} /></Link>
          <Link href="mailto:micpanco@gmail.com" aria-label="Email Michael"><FiMail size={19} /></Link>
        </div>
      </div>
    </footer>
  );
}
