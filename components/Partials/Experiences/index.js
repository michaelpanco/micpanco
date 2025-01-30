import Badge from "@micpanco/components/Common/Badge";

export default function Experiences() {
  const experiences = [
    {
      head: "Sept 2022 - Present",
      subHead: "Trainalta / Encora - Senior Frontend Developer",
      items: [
        "Designed and implemented an interactive timetable feature, showcasing available programs for clients' gym profiles, enhancing user experience.",
        "Successfully led the development of the EarnPortal project utilizing the latest Next.js framework, delivering a robust and scalable solution.",
        "Worked closely with cross-functional teams, including developers, designers, and project stakeholders, to ensure seamless integration of business logic and design principles.",
      ],
      tags: ["ReactJS", "NextJS", "Tailwind CSS", "Shadcn UI"],
    },
    {
      head: "Nov 2021 - Aug 2022",
      subHead: "Vokke / GetDevs - Fullstack Web Developer",
      items: [
        "Refactored existing applications, reducing development time by 30% while maintaining high performance standards.",
        "Led end-to-end frontend development, delivering projects successfully within scope and timeline.",
        "Enhanced user experience, resulting in a notable increase in customer satisfaction.",
        "Collaborated with developers, designers, and project teams to achieve seamless and successful project outcomes.",
      ],
      tags: ["ReactJS", "NextJS", "SASS"],
    },
    {
      head: "Jan 2020 – Oct 2021",
      subHead: "Property Investment Inc. - Freelance Web Developer",
      items: [
        "Developed a robust product CRM, incorporating cutting-edge tools to ensure competitiveness with market-leading products.",
        "Integrated advanced marketing tools to effectively track and analyze user engagement with the product.",
        "Contributed innovative ideas to enhance UI/UX design, creating a more visually appealing and user-friendly interface.",
      ],
      tags: ["ReactJS", "ExpressJS", "MongoDB", "Kubernetes"],
    },
    {
      head: "Sep 2015 – Dec 2019",
      subHead: "Bizme Solutions - Senior Web Developer",
      items: [
        "Spearheaded the development of the ClassesA2Z.com project, managing all aspects including server configuration, user interface design, and backend implementation.",
        "Mentored and guided three junior developers, enhancing their skills in software development processes.",
        "Facilitated the integration of third-party services, such as Stripe and various APIs, to meet customer requirements and enhance functionality.",
        "Collaborated closely with the project owner to ensure features were effectively aligned with project goals and customer expectations.",
      ],
      tags: ["PHP - Laravel", "AngularJS", "PostgreSQL", "Elasticsearch"],
    },
    {
      head: "Jan 2015 – Aug 2015 ",
      subHead: "88bona Casino / Project Based - Web Developer",
      items: [
        "Successfully led the development of a casino website, managing both frontend and backend using PHP Laravel.",
        "Collaborated closely with the project lead to ensure all requirements and functionalities were seamlessly executed.",
        "Integrated third-party services to fetch customer information, including balance, credit, and transaction history, from multiple service providers.",
      ],
      tags: ["PHP - Laravel", "AngularJS", "3rd party integrations"],
    },
    {
      head: "July 2012 – Dec 2014 ",
      subHead: "Mobileventures Inc - Software Developer",
      items: [
        "Designed and developed multiple web portals, enabling users to access their details, purchase credits, and manage transactions seamlessly.",
        "Built a user-friendly Android mobile application for CARD microfinance clients, providing access to account details, balance information, and essential tools.",
        "Collaborated closely with backend developers to ensure seamless integration and functionality of site features.",
      ],
      tags: ["PHP - Laravel", "AngularJS", "3rd party integrations"],
    },
  ];
  return (
    <div className="text-base lg:text-lg">
      <div className="block lg:hidden font-semibold text-lime sticky top-0 py-4 bg-white">
        EXPERIENCES
      </div>
      {experiences.map((experience, index) => {
        return (
          <div className="mb-8" key={index}>
            <div className="text-gray-400">{experience.head}</div>
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
