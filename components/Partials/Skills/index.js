export default function Skills() {
  const skills = [
    {
      title: "Frontend Development",
      subTitle:
        "User Interface design is my area of expertise, and I thrive on bringing creative ideas to life through seamless, engaging browser experiences",
      preItemsTitle: "Languages I speak:",
      preItems: ["HTML", "Javascript", "CSS"],
      itemsTitle: "Development Tools:",
      items: [
        "ReactJS",
        "NextJS",
        "React Native",
        "Tailwind CSS",
        "Shadcn UI",
        "Material UI",
        "Google Fonts",
        "Lucide React Icons",
        "Rest API",
        "GraphQL",
        "NPM / Yarn",
      ],
    },
    {
      title: "Backend Development",
      subTitle:
        "My backend skills are essential for building projects from the ground up. Here are some of the tools I use to power backend development.",
      preItemsTitle: "Languages I speak:",
      preItems: ["NodeJS", "PHP"],
      itemsTitle: "Frameworks & Databases:",
      items: [
        "NestJS",
        "ExpressJS",
        "Laravel",
        "Lumen",
        "Mysql",
        "MongoDB",
        "Elasticsearch",
        "Algolia",
      ],
    },
    {
      title: "Others",
      subTitle: "And a selection of tools I use beyond coding.",
      itemsTitle: "Other Tools:",
      items: [
        "Adobe Photoshop",
        "Figma",
        "GIT",
        "Postman",
        "Vercel",
        "Expo",
        "DB Diagram",
        "VSCode",
        "Vagrant",
        "Docker",
      ],
    },
  ];
  return (
    <div>
      <div className="block lg:hidden font-semibold text-lime sticky top-0 py-4 bg-white">
        SKILLS
      </div>
      {skills.map((skill, index) => {
        return (
          <div className="mb-8" key={index}>
            <div className="text-xl font-semibold text-black mb-2">
              {skill.title}
            </div>

            <div className="mb-2">{skill.subTitle}</div>

            <div className="font-semibold mb-2 text-black">
              {skill?.preItemsTitle}
            </div>

            <div className="mb-2">
              <ul className="list-disc grid grid-cols-2 pl-5">
                {skill?.preItems?.map((item, itemKey) => {
                  return <li key={itemKey}>{item}</li>;
                })}
              </ul>
            </div>

            <div className="font-semibold mb-2 text-black">
              {skill.itemsTitle}
            </div>
            <div className="">
              <ul className="list-disc grid grid-cols-2 pl-5">
                {skill.items.map((item, itemKey) => {
                  return <li key={itemKey}>{item}</li>;
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
