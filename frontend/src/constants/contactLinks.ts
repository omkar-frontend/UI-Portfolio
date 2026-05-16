import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

export const contactLinks = [
  {
    label: "Email",
    href: "mailto:you@example.com",
    icon: MdOutlineAlternateEmail,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/your-profile",
    icon: FaLinkedinIn,
  },
  {
    label: "GitHub",
    href: "https://github.com/your-username",
    icon: FaGithub,
  },
] as const;
