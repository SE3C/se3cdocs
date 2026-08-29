import { useEffect, useState } from "react";
import { Github, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logoImage from "./assets/se3c_logo_white.png";

const navLinks = [
  { label: "PROJECTS", to: "/tech" },
  { label: "ENGINEERING LOG", to: "/credibility" },
  { label: "ABOUT SE3C", to: "/team" },
];

type PublicHeaderProps = { isChromeHidden?: boolean };

export default function PublicHeader({ isChromeHidden = false }: PublicHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-500"
      style={{ top: isChromeHidden ? "-76px" : "0", opacity: isChromeHidden ? 0 : 1, pointerEvents: isChromeHidden ? "none" : "auto" }}
    >
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/80 via-black/35 to-transparent" />
      <div className="relative mx-auto flex h-[72px] w-full max-w-[1500px] items-center justify-between px-5 sm:px-7 lg:px-10">
        <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex h-8 w-32 items-center sm:w-36">
          <img src={logoImage} alt="SE3C" className="h-full w-full object-contain object-left" />
        </Link>

        <nav className="hidden items-center gap-8 text-[13px] font-semibold text-white lg:flex">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className="nav-link">{link.label}</Link>
          ))}
          <a href="https://github.com/SE3C" target="_blank" rel="noreferrer" className="nav-link inline-flex items-center gap-2">
            <Github size={16} /> GitHub
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setIsMenuOpen((value) => !value)}
          className="relative z-20 flex h-11 w-11 items-center justify-center text-white lg:hidden"
          aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`fixed inset-0 z-10 bg-black transition-all duration-300 lg:hidden ${isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
        aria-hidden={!isMenuOpen}
        inert={!isMenuOpen ? true : undefined}
      >
        <div className="flex min-h-screen flex-col px-6 pb-10 pt-28">
          <div className="border-t border-white/20">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} onClick={() => setIsMenuOpen(false)} className="flex items-center justify-between border-b border-white/20 py-5 text-xl font-medium text-white">
                {link.label}<span className="text-sm text-white/45">↗</span>
              </Link>
            ))}
            <a href="https://github.com/SE3C" target="_blank" rel="noreferrer" className="flex items-center justify-between border-b border-white/20 py-5 text-xl font-medium text-white">
              GitHub <Github size={18} />
            </a>
          </div>
          <div className="mt-auto pt-12 text-xs leading-6 text-white/45">SE3C · 우주탐사공학실험동아리<br />2026 Engineering Portfolio</div>
        </div>
      </div>
    </header>
  );
}
