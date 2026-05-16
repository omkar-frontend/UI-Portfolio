import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { contactLinks } from "../constants/contactLinks";

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

const mobileNavItems = [
  { label: "Home", href: "/" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Designs", href: "#designs" },
  { label: "Articles", href: "#articles" },
  { label: "Connect", href: "#connect" },
] as const;

export default function Navbar() {
  const { pathname, hash } = useLocation();
  const homeActive = pathname === "/" && hash === "";

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((open) => !open);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-bg text-text px-5 sm:py-6 py-3 sticky top-0 z-10">
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
        <NavItem active={hash === "#connect"} href="#connect">
          Connect
        </NavItem>
      </div>

      <div className="sm:hidden flex justify-end">
        <button
          type="button"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="p-1 bg-black/10 rounded-lg"
        >
          <ChevronLeft
            className={`w-6 h-6 transition-transform duration-300 text-neutral-800 ${isMenuOpen ? "scale-[-1]" : ""}`}
          />
        </button>
      </div>

      <div
        className={`fixed inset-0 z-100 sm:hidden transition-opacity duration-300 max-h-[calc(100dvh)] overflow-hidden ${isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
        aria-hidden={!isMenuOpen}
      >
        <div
          className={`absolute inset-0 flex w-full flex-col bg-bg px-5 transition-transform duration-300 ease-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex justify-end py-3">
            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close menu"
              className="p-1 bg-black/10 rounded-lg"
            >
              <ChevronLeft className="w-6 h-6 scale-[-1] text-neutral-800" />
            </button>
          </div>

          <nav className="flex flex-col gap-6 pt-4">
            {mobileNavItems.map((item) => {
              const isHome = item.href === "/";
              const active = isHome ? homeActive : hash === item.href;

              if (isHome) {
                return (
                  <Link
                    key={item.label}
                    to="/"
                    onClick={closeMenu}
                    className="group flex items-center gap-3 text-sm text-text transition-colors"
                  >
                    <ActiveDot active={active} />
                    <span>{item.label}</span>
                  </Link>
                );
              }

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className="group flex items-center gap-3 text-sm text-text transition-colors"
                >
                  <ActiveDot active={active} />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>

          <div className="mt-auto mb-20 flex gap-4 pt-10">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="flex items-center gap-2 rounded-lg border border-text/10 p-2.5 text-text/80 transition-colors duration-500 hover:bg-emerald-600 hover:text-white hover:border-emerald-600"
              >
                <link.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
