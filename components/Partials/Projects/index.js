import Image from "next/image";
import Link from "next/link";
import Badge from "@micpanco/components/Common/Badge";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Projects() {
  const [openedProject, setOpenedProject] = useState("");

  const projects = [
    {
      id: "ta-earn-dashboard",
      icon: "/assets/img/projects/portfolios/ta-earn/icon.png",
      name: "Trainalta Earnportal - User Dashboard",
      type: "Web Dashboard",
      description:
        "A user portal designed for Alta coaches to efficiently manage their classes, schedules, programs, and service pricing, streamlining administrative tasks and enhancing overall workflow.",
      techstack: ["ReactJS", "NextJS", "Material UI"],
      screenshots: [
        {
          src: "/assets/img/projects/portfolios/ta-earn/earn_dashboard_homepage.png",
        },
        {
          src: "/assets/img/projects/portfolios/ta-earn/earn_dashboard_classesdetails.png",
        },
        {
          src: "/assets/img/projects/portfolios/ta-earn/earn_dashboard_classes.png",
        },
        {
          src: "/assets/img/projects/portfolios/ta-earn/earn_dashboard_calendar.png",
        },
        {
          src: "/assets/img/projects/portfolios/ta-earn/earn_classes_edit.png",
        },
        {
          src: "/assets/img/projects/portfolios/ta-earn/earn_dashboard_participants.png",
        },
        {
          src: "/assets/img/projects/portfolios/ta-earn/earn_dashboard_rates.png",
        },
        {
          src: "/assets/img/projects/portfolios/ta-earn/earn_dashboard_settings.png",
        },
      ],
    },
    {
      id: "ta-earn-site",
      icon: "/assets/img/projects/portfolios/ta-earn-site/icon.png",
      name: "Trainalta Earnportal - Site",
      type: "Website",
      description:
        "A website designed to showcase the EarnPortal dashboard, enabling users to register, log in, and purchase programs with ease, providing a seamless and engaging experience.",
      techstack: ["ReactJS", "NextJS", "ShadCN UI"],
      screenshots: [
        {
          src: "/assets/img/projects/portfolios/ta-earn-site/1.png",
        },
        {
          src: "/assets/img/projects/portfolios/ta-earn-site/2.png",
        },
        {
          src: "/assets/img/projects/portfolios/ta-earn-site/3.png",
        },
        {
          src: "/assets/img/projects/portfolios/ta-earn-site/4.png",
        },
        {
          src: "/assets/img/projects/portfolios/ta-earn-site/5.png",
        },
        {
          src: "/assets/img/projects/portfolios/ta-earn-site/6.png",
        },
        {
          src: "/assets/img/projects/portfolios/ta-earn-site/7.png",
        },
        {
          src: "/assets/img/projects/portfolios/ta-earn-site/8.png",
        },
        {
          src: "/assets/img/projects/portfolios/ta-earn-site/9.png",
        },
        {
          src: "/assets/img/projects/portfolios/ta-earn-site/10.png",
        },
        {
          src: "/assets/img/projects/portfolios/ta-earn-site/11.png",
        },
        {
          src: "/assets/img/projects/portfolios/ta-earn-site/12.png",
        },
        {
          src: "/assets/img/projects/portfolios/ta-earn-site/13.png",
        },
      ],
    },
    {
      id: "ns-site",
      icon: "/assets/img/projects/portfolios/ns-site/icon.png",
      name: "Nextshark Site",
      type: "Website",
      description:
        "The premier platform for Asian American news, covering a wide range of topics including culture, social issues, entertainment, politics, and more.",
      techstack: ["ReactJS", "NextJS", "Tailwind CSS"],
      screenshots: [
        {
          src: "/assets/img/projects/portfolios/ns-site/1.png",
        },
        {
          src: "/assets/img/projects/portfolios/ns-site/2.png",
        },
        {
          src: "/assets/img/projects/portfolios/ns-site/3.png",
        },
        {
          src: "/assets/img/projects/portfolios/ns-site/4.png",
        },
        {
          src: "/assets/img/projects/portfolios/ns-site/5.png",
        },
      ],
    },
    {
      id: "ns-app",
      icon: "/assets/img/projects/portfolios/ns-app/icon.jpg",
      name: "Nextshark App",
      type: "Mobile Application",
      description:
        "NextShark news is now easily accessible at your fingertips, available on both iOS and Android mobile platforms.",
      techstack: ["ReactNative", "Expo"],
      screenshots: [
        {
          src: "/assets/img/projects/portfolios/ns-app/0.JPG",
        },
        {
          src: "/assets/img/projects/portfolios/ns-app/1.JPG",
        },
        {
          src: "/assets/img/projects/portfolios/ns-app/2.JPG",
        },
        {
          src: "/assets/img/projects/portfolios/ns-app/3.JPG",
        },
        {
          src: "/assets/img/projects/portfolios/ns-app/4.JPG",
        },
        {
          src: "/assets/img/projects/portfolios/ns-app/5.JPG",
        },
        {
          src: "/assets/img/projects/portfolios/ns-app/6.JPG",
        },
        {
          src: "/assets/img/projects/portfolios/ns-app/7.JPG",
        },
      ],
    },
    {
      id: "ta-site-account",
      icon: "/assets/img/projects/portfolios/ta-about/icon.png",
      name: "Trainalta - Account Section",
      type: "Web Dashboard",
      description:
        "This feature enables Trainalta users to efficiently manage their account profile, update payment details, and oversee their subscription preferences.",
      techstack: ["ReactJS", "NextJS", "Material UI"],
      screenshots: [
        {
          src: "/assets/img/projects/portfolios/ta-about/1.png",
        },
        {
          src: "/assets/img/projects/portfolios/ta-about/2.png",
        },
        {
          src: "/assets/img/projects/portfolios/ta-about/3.png",
        },
        {
          src: "/assets/img/projects/portfolios/ta-about/4.png",
        },
      ],
    },
    {
      id: "frugll",
      icon: "/assets/img/projects/portfolios/frugll/icon.jpg",
      name: "Frugll - Estimation Wizard",
      type: "Wizard Form",
      description:
        "This wizard guides users through entering their address, then provides a personalized solar installation quotation based on the property's location.",
      techstack: ["ReactJS", "NextJS", "Tailwind CSS"],
      screenshots: [
        {
          src: "/assets/img/projects/portfolios/frugll/1.png",
        },
        {
          src: "/assets/img/projects/portfolios/frugll/2.png",
        },
        {
          src: "/assets/img/projects/portfolios/frugll/3.png",
        },
        {
          src: "/assets/img/projects/portfolios/frugll/4.png",
        },
      ],
    },
    {
      id: "gd",
      icon: "/assets/img/projects/portfolios/gd/icon.jpg",
      name: "Gamedev - Courses Dashboard",
      type: "Web Dashboard",
      description:
        "This dashboard integrates with an API to aggregate data, providing a comprehensive summary of reports on game courses.",
      techstack: ["ReactJS", "NextJS", "Tailwind CSS", "NestJS"],
      screenshots: [
        {
          src: "/assets/img/projects/portfolios/gd/1.png",
        },
        {
          src: "/assets/img/projects/portfolios/gd/2.png",
        },
        {
          src: "/assets/img/projects/portfolios/gd/3.png",
        },
      ],
    },
    {
      id: "ss",
      icon: "/assets/img/projects/portfolios/ss/icon.png",
      name: "Sellsmart - Dashboard",
      type: "Web Dashboard",
      description:
        "SellSmart is a premier service platform for real estate agents and their clients. This dashboard empowers users to efficiently manage all their services and view quote requests from consumer users.",
      techstack: ["ReactJS", "NextJS", "Material UI"],
      screenshots: [
        {
          src: "/assets/img/projects/portfolios/ss/1.png",
        },
        {
          src: "/assets/img/projects/portfolios/ss/2.png",
        },
        {
          src: "/assets/img/projects/portfolios/ss/3.png",
        },
        {
          src: "/assets/img/projects/portfolios/ss/4.png",
        },
        {
          src: "/assets/img/projects/portfolios/ss/5.png",
        },
        {
          src: "/assets/img/projects/portfolios/ss/6.png",
        },
        {
          src: "/assets/img/projects/portfolios/ss/7.png",
        },
        {
          src: "/assets/img/projects/portfolios/ss/8.png",
        },
        {
          src: "/assets/img/projects/portfolios/ss/9.png",
        },
        {
          src: "/assets/img/projects/portfolios/ss/10.png",
        },
        {
          src: "/assets/img/projects/portfolios/ss/11.png",
        },
      ],
    },
    {
      id: "skrumpt",
      icon: "/assets/img/projects/portfolios/skrumpt/icon.png",
      name: "Skrumpt CRM",
      type: "Web Dashboard",
      description:
        "Skrumpt is the industry-leading CRM software tailored for deal packagers, deal sourcers, and property investors, helping them transform unsellable properties into profitable deals.",
      techstack: ["ReactJS", "Material UI", "ExpressJS", "MongoDB"],
      screenshots: [
        {
          src: "/assets/img/projects/portfolios/skrumpt/1.png",
        },
        {
          src: "/assets/img/projects/portfolios/skrumpt/2.png",
        },
        {
          src: "/assets/img/projects/portfolios/skrumpt/3.png",
        },
        {
          src: "/assets/img/projects/portfolios/skrumpt/4.png",
        },
        {
          src: "/assets/img/projects/portfolios/skrumpt/5.png",
        },
        {
          src: "/assets/img/projects/portfolios/skrumpt/6.png",
        },
        {
          src: "/assets/img/projects/portfolios/skrumpt/7.png",
        },
        {
          src: "/assets/img/projects/portfolios/skrumpt/8.png",
        },
        {
          src: "/assets/img/projects/portfolios/skrumpt/9.png",
        },
        {
          src: "/assets/img/projects/portfolios/skrumpt/10.png",
        },
        {
          src: "/assets/img/projects/portfolios/skrumpt/11.png",
        },
        {
          src: "/assets/img/projects/portfolios/skrumpt/12.png",
        },
        {
          src: "/assets/img/projects/portfolios/skrumpt/13.png",
        },
        {
          src: "/assets/img/projects/portfolios/skrumpt/14.png",
        },
        {
          src: "/assets/img/projects/portfolios/skrumpt/15.png",
        },
        {
          src: "/assets/img/projects/portfolios/skrumpt/16.png",
        },
        {
          src: "/assets/img/projects/portfolios/skrumpt/17.png",
        },
        {
          src: "/assets/img/projects/portfolios/skrumpt/18.png",
        },
      ],
    },
  ];

  return (
    <div className="text-base lg:text-lg">
      <div className="block lg:hidden font-semibold text-lime sticky top-0 py-4 bg-white">
        PROJECTS
      </div>

      {projects.map((project, index) => {
        return (
          <div
            key={index}
            className="mb-5 border-b border-dashed pb-5 last:border-0"
          >
            <div className="flex mb-5 items-center">
              <div className="w-4/12 lg:w-3/12 2xl:w-2/12 2xl:mr-5">
                <Image
                  src={project.icon}
                  width={100}
                  height={100}
                  objectFit={"contain"}
                  alt={project.name}
                />
              </div>
              <div className="w-8/12 lg:w-9/12 2xl:w-10/12">
                <div className="font-semibold text-lg text-black">
                  {project.name}
                </div>
                <div className="mb-2 text-gray-400">Type: {project.type}</div>
                <div className="">
                  <p className="mb-3">{project.description}</p>
                  <Link
                    onClick={() => setOpenedProject(project.id)}
                    href=""
                    className="text-sky-700 "
                  >
                    View Screenshots
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex gap-x-3 justify-end flex-wrap gap-y-3">
              {project.techstack.map((techstack, tsindex) => {
                return (
                  <Badge key={tsindex} theme="teal">
                    {techstack}
                  </Badge>
                );
              })}
            </div>
          </div>
        );
      })}
      {projects.map((project, index) => {
        return (
          <Lightbox
            key={index}
            open={openedProject === project.id}
            close={() => setOpenedProject("")}
            slides={project.screenshots}
          />
        );
      })}
    </div>
  );
}
