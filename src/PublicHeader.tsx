import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoImage from "./assets/se3c_logo_white.png";

const navLinks = [
  { label: "ROADMAP", to: "/roadmap" },
  { label: "TECH", to: "/tech" },
  { label: "TEAM", to: "/team" },
  { label: "CREDIBILITY", to: "/credibility" },
  { label: "OPERATIONS", to: "/operations" },
];

type PublicHeaderProps = {
  isChromeHidden?: boolean;
};

export default function PublicHeader({ isChromeHidden = false }: PublicHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-30 transition-all duration-500 ease-out"
      style={{
        opacity: isChromeHidden ? 0 : 1,
        transform: isChromeHidden ? "translateY(-64px)" : "translateY(0)",
        pointerEvents: isChromeHidden ? "none" : "auto",
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-28"
        style={{
          backgroundImage: isChromeHidden
            ? "linear-gradient(to bottom, rgba(5, 5, 5, 0.24) 0%, rgba(5, 5, 5, 0.06) 40%, rgba(5, 5, 5, 0) 100%)"
            : "linear-gradient(to bottom, rgba(5, 5, 5, 1) 0%, rgba(5, 5, 5, 0.7) 42%, rgba(5, 5, 5, 0) 100%)",
        }}
      />

      <div className="relative flex w-full items-center justify-between px-4 py-3 sm:px-5 md:px-6 md:py-5">
        <Link
          to="/"
          className="relative z-10 flex h-10 w-[50vw] max-w-[10.5rem] shrink-0 items-center overflow-hidden sm:h-11 sm:max-w-[12rem] md:h-24 md:w-72 md:max-w-none md:overflow-visible"
          onClick={() => setIsMenuOpen(false)}
        >
          <img
            src={logoImage}
            alt="SE3C logo"
            className="pointer-events-none h-full w-full object-contain object-left md:h-24 md:w-auto md:max-w-none"
          />
        </Link>

        <nav className="hidden items-center gap-5 text-sm font-medium tracking-[0.08em] text-slate-100 md:flex lg:gap-6 lg:text-base">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to}>
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="relative z-20 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-black/45 text-slate-100 transition duration-300 ease-out active:scale-95 md:hidden"
          aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isMenuOpen}
        >
          <Menu
            size={18}
            strokeWidth={1.8}
            className={`absolute transition-all duration-300 ease-out ${
              isMenuOpen ? "rotate-90 scale-75 opacity-0" : "rotate-0 scale-100 opacity-100"
            }`}
          />
          <X
            size={18}
            strokeWidth={1.8}
            className={`absolute transition-all duration-300 ease-out ${
              isMenuOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-75 opacity-0"
            }`}
          />
        </button>
      </div>

      <nav
        aria-hidden={!isMenuOpen}
        className={`absolute inset-x-3 top-[3.85rem] origin-top rounded-2xl border border-slate-800 bg-[#080808]/95 p-2 shadow-2xl backdrop-blur-xl transition-all duration-300 ease-out md:hidden ${
          isMenuOpen
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none -translate-y-2 scale-[0.98] opacity-0"
        }`}
      >
        {navLinks.map((link, index) => (
          <Link
            key={link.to}
            to={link.to}
            tabIndex={isMenuOpen ? 0 : -1}
            onClick={() => setIsMenuOpen(false)}
            className={`block rounded-xl px-4 py-3 text-sm font-medium tracking-[0.08em] text-slate-100 transition-all duration-300 active:bg-slate-900 ${
              isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"
            }`}
            style={{ transitionDelay: isMenuOpen ? `${index * 35}ms` : "0ms" }}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
