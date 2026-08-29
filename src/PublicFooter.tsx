import { Github } from "lucide-react";

export default function PublicFooter() {
  return (
    <footer className="border-t border-white/15 bg-black">
      <div className="mx-auto flex w-full max-w-[1500px] flex-col gap-4 px-6 py-8 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
        <span>© 2026 SE3C · 우주탐사공학실험동아리</span>
        <a href="https://github.com/SE3C" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white/65 transition hover:text-white"><Github size={14} /> GitHub</a>
      </div>
    </footer>
  );
}
