import { Link } from "react-router-dom";
import { detailPages, getDetailPath } from "./siteDetails";
import PublicHeader from "./PublicHeader";
import PublicFooter from "./PublicFooter";

const techPages = detailPages.filter((detail) => detail.category === "tech");

export default function TechPage() {
  return (
    <div className="page-enter min-h-screen bg-[#050505] text-slate-100">
      <PublicHeader />
      <div className="w-full px-3 pb-8 pt-3 sm:px-4 md:px-6 md:pb-10 md:pt-6">

        <section className="mb-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-4 sm:p-6 md:mb-8 md:rounded-[2rem] md:p-10">
          <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500 sm:text-xs">Tech</p>
          <h1 className="mt-2 text-3xl font-semibold leading-tight text-white sm:mt-3 sm:text-4xl md:text-5xl">SE3C 기술 트랙</h1>
          <div className="mt-4 grid gap-3 md:mt-6 md:grid-cols-3 md:gap-4">
            <div className="rounded-xl border border-slate-800 bg-black/30 p-3 sm:rounded-2xl sm:p-4">
              <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500 sm:text-xs">Track 01</p>
              <p className="mt-2 text-base font-medium text-white sm:text-lg">Communication</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">센서, 전송, 데이터 확인까지 이어지는 통신 검증</p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-black/30 p-3 sm:rounded-2xl sm:p-4">
              <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500 sm:text-xs">Track 02</p>
              <p className="mt-2 text-base font-medium text-white sm:text-lg">Propulsion</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">연료, 노즐, 내열성, 제작 공정의 반복 실험</p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-black/30 p-3 sm:rounded-2xl sm:p-4">
              <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500 sm:text-xs">Track 03</p>
              <p className="mt-2 text-base font-medium text-white sm:text-lg">Software</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">AI Studio 기반 실습과 앱 결과물 제작</p>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3 md:gap-6">
          {techPages.map((detail) => (
            <Link
              key={detail.id}
              to={getDetailPath(detail)}
              className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/60 transition-all duration-300 hover:border-slate-600 md:rounded-[2rem]"
            >
              <div className="relative">
                <img src={detail.image} alt={detail.title} className="h-56 w-full bg-black object-contain sm:h-64 md:h-72" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <p className="text-[10px] uppercase tracking-[0.16em] text-slate-300 sm:text-xs">{detail.label}</p>
                  <h2 className="mt-2 text-xl font-medium text-white sm:text-2xl">{detail.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-200 sm:mt-3">{detail.summary}</p>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </div>
      <PublicFooter />
    </div>
  );
}
