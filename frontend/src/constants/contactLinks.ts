import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

export const contactLinks = [
  {
    label: "Email",
    href: "mailto:omkar.frontenddev@gmail.com",
    icon: MdOutlineAlternateEmail,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/omkarbokil/",
    icon: FaLinkedinIn,
  },
  {
    label: "GitHub",
    href: "https://github.com/omkar-frontend",
    icon: FaGithub,
  },
] as const;
