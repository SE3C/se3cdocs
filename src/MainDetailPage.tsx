import { useEffect } from "react";
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
          <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 sm:p-8">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Page</p>
            <h1 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">페이지를 찾을 수 없습니다.</h1>
            <Link to="/" className="mt-6 inline-flex rounded-full border border-slate-700 px-5 py-3 text-sm text-slate-200">
              홈으로 돌아가기
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-enter min-h-screen bg-[#050505] text-slate-100">
      <PublicHeader isChromeHidden={isChromeHidden} />

      <section className="px-3 pt-3 sm:px-4 md:px-6 md:pt-6">
        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-2xl md:rounded-[2rem]">
          <div className="relative">
            <img src={detail.image} alt={detail.title} className="h-[54vh] min-h-[340px] w-full bg-black object-contain sm:h-[62vh] md:h-[44rem]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/40 to-transparent" />
            <div className="absolute left-0 right-0 top-0 p-4 sm:p-6 md:p-8">
              <div className="inline-flex rounded-full border border-white/10 bg-black/45 px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-slate-200 sm:px-4 sm:py-2 sm:text-xs">
                {detail.label}
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-10">
              <div className="max-w-4xl">
                <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-6xl">{detail.title}</h1>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-200 sm:text-base md:mt-4 md:text-lg md:leading-8">{detail.summary}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-3 py-5 sm:px-4 md:px-6 md:py-14">
        <div className="grid gap-5 md:grid-cols-[1.45fr_0.75fr] md:gap-8">
          <div className="space-y-5 md:space-y-8">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 sm:p-6 md:rounded-[2rem] md:p-8">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">소개</p>
              <div className="mt-4 space-y-4 md:mt-5 md:space-y-5">
                {detail.body.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-7 text-slate-300 md:text-base md:leading-8">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

          </div>

          <div className="space-y-5 md:space-y-8">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 sm:p-6 md:rounded-[2rem] md:p-8">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">핵심 포인트</p>
              <div className="mt-4 space-y-3">
                {detail.metrics.map((metric) => (
                  <div key={metric} className="rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-sm text-slate-200 sm:rounded-2xl">
                    {metric}
                  </div>
                ))}
              </div>
            </div>

            {related.length > 0 && (
              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 sm:p-6 md:rounded-[2rem] md:p-8">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">함께 볼 내용</p>
                <div className="mt-4 space-y-3">
                  {related.map((item) => (
                    <Link
                      key={item.id}
                      to={getDetailPath(item)}
                      className="block rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-4 transition-all duration-300 hover:border-slate-600 sm:rounded-2xl"
                    >
                      <p className="text-xs uppercase tracking-[0.16em] text-slate-500">{item.label}</p>
                      <p className="mt-2 text-base font-medium text-white">{item.title}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{item.summary}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <PublicFooter />
    </div>
  );
}
