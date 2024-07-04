"use client";

import { useRef, useState } from "react";

import About from "@micpanco/components/Partials/About";
import Experiences from "@micpanco/components/Partials/Experiences";
import Skills from "@micpanco/components/Partials/Skills";
import Projects from "@micpanco/components/Partials/Projects";
import InfoNavigation from "@micpanco/components/Partials/InfoNavigation";
import { InView } from "react-intersection-observer";

export default function Home() {
  const [currentPageSection, setCurrentPageSection] = useState("");

  const switchPageSection = (section, inView) => {
    if (inView) {
      setCurrentPageSection(section);
    }
  };

  const menuChange = (menu) => {
    setCurrentPageSection(menu);
  };
  const th = 0.17;
  return (
    <>
      <div className="bg-[#65BCCE] h-[50px] sticky top-0 hidden lg:block">
        &nbsp;
      </div>
      <main className="mx-auto max-w-3xl lg:max-w-screen-lg px-4 sm:px-6 xl:max-w-screen-xl  ">
        <div className="lg:flex lg:gap-x-10">
          <div className="lg:flex-1">
            <div className="sticky pt-10 lg:pt-2 top-20">
              <InfoNavigation
                currentNavigation={currentPageSection}
                onmenuchange={(menu) => menuChange(menu)}
              />
            </div>
          </div>
          <div className="lg:flex-1 ">
            <div id={"about"} className="pt-10">
              <InView
                as="div"
                threshold={th}
                onChange={(inView, entry) =>
                  switchPageSection("about", inView, entry)
                }
              >
                <About />
                <hr className="mt-8" />
              </InView>
            </div>
            <div id={"experiences"} className="pt-7">
              <InView
                as="div"
                threshold={th}
                onChange={(inView, entry) =>
                  switchPageSection("experiences", inView, entry)
                }
              >
                <Experiences />
                <hr className="mt-8" />
              </InView>
            </div>
            <div id={"skills"} className="pt-7">
              <InView
                as="div"
                threshold={th}
                onChange={(inView, entry) =>
                  switchPageSection("skills", inView, entry)
                }
              >
                <Skills />
                <hr className="mt-8" />
              </InView>
            </div>
            <div id={"projects"} className="pt-7">
              <InView
                as="div"
                threshold={th}
                onChange={(inView, entry) =>
                  switchPageSection("projects", inView, entry)
                }
              >
                <Projects />
              </InView>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
