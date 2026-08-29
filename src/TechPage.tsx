import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { detailPages, getDetailPath } from "./siteDetails";
import PublicHeader from "./PublicHeader";
import PublicFooter from "./PublicFooter";

const techPages = detailPages.filter((detail) => detail.category === "tech");

export default function TechPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <PublicHeader />
      <main>
        <section className="subpage-hero">
          <div className="mx-auto w-full max-w-[1500px] px-6 pb-20 pt-36 sm:px-8 md:pb-28 md:pt-44 lg:px-10">
            <p className="eyebrow">SE3C · 2026</p>
            <h1 className="subpage-title">프로젝트</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/65">위성, 로켓, 로보틱스·AI, 소프트웨어와 제작 기술을 하나의 공학 과정으로 연결합니다.</p>
          </div>
        </section>

        <section className="border-t border-white/15">
          {techPages.map((detail, index) => (
            <Link key={detail.id} to={getDetailPath(detail)} className="tech-row group">
              <img src={detail.image} alt="" className="tech-row-image" />
              <div className="tech-row-overlay" />
              <div className="relative z-10 mx-auto flex min-h-[54vh] w-full max-w-[1500px] flex-col justify-end px-6 py-14 sm:px-8 md:min-h-[62vh] md:py-20 lg:px-10">
                <p className="eyebrow">0{index + 1} · {detail.label}</p>
                <h2 className="mt-3 max-w-4xl text-4xl font-semibold tracking-[-0.045em] sm:text-5xl md:text-6xl">{detail.title}</h2>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">{detail.summary}</p>
                <div className="mt-7 inline-flex items-center gap-2 text-sm font-semibold">자세히 보기 <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></div>
              </div>
            </Link>
          ))}
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}
