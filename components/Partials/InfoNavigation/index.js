import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

import { AiTwotoneMail } from "react-icons/ai";
import { PiLinkedinLogoDuotone, PiFacebookLogoDuotone } from "react-icons/pi";

export default function InfoNavigation({ currentNavigation, onmenuchange }) {
  return (
    <div className="flex flex-col">
      <div className="lg:flex gap-x-5 mb-5 lg:mb-10">
        <div className="w-full h-[150px] lg:h-auto lg:w-3/12 relative mb-3 lg:mb-0">
          <Image
            src="/assets/img/avatar.png"
            layout={"fill"}
            objectFit={"contain"}
            alt="Michael Panco"
          />
        </div>
        <div className="lg:w-9/12">
          <div className="font-bold text-3xl text-black lg:mb-2 text-center lg:text-left">
            Michael <span className="text-lime">Panco</span>
          </div>
          <div className="font-semibold text-black mb-5 lg:mb-2 text-center lg:text-left">
            Frontend Developer
          </div>
          <div>
            <p className="mb-1">
              I{"’"}m a web developer with 14 years of experience specializing
              in Frontend development, I am currently based in the Philippines.
            </p>
            <p>
              I{"’"}m passionate about web design, coding, and exploring the
              advancement of web technologies.
            </p>
          </div>
        </div>
      </div>

      <div className="hidden lg:block text-teal text-base mb-10 flex-1">
        <ul className="space-y-5">
          <li className="relative">
            <Link
              href="#about"
              className={twMerge(
                "block hover:font-semibold hover:px-5 hover:bg-[#f5f5f5] hover:rounded-lg duration-300 inline  py-2",
                currentNavigation === "about" &&
                  "font-semibold  bg-[#f5f5f5] px-5 rounded-lg"
              )}
              onClick={() => onmenuchange("about")}
            >
              About
            </Link>
          </li>
          <li className="relative">
            <Link
              href="#experiences"
              className={twMerge(
                "block hover:font-semibold hover:px-5 hover:bg-[#f5f5f5] hover:rounded-lg duration-300 inline  py-2",
                currentNavigation === "experiences" &&
                  "font-semibold bg-[#f5f5f5] px-5 rounded-lg"
              )}
              onClick={() => onmenuchange("experiences")}
            >
              Experiences
            </Link>
          </li>
          <li>
            <Link
              href="#skills"
              className={twMerge(
                "block hover:font-semibold hover:px-5 hover:bg-[#f5f5f5] hover:rounded-lg duration-300 inline  py-2",
                currentNavigation === "skills" &&
                  "font-semibold bg-[#f5f5f5] px-5 rounded-lg"
              )}
              onClick={() => onmenuchange("skills")}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className={twMerge(
                "block hover:font-semibold hover:px-5 hover:bg-[#f5f5f5] hover:rounded-lg duration-300 inline  py-2",
                currentNavigation === "projects" &&
                  "font-semibold bg-[#f5f5f5] px-5 rounded-lg"
              )}
              onClick={() => onmenuchange("projects")}
            >
              Projects
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-center lg:justify-start gap-x-4 mb-5 lg:mb-0">
        <div className="text-black hidden lg:block">Get in touch</div>
        <div className="flex items-center gap-x-2">
          <Link
            href="https://facebook.com/michaelpanco"
            rel="nofollow"
            target="_blank"
            className="text-lime hover:text-black"
          >
            <PiFacebookLogoDuotone className="w-10 h-10 " />
          </Link>

          <Link
            href="https://www.linkedin.com/in/michaelpanco/"
            rel="nofollow"
            target="_blank"
            className="text-lime hover:text-black"
          >
            <PiLinkedinLogoDuotone className="w-10 h-10 mr-1" />
          </Link>

          <Link
            href="mailto:micpanco@gmail.com"
            rel="nofollow"
            target="_blank"
            className="text-lime hover:text-black"
          >
            <AiTwotoneMail className="w-10 h-10" />
          </Link>
        </div>
      </div>

      <div className="block lg:hidden">
        <button
          class="align-middle select-none font-sans font-bold text-center w-full lg:w-auto  transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none  py-5 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          type="button"
        >
          Download my CV
        </button>
      </div>
    </div>
  );
}
