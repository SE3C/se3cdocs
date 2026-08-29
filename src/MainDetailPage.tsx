import { useEffect } from "react";
import { ArrowLeft, ArrowRight, Github } from "lucide-react";
import { Link, useLocation, useParams } from "react-router-dom";
import { detailPages, getDetailPath } from "./siteDetails";
import PublicHeader from "./PublicHeader";
import PublicFooter from "./PublicFooter";
import useHideChromeOnScroll from "./useHideChromeOnScroll";

export default function MainDetailPage() {
  const params = useParams();
  const location = useLocation();
  const category = params.id ? (location.pathname.startsWith("/tech/") ? "tech" : "general") : null;
  const detail = detailPages.find((item) => item.id === params.id && (!category || item.category === category));
  const related = detailPages.filter((item) => item.id !== params.id && item.category === detail?.category).slice(0, 3);
  const isChromeHidden = useHideChromeOnScroll();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  if (!detail) {
    return (
      <div className="page-enter min-h-screen bg-[#050505] text-slate-100">
        <PublicHeader />
        <div className="px-3 pb-16 pt-3 sm:px-4 md:px-6">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6 sm:p-8">
            <p className="section-kicker">404</p>
            <h1 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">페이지를 찾을 수 없습니다.</h1>
            <Link to="/" className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-700 px-5 py-3 text-sm text-slate-200"><ArrowLeft size={15} /> 홈으로 돌아가기</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-enter min-h-screen bg-[#050505] text-slate-100">
      <PublicHeader isChromeHidden={isChromeHidden} />

      <main>
        <section className="px-3 pt-3 sm:px-4 md:px-6 md:pt-6">
          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-2xl md:rounded-[2rem]">
            <div className="relative min-h-[560px] sm:min-h-[620px] md:min-h-[720px]">
              <img src={detail.image} alt={detail.title} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.15),rgba(0,0,0,.38)_42%,rgba(0,0,0,.97))]" />
              <div className="absolute left-0 right-0 top-0 p-4 sm:p-6 md:p-8">
                <div className="flex flex-wrap gap-2">
                  <span className="status-pill">{detail.status ?? detail.label}</span>
                  <span className="status-pill">{detail.label}</span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 md:p-10 lg:p-12">
                <div className="max-w-5xl">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">SE3C · 2026</p>
                  <h1 className="mt-3 text-4xl font-semibold leading-[1] tracking-[-0.04em] text-white sm:text-5xl md:text-7xl">{detail.title}</h1>
                  <p className="mt-5 max-w-4xl text-sm leading-7 text-slate-200 sm:text-base md:text-lg md:leading-8">{detail.summary}</p>
                  {detail.tags && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {detail.tags.map((tag) => <span key={tag} className="tag-pill">{tag}</span>)}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-3 py-5 sm:px-4 md:px-6 md:py-10">
          <div className="grid gap-5 lg:grid-cols-[1.45fr_.65fr] lg:gap-6">
            <div className="space-y-5">
              <article className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 sm:p-7 md:rounded-[2rem] md:p-9">
                <p className="section-kicker">프로젝트 개요</p>
                <div className="mt-5 space-y-5">
                  {detail.body.map((paragraph) => (
                    <p key={paragraph} className="text-sm leading-7 text-slate-300 md:text-base md:leading-8">{paragraph}</p>
                  ))}
                </div>
              </article>

              {detail.video && (
                <section className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/70 md:rounded-[2rem]">
                  <div className="p-5 pb-4 sm:p-7 sm:pb-5">
                    <p className="section-kicker">학습 결과 영상</p>
                    <h2 className="mt-2 text-2xl font-semibold text-white">H1 학습 결과</h2>
                  </div>
                  <video className="aspect-video w-full bg-black object-contain" controls playsInline preload="metadata" poster={detail.video.poster}>
                    <source src={detail.video.src} type="video/mp4" />
                    브라우저가 MP4 영상을 지원하지 않습니다.
                  </video>
                  <p className="px-5 py-4 text-xs leading-5 text-slate-500 sm:px-7">{detail.video.caption}</p>
                </section>
              )}

              {detail.gallery && detail.gallery.length > 0 && (
                <section className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 sm:p-7 md:rounded-[2rem] md:p-8">
                  <p className="section-kicker">제작 기록</p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">프로젝트 갤러리</h2>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    {detail.gallery.map((item) => (
                      <figure key={item.src} className="overflow-hidden rounded-2xl border border-slate-800 bg-black/30">
                        <img src={item.src} alt={item.alt} className="aspect-[4/3] w-full object-cover" loading="lazy" />
                        {item.caption && <figcaption className="p-4 text-xs leading-5 text-slate-400">{item.caption}</figcaption>}
                      </figure>
                    ))}
                  </div>
                </section>
              )}
            </div>

            <aside className="space-y-5">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 sm:p-6 md:rounded-[2rem]">
                <p className="section-kicker">핵심 정보</p>
                <div className="mt-4 space-y-3">
                  {detail.metrics.map((metric) => <div key={metric} className="rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-sm leading-6 text-slate-200">{metric}</div>)}
                </div>
              </div>

              {detail.category === "tech" && (
                <a href="https://github.com/SE3C" target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/70 p-5 transition hover:border-slate-600 md:rounded-[2rem]">
                  <div><p className="section-kicker">공개 자료</p><p className="mt-2 text-base font-medium text-white">SE3C GitHub</p></div><Github size={20} />
                </a>
              )}

              {related.length > 0 && (
                <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 sm:p-6 md:rounded-[2rem]">
                  <p className="section-kicker">관련 프로젝트</p>
                  <div className="mt-4 space-y-3">
                    {related.map((item) => (
                      <Link key={item.id} to={getDetailPath(item)} className="group block rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-4 transition hover:border-slate-600">
                        <div className="flex items-start justify-between gap-4"><div><p className="text-[10px] uppercase tracking-[0.16em] text-slate-500">{item.label}</p><p className="mt-2 text-base font-medium text-white">{item.title}</p></div><ArrowRight size={15} className="mt-1 text-slate-500 transition group-hover:translate-x-1 group-hover:text-white" /></div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}
