import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  nextjs,
  jabur,
  civ,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: " ",
    icon: reactjs,
    iconBg: "#383E56",
    date: "User-friendly applications",
    points: [
      "I am a skilled React developer with expertise in creating efficient, scalable, and user-friendly applications using the latest industry trends",
    ],
  },
  {
    title: "Next.js Developer",
    company_name: " ",
    icon: nextjs,
    iconBg: "#E6DEDD",
    date: "High-performance web applications",
    points: [
      "I am an accomplished Next.js developer proficient in building high-performance web applications with excellent user experiences using modern technologies.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: " ",
    icon: reactjs,
    iconBg: "#383E56",
    date: "High-quality mobile applications",
    points: [
      "I am a talented React Native developer with expertise in creating high-quality mobile applications that deliver seamless user experiences.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: " ",
    icon: typescript,
    iconBg: "#E6DEDD",
    date: "End-to-end solutions",
    points: [
      "I am an accomplished full-stack developer with expertise in creating end-to-end solutions that meet business needs and user expectations.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Jabur & songs(Android)",
    description:
      "Jabur and Songs is a feature-rich MP3 player app built using React Native as the front-end and Sanity as the backend. With its intuitive user interface, users can easily browse and play their favorite music while also enjoying a reading experience with the app's built-in book feature.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "sanity",
        color: "pink-text-gradient",
      },
      {
        name: "rn track player",
        color: "green-text-gradient",
      },
    ],
    image: jabur,
    source_code_link: "https://github.com/",
  },
  {
    name: "Jabur & songs(iOS)",
    description:
      "Jabur and Songs is a feature-rich MP3 player app built using React Native as the front-end and Sanity as the backend. With its intuitive user interface, users can easily browse and play their favorite music while also enjoying a reading experience with the app's built-in book feature.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "sanity",
        color: "pink-text-gradient",
      },
      {
        name: "rn track player",
        color: "green-text-gradient",
      },
    ],
    image: jabur,
    source_code_link: "https://github.com/",
  },
  {
    name: "Civ.ie",
    description:
      "Civ.ie is a user-friendly online CV creator built using Vue and Nuxt.js. With its easy-to-use interface and customizable templates, Civ.ie allows users to create professional-looking CVs in no time. Sign up today and take the first step towards landing your dream job!",
    tags: [
      {
        name: "nuxtjs",
        color: "blue-text-gradient",
      },
      {
        name: "vuejs",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: civ,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
