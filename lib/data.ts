import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import project1 from "@/public/project1.png";
import project2 from "@/public/project2.png";
import project3 from "@/public/project3.png";
import Project4 from "@/public/project4.png";
import { Link } from "@react-email/components";

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
  {
    name: "Blogs",
    hash: "https://next-blog-omega-flax.vercel.app/",
  },
] as const;

// *******👉Experience Data********
export const experiencesData = [
  {
    title: "Under Graduation",
    location: "Delhi, India",
    description:
      "I am under Graduate and pursuing BCA from 'Maharshi Dayanand University'",
    icon: React.createElement(LuGraduationCap),
    date: "2021-2024",
  },
  {
    title: "Front-End Developer",
    location: "Delhi, India",
    description:
      "I have not any official experience but i wokred or learning Front-End from 1 year",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - present",
  },
  {
    title: "Full-Stack Developer",
    location: "Delhi, India",
    description:
      "I have not any official experience but i wokred on many projects and learning Full-Stack from 1 year",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

// *******👉Project Data********
export const projectsData = [
  {
    title: "My Blog Website",
    description:
      "This is a blog website using next.js, Tailwind CSS and Sanity headless CMS",
    tags: [ "Tailwind CSS",  "Next.Js", "Node.Js", "Sanity CMS"],
    imageUrl: project1,
    link: "View Live",
    siteLink: "https://next-blog-omega-flax.vercel.app/",
  },
  {
    title: "Education Website Project",
    description:
      "This is a Education based Project. It is a website for Educational Institutions. It has all necessary features, from 'About to Contact form Features'. And I worked as a Full-Stack-Developer on this project.",
    tags: ["HTML", "CSS", "Express.Js", "Mongo Db"],
    imageUrl: project2,
    link: "View Live",
    siteLink: "https://bhartiacademy.com/",
  },
  {
    title: "Count-Down Timer",
    description:
      "It is a simple Count-Down Timer. Which gives you a remember of an Announcement",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: project3,
    link: "View Live",
    siteLink: "https://ritikk-sudo.github.io/CountDown-Timer/",
  },
  {
    title: "Color-Generator With Color Code",
    description:
      "It is a simplistic Color Generator with Color Code. Which gives you a random color code with automatically copy on clipboard features.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: Project4,
    link: "View Live",
    siteLink: "https://color-generator-cyan.vercel.app/",
  },
] as const;

// *******👉Skills Data********
export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "Framer Motion",
] as const;
