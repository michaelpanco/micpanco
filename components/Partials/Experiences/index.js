import Badge from "@micpanco/components/Common/Badge";

export default function Experiences() {
  const experiences = [
    {
      head: "Sept 2022 - Present",
      subHead: "Trainalta / Encora - Senior Frontend Developer",
      items: [
        "Developed interactive timetable for client’s gym profile available programs.",
        "Led the successful development of the Earnportal project with the latest NextJS.",
        "Developed interactive timetable for the client’s gym profile",
        "Collaborated with other developers, designers, and project teams to ensure that the business logic and design are well applied.",
      ],
      tags: ["ReactJS", "NextJS", "Tailwind CSS", "Shadcn UI"],
    },
    {
      head: "Nov 2021 - Aug 2022",
      subHead: "Vokke / GetDevs - Fullstack Web Developer",
      items: [
        "Refactored existng applications, cutting development time by 30% while ensuring performance standings.",
        "Led the successful frontend development from start to finish",
        "Improved user experience resulDng in customer saDsfacDon.",
        "Collaborated with other developers, designers, and project teams to ensure a successful result.",
      ],
      tags: ["ReactJS", "NextJS", "SASS"],
    },
    {
      head: "Jan 2020 – Oct 2021",
      subHead: "Property Investment Inc. - Freelance Web Developer",
      items: [
        "Developed the product CRM, and introduced all the cutting-edge tools to make the project compete with product competitors",
        "Integrate marketing tools to track user product engagement.",
        "Contribute ideas especially on UI and UX to make it more appealing for t and easy to use.",
      ],
      tags: ["ReactJS", "ExpressJS", "MongoDB", "Kubernetes"],
    },
    {
      head: "Sep 2015 – Dec 2019",
      subHead: "Bizme Solutions - Senior Web Developer",
      items: [
        "Pioneered the overall project classesa2z.com from managing the server, building the user interface, and backend creation.",
        "Mentored 3 junior developers in software development processes,",
        "Facilitated integration of third-party services like Stripe and other APIs to satisfy customer’s needs.",
        "Communicate with the project owner to ensure the functionalities are adequately adapted",
      ],
      tags: ["PHP - Laravel", "AngularJS", "PostgreSQL", "Elasticsearch"],
    },
    {
      head: "Jan 2015 – Aug 2015 ",
      subHead: "88bona Casino / Project Based - Web Developer",
      items: [
        "Led the successful development of the casino website from frontend to backend using PHP Laravel. ",
        "Working closely with the project lead to ensure all requirements and functionalities are smoothly executed",
        "Implement third-party services that fetch customer info like customer balance, credit, and history from several service providers.",
      ],
      tags: ["PHP - Laravel", "AngularJS", "3rd party integrations"],
    },
    {
      head: "July 2012 – Dec 2014 ",
      subHead: "Mobileventures Inc - Software Developer",
      items: [
        "Created several web portals for the user to check their details, buy credits, purchase load, etc.",
        "Developed a simple Android mobile application for the CARD microfinance client, this shows all the details, balance, and some handy tools for the user.",
        "Work jointly with the backend developer for the site functionalities.",
      ],
      tags: ["PHP - Laravel", "AngularJS", "3rd party integrations"],
    },
  ];
  return (
    <div>
      <div className="block lg:hidden font-semibold text-lime sticky top-0 py-4 bg-white">
        EXPERIENCES
      </div>
      {experiences.map((experience, index) => {
        return (
          <div className="mb-8" key={index}>
            <div className="text-black">{experience.head}</div>
            <div className="font-semibold text-black mb-3">
              {experience.subHead}
            </div>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              {experience.items.map((item, itemIndex) => {
                return <li key={itemIndex}>{item}</li>;
              })}
            </ul>
            <div className="flex space-x-3 justify-end flex-wrap gap-y-3">
              {experience.tags.map((tag, tagIndex) => {
                return (
                  <Badge key={tagIndex} theme="lime">
                    {tag}
                  </Badge>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
