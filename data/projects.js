const imageSet = (directory, files) =>
  files.map((file) => `/assets/img/projects/portfolios/${directory}/${file}`);

// Keep projects newest-to-oldest. The homepage derives its three featured items
// from this same collection, so adding a project only requires editing this file.
export const projects = [
  {
    slug: "allied-therapy-staffing", name: "Allied Therapy Staffing", category: "Professional / Client Project", projectType: "Website & Administrative Platform",
    status: "Published case study", role: "Full-Stack Developer",
    description: "A healthcare staffing platform connecting home health agencies with qualified therapy professionals through streamlined public and administrative workflows.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "OpenAI Codex"],
    image: "/assets/img/projects/portfolios/allied-therapy-staffing/home.png",
    imageAlt: "Allied Therapy Staffing homepage showing therapy coverage across six states",
    caseHeroImage: "/assets/img/projects/portfolios/allied-therapy-staffing/home.png",
    website: "https://www.alliedtherapystaffing.com/",
    gallery: "allied-therapy-staffing",
    context: "Allied Therapy Staffing connects home health agencies with qualified physical, occupational, and speech therapy professionals. The platform brings staffing requests, clinician recruitment, job applications, territory opportunities, and operational management into one consistent digital experience.",
    contributions: [
      "Developed responsive public pages, reusable components, interactive forms, and administrative interfaces with Next.js and Tailwind CSS.",
      "Integrated Supabase for authentication, database operations, and data-driven management of jobs, applications, territories, and leads.",
      "Used OpenAI Codex to accelerate component development, integration, refinement, and troubleshooting, with hands-on review and validation.",
      "Delivered and debugged the connected public and administrative experiences end to end.",
    ],
    keyFeatures: ["Agency staffing requests", "Clinician recruitment", "Therapy job listings and applications", "Multi-state coverage information", "Territory opportunity workflows", "Administrative management tools"],
    note: "Administrative screenshots have been cropped or use redacted source captures so private contact and account information is not published.",
    screenshots: [],
  },
  {
    slug: "smartcents", name: "SmartCents", category: "Professional / Client Project", projectType: "Web Application",
    status: "Case study draft", role: "Frontend Developer",
    description: "A personal finance platform helping users manage their income, debt, and assets through a clean and intuitive interface.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React Query", "Zod"],
    image: "/assets/img/projects/portfolios/smartcents/1000015268.jpg",
    imageAlt: "SmartCents mobile home affordability dashboard",
    featuredImages: [
      { src: "/assets/img/projects/portfolios/smartcents/1000015235.jpg", alt: "SmartCents welcome screen", width: 1080, height: 2400 },
      { src: "/assets/img/projects/portfolios/smartcents/1000015268.jpg", alt: "SmartCents affordability dashboard", width: 1080, height: 2400 },
      { src: "/assets/img/projects/portfolios/smartcents/1000015273.jpg", alt: "SmartCents mortgage calculator", width: 1080, height: 2400 },
    ],
    gallery: "smartcents",
    context: "SmartCents is presented as a personal finance platform focused on making financial information easier to understand and manage.",
    contributions: ["Frontend interface implementation", "Responsive user experience", "Reusable interface patterns"],
    note: "The screens shown document the mobile affordability, financial review, and homebuying planning experience.", screenshots: [],
  },
  {
    slug: "tomori", name: "Tomori", category: "Personal Project", projectType: "AI Web Application — In Development",
    status: "In development", role: "Creator / Full-Stack Developer",
    description: "An anime AI companion platform featuring personalized conversations, persistent memories, and a private user experience.",
    technologies: ["Next.js", "TypeScript", "Hono", "PostgreSQL", "Drizzle ORM"],
    image: "/assets/img/projects/portfolios/tomori/Dashboard.png",
    imageAlt: "Tomori mobile home feed showing anime AI companions and social posts",
    featuredImages: [
      { src: "/assets/img/projects/portfolios/tomori/Welcome.png", alt: "Tomori welcome screen", width: 393, height: 852 },
      { src: "/assets/img/projects/portfolios/tomori/Dashboard.png", alt: "Tomori companion home feed", width: 393, height: 975 },
      { src: "/assets/img/projects/portfolios/tomori/Profile - About.png", alt: "Tomori companion profile", width: 393, height: 870 },
    ],
    gallery: "tomori",
    context: "Tomori is an in-development personal project exploring a private, personalized AI companion experience.",
    contributions: ["Product concept and interface design", "Full-stack implementation", "Private, user-centered interaction design"],
    note: "The project is in development. Technical decisions and screenshots will be documented as they are ready to share.", screenshots: [],
  },
  {
    slug: "trainalta", name: "Trainalta / Encora", category: "Professional / Client Project", projectType: "Web Application",
    status: "Published case study", role: "Senior Frontend Developer",
    description: "Interactive scheduling and fitness management interfaces designed to improve usability and user engagement.",
    technologies: ["React", "Next.js", "Tailwind CSS", "shadcn/ui"], image: "/assets/img/projects/portfolios/ta-earn-site/1.png",
    context: "Trainalta provides fitness programs and coaching experiences. The work shown here covers customer-facing and administrative interfaces already documented in this portfolio.",
    contributions: ["Designed and implemented an interactive timetable for gym profiles", "Led frontend development of the EarnPortal project", "Collaborated with design, development, and project stakeholders"],
    note: "Client-confidential implementation details and business results are intentionally omitted.",
    screenshots: ["/assets/img/projects/portfolios/ta-earn-site/1.png", "/assets/img/projects/portfolios/ta-earn/earn_dashboard_homepage.png", "/assets/img/projects/portfolios/ta-earn/earn_dashboard_calendar.png", "/assets/img/projects/portfolios/ta-earn/earn_dashboard_classes.png"],
  },
  {
    slug: "trainalta-earnportal-dashboard", name: "Trainalta Earnportal — User Dashboard", category: "Professional / Client Project", projectType: "Web Dashboard",
    description: "A user portal designed for Alta coaches to efficiently manage their classes, schedules, programs, and service pricing, streamlining administrative tasks and enhancing overall workflow.",
    technologies: ["ReactJS", "NextJS", "Material UI"], image: "/assets/img/projects/portfolios/ta-earn/earn_dashboard_homepage.png",
    screenshots: imageSet("ta-earn", ["earn_dashboard_homepage.png", "earn_dashboard_classesdetails.png", "earn_dashboard_classes.png", "earn_dashboard_calendar.png", "earn_classes_edit.png", "earn_dashboard_participants.png", "earn_dashboard_rates.png", "earn_dashboard_settings.png"]),
  },
  {
    slug: "trainalta-earnportal-site", name: "Trainalta Earnportal — Site", category: "Professional / Client Project", projectType: "Website",
    description: "A website designed to showcase the EarnPortal dashboard, enabling users to register, log in, and purchase programs with ease, providing a seamless and engaging experience.",
    technologies: ["ReactJS", "NextJS", "ShadCN UI"], image: "/assets/img/projects/portfolios/ta-earn-site/1.png",
    screenshots: imageSet("ta-earn-site", ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png", "11.png", "12.png", "13.png"]),
  },
  {
    slug: "nextshark-site", name: "NextShark Site", category: "Professional / Client Project", projectType: "Website",
    description: "The premier platform for Asian American news, covering a wide range of topics including culture, social issues, entertainment, politics, and more.",
    technologies: ["ReactJS", "NextJS", "Tailwind CSS"], image: "/assets/img/projects/portfolios/ns-site/1.png",
    screenshots: imageSet("ns-site", ["1.png", "2.png", "3.png", "4.png", "5.png"]),
  },
  {
    slug: "nextshark-app", name: "NextShark App", category: "Professional / Client Project", projectType: "Mobile Application",
    role: "Application Developer",
    description: "NextShark news is now easily accessible at your fingertips, available on both iOS and Android mobile platforms.",
    technologies: ["React Native", "Expo"], image: "/assets/img/projects/portfolios/ns-app/0.JPG",
    imageAlt: "NextShark mobile app saved stories screen",
    featuredImages: [
      { src: "/assets/img/projects/portfolios/ns-app/3.JPG", alt: "NextShark mobile category feed", width: 1170, height: 2532 },
      { src: "/assets/img/projects/portfolios/ns-app/0.JPG", alt: "NextShark mobile saved stories feed", width: 1170, height: 2532 },
      { src: "/assets/img/projects/portfolios/ns-app/6.JPG", alt: "NextShark mobile display settings", width: 1170, height: 2532 },
    ],
    gallery: "nextshark",
    context: "NextShark App brings NextShark news to iOS and Android, with mobile experiences for browsing categories, reading and saving stories, sharing articles, and managing display and notification preferences.",
    contributions: ["Mobile application development with React Native and Expo"],
    note: "The available screenshots document the app’s reading, saved-story, sharing, and preference experiences.",
    screenshots: [],
  },
  {
    slug: "trainalta-account-section", name: "Trainalta — Account Section", category: "Professional / Client Project", projectType: "Web Dashboard",
    description: "This feature enables Trainalta users to efficiently manage their account profile, update payment details, and oversee their subscription preferences.",
    technologies: ["ReactJS", "NextJS", "Material UI"], image: "/assets/img/projects/portfolios/ta-about/1.png",
    screenshots: imageSet("ta-about", ["1.png", "2.png", "3.png", "4.png"]),
  },
  {
    slug: "frugll-estimation-wizard", name: "Frugll — Estimation Wizard", category: "Professional / Client Project", projectType: "Wizard Form",
    description: "This wizard guides users through entering their address, then provides a personalized solar installation quotation based on the property's location.",
    technologies: ["ReactJS", "NextJS", "Tailwind CSS"], image: "/assets/img/projects/portfolios/frugll/1.png",
    screenshots: imageSet("frugll", ["1.png", "2.png", "3.png", "4.png"]),
  },
  {
    slug: "gamedev-courses-dashboard", name: "Gamedev — Courses Dashboard", category: "Professional / Client Project", projectType: "Web Dashboard",
    description: "This dashboard integrates with an API to aggregate data, providing a comprehensive summary of reports on game courses.",
    technologies: ["ReactJS", "NextJS", "Tailwind CSS", "NestJS"], image: "/assets/img/projects/portfolios/gd/1.png",
    screenshots: imageSet("gd", ["1.png", "2.png", "3.png"]),
  },
  {
    slug: "sellsmart-dashboard", name: "SellSmart — Dashboard", category: "Professional / Client Project", projectType: "Web Dashboard",
    description: "SellSmart is a premier service platform for real estate agents and their clients. This dashboard empowers users to efficiently manage all their services and view quote requests from consumer users.",
    technologies: ["ReactJS", "NextJS", "Material UI"], image: "/assets/img/projects/portfolios/ss/1.png",
    screenshots: imageSet("ss", ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png", "11.png"]),
  },
  {
    slug: "skrumpt-crm", name: "Skrumpt CRM", category: "Professional / Client Project", projectType: "Web Dashboard",
    description: "Skrumpt is the industry-leading CRM software tailored for deal packagers, deal sourcers, and property investors, helping them transform unsellable properties into profitable deals.",
    technologies: ["ReactJS", "Material UI", "ExpressJS", "MongoDB"], image: "/assets/img/projects/portfolios/skrumpt/1.png",
    screenshots: imageSet("skrumpt", ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png", "11.png", "12.png", "13.png", "14.png", "15.png", "16.png", "17.png", "18.png"]),
  },
];

const featuredProjectSlugs = ["tomori", "smartcents", "nextshark-app"];

export const featuredProjects = featuredProjectSlugs.map((slug) => getProject(slug));

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}
