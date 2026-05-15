import { Link, useLocation } from "react-router-dom";

function ActiveDot({ active }: { active: boolean }) {
  return (
    <span
      className={`h-1 w-1 rounded-full bg-current transition-opacity duration-200 ${active ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
      aria-hidden
    />
  );
}

function NavItem({
  active,
  href,
  children,
}: {
  active: boolean;
  href: string;
  children: string;
}) {
  return (
    <a
      href={href}
      className={`group flex flex-col items-center gap-1.5 text-sm transition-colors text-text`}
    >
      <span>{children}</span>
      <ActiveDot active={active} />
    </a>
  );
}

export default function Navbar() {
  const { pathname, hash } = useLocation();
  const homeActive = pathname === "/" && hash === "";

  return (
    <nav className="bg-bg text-text py-6 sticky top-0 z-10">
      <div className="sm:flex hidden justify-center gap-16 text-sm">
        <Link
          to="/"
          className={`group flex flex-col items-center gap-1.5 text-sm transition-colors text-text`}
        >
          <span>Home</span>
          <ActiveDot active={homeActive} />
        </Link>
        <NavItem active={hash === "#experience"} href="#experience">
          Experience
        </NavItem>
        <NavItem active={hash === "#projects"} href="#projects">
          Projects
        </NavItem>
        <NavItem active={hash === "#designs"} href="#designs">
          Designs
        </NavItem>
        <NavItem active={hash === "#articles"} href="#articles">
          Articles
        </NavItem>
        <NavItem active={hash === "#contact"} href="#contact">
          Connect
        </NavItem>
      </div>
    </nav>
  );
}
