import { createElement } from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaTasks } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import dashboard from "@/public/dashboard.png";
import gameHub from "@/public/game-hub.png";
import issueTracker from "@/public/issue-tracker.jpeg";
import onlineStore from "@/public/online-store.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Sense bank",
    location: "Kyiv, Ukraine",
    description: "I work as Head of Project in retail banking",
    icon: createElement(FaReact),
    date: "May 2024 - present",
  },
  {
    title: "Incode Group",
    location: "Kyiv, Ukraine",
    description: "I work as a front-end developer. My stack is React/NextJS",
    icon: createElement(FaReact),
    date: "February 2024 - May 2024",
  },
  {
    title: "Self-employed",
    location: "Kyiv, Ukraine",
    description:
      "I graduated after 1 year of studying. I immediately found a job as a full-stack developer in Zapchastiulka project",
    icon: createElement(CgWorkAlt),
    date: "June 2023 - February 2024",
  },
  {
    title: "GOIT school",
    location: "Kyiv, Ukraine",
    description: "I graduated the courses as a full-stack developer",
    icon: createElement(LuGraduationCap),
    date: "June 2023 - February 2024",
  },
  {
    title: "Privatbank, Ukrgasbank, Ukrposhta",
    location: "Kyiv, Ukraine",
    description: "I worked as a Project manager",
    icon: createElement(FaTasks),
    date: "2002 - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Spare parts online store",
    description:
      "I developed and designed RESTful APIs, implemented a chatbot written on WebSocket's (client side + admin panel)",
    tags: [
      "react",
      "next.js",
      "redux",
      "tailwind",
      "web-sockets",
      "mongoDB",
      "express",
    ],
    imageUrl: onlineStore,
    link: "https://github.com/Zapchaztiulka/zapchaztiulka-catalog-frontend",
  },
  {
    title: "Game Hub",
    description:
      "Pet-project - video game discovery web app that helps you find new and interesting games to play",
    tags: ["react", "react-query", "zustand", "chakra-ui"],
    imageUrl: gameHub,
    link: "https://github.com/olehkl1apko/game-hub",
  },
  {
    title: "Expenses Tracker Saas",
    description: "Pet-project - manage your expenses in the best way",
    tags: [
      "nextjs",
      "kinde-auth",
      "postgres",
      "prisma",
      "tailwind",
      "stripe",
      "ngrok",
      "posthog",
    ],
    imageUrl: issueTracker,
    link: "https://github.com/Oleh-Kliapko/expenses-tracker-saas",
  },
  {
    title: "Dashboard",
    description:
      "Pet-project - a data visualization dashboard includes interactive charts, graphs, and allow users to manipulate data to gain insights",
    tags: ["nextjs", "next-auth", "material-ui", "chartjs"],
    imageUrl: dashboard,
    link: "https://github.com/olehkl1apko/dashboard-nextjs-app",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Redux",
  "Zustand",
  "Node.js",
  "Web-sockets",
  "Tailwind",
  "Material-UI",
  "Ant Design",
  "Chakra-UI",
  "Framer Motion",
  "Prisma",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Express",
  "Git",
] as const;
