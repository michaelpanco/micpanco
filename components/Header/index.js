"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";

const links = [
  ["About", "/#about"],
  ["Projects", "/projects"],
  ["Experience", "/#experience"],
  ["Skills", "/#skills"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="site-shell header-inner">
        <Link href="/" className="brand" aria-label="Michael Panco home">
          <Image
            src="/assets/img/logo.png"
            width={45}
            height={25}
            alt=""
            priority
          />
          <div>
            michael<span>panco</span>
          </div>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <Link href={href} key={href}>
              {label}
            </Link>
          ))}
        </nav>
        <Link
          className="button button-primary"
          href="/assets/files/resume_v3.2.3.pdf"
          target="_blank"
        >
          <FiDownload aria-hidden="true" /> Download my CV
        </Link>
        <button
          className="menu-button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>
      <nav
        className={`mobile-nav ${open ? "open" : ""}`}
        aria-label="Mobile navigation"
      >
        {links.map(([label, href]) => (
          <Link href={href} key={href} onClick={() => setOpen(false)}>
            {label}
          </Link>
        ))}
        <Link
          className="button button-primary"
          href="/assets/files/resume_v3.2.3.pdf"
          target="_blank"
        >
          Download my CV
        </Link>
      </nav>
    </header>
  );
}
