import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import heroImage from "./assets/expo-booth.jpg";
import satelliteImage from "./assets/satellite-prototype.jpeg";
import nozzleImage from "./assets/nozzle-model.jpg";
import teamPhoto from "./assets/team-photo.jpeg";
import { detailPages, getDetailPath } from "./siteDetails";
import PublicHeader from "./PublicHeader";
import PublicFooter from "./PublicFooter";
import useHideChromeOnScroll from "./useHideChromeOnScroll";

const techDetails = detailPages.filter((detail) => detail.category === "tech");
const overviewDetails = detailPages.filter((detail) => ["team", "roadmap", "credibility"].includes(detail.id));
const operationsDetails = detailPages.filter((detail) => ["budget", "records", "links", "members"].includes(detail.id));

export default function LandingPage() {
  const isChromeHidden = useHideChromeOnScroll();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <div className="page-enter relative min-h-screen bg-[#050505] text-slate-100">
      <PublicHeader isChromeHidden={isChromeHidden} />

      <main className="w-full px-3 pb-8 pt-3 sm:px-4 md:px-6 md:pb-10 md:pt-6">
        <section id="mission" className="mb-4 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/50 md:mb-8 md:rounded-3xl">
          <div className="relative">
            <img src={heroImage} alt="SE3C activity" className="h-[46vh] min-h-[320px] w-full bg-black object-contain sm:h-[54vh] md:h-[76vh]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 md:p-10">
              <p className="text-[10px] uppercase tracking-[0.16em] text-slate-300 sm:text-xs">BOIN HIGH SCHOOL ADVANCED SPACE TECH CLUB</p>
              <h1 className="mt-2 max-w-5xl text-2xl font-semibold leading-tight text-white sm:mt-3 sm:text-3xl md:text-5xl">
                상상하던 것을 실제 구조와 기록으로 남기는 보인고 우주공학 동아리, SE3C
              </h1>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-200 md:mt-4 md:text-base md:leading-7">
                <span className="font-semibold text-white">SE3C</span>는 <span className="font-semibold text-white">Space Exploration Engineering Experimental Club</span>의 약자입니다.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 p-3 sm:p-4 md:grid-cols-4 md:gap-4 md:p-10">
            <Link to="/budget" className="rounded-2xl border border-slate-800 bg-black/30 p-4 transition-all duration-300 hover:border-slate-600">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Budget</p>
              <p className="mt-3 text-2xl font-semibold text-white">2.82M KRW</p>
              <p className="mt-2 text-sm text-slate-300">예산 확보 전략과 외부 공모 탐색</p>
            </Link>
            <Link to="/members" className="rounded-2xl border border-slate-800 bg-black/30 p-4 transition-all duration-300 hover:border-slate-600">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Members</p>
              <p className="mt-3 text-2xl font-semibold text-white">30</p>
              <p className="mt-2 text-sm text-slate-300">역할 기반 인원 구성과 파트 배치</p>
            </Link>
            <Link to="/team" className="rounded-2xl border border-slate-800 bg-black/30 p-4 transition-all duration-300 hover:border-slate-600">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Teams</p>
              <p className="mt-3 text-2xl font-semibold text-white">4</p>
              <p className="mt-2 text-sm text-slate-300">운영, 하드웨어, 통신, 소프트웨어</p>
            </Link>
            <Link to="/roadmap" className="rounded-2xl border border-slate-800 bg-black/30 p-4 transition-all duration-300 hover:border-slate-600">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Target</p>
              <p className="mt-3 text-2xl font-semibold text-white">Q4 2026</p>
              <p className="mt-2 text-sm text-slate-300">검증 가능한 결과물과 발표 단계</p>
            </Link>
          </div>
        </section>

        <section id="tech" className="mb-6 rounded-3xl border border-slate-800 bg-slate-950/50 p-6 md:p-8">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Tech</p>
              <h2 className="mt-2 text-xl font-semibold md:text-2xl">핵심 기술 영역</h2>
            </div>
            <Link to="/tech" className="text-sm tracking-[0.14em] text-slate-300 transition hover:text-white">
              자세히 보기
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {techDetails.map((detail) => (
              <Link
                key={detail.id}
                to={getDetailPath(detail)}
                className="group overflow-hidden rounded-2xl border border-slate-800 bg-black/30 transition-all duration-300 hover:border-slate-600"
              >
                <div className="relative">
                  <img src={detail.image} alt={detail.title} className="h-56 w-full bg-black object-contain" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-300">{detail.label}</p>
                    <p className="mt-2 text-xl font-medium text-white">{detail.title}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Link to="/tech/satellite" className="overflow-hidden rounded-2xl border border-slate-800 bg-black/30 transition-all duration-300 hover:border-slate-600">
              <img src={satelliteImage} alt="SE3C satellite prototype" className="h-64 w-full bg-black object-contain" />
              <div className="p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Prototype</p>
                <p className="mt-2 text-base font-medium text-white">
                  센서 수집, 전송, 확인 흐름을 실제로 이어 붙이는 위성 통신 프로토타입 트랙입니다.
                </p>
              </div>
            </Link>
            <Link to="/tech/propulsion" className="overflow-hidden rounded-2xl border border-slate-800 bg-black/30 transition-all duration-300 hover:border-slate-600">
              <img src={nozzleImage} alt="SE3C nozzle modeling" className="h-64 w-full bg-black object-contain" />
              <div className="p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Research</p>
                <p className="mt-2 text-base font-medium text-white">
                  노즐 구조, 연료 배합, 열 대응, 실패 기록까지 모두 포함하는 추진체 연구 트랙입니다.
                </p>
              </div>
            </Link>
          </div>
        </section>

        <section id="overview" className="mb-6 rounded-3xl border border-slate-800 bg-slate-950/50 p-6 md:p-8">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Team / Mission</p>
              <h2 className="mt-2 text-xl font-semibold md:text-2xl">조직 구조와 연간 운영 방향</h2>
            </div>
            <Link to="/team" className="text-sm tracking-[0.14em] text-slate-300 transition hover:text-white">
              자세히 보기
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {overviewDetails.map((detail) => (
              <Link
                key={detail.id}
                to={getDetailPath(detail)}
                className="group overflow-hidden rounded-2xl border border-slate-800 bg-black/30 transition-all duration-300 hover:border-slate-600"
              >
                <div className="relative">
                  <img src={detail.image} alt={detail.title} className="h-64 w-full bg-black object-contain" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-300">{detail.label}</p>
                    <p className="mt-2 text-2xl font-medium text-white">{detail.title}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Link to="/budget" className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-4 transition-all duration-300 hover:border-slate-600">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Budget</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">교내 지원과 외부 기회를 함께 살피는 활동 예산 계획</p>
            </Link>
            <Link to="/records" className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-4 transition-all duration-300 hover:border-slate-600">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Activity Logs</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">실험 결과, 실패 원인, 다음 계획까지 이어지는 기록 구조</p>
            </Link>
            <Link to="/links" className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-4 transition-all duration-300 hover:border-slate-600">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Resources</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">자료, 계정, 홍보물을 함께 정리해 이어지는 협업 기반</p>
            </Link>
          </div>
        </section>

        <section id="operations" className="mb-6 rounded-3xl border border-slate-800 bg-slate-950/50 p-6 md:p-8">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Operations</p>
              <h2 className="mt-2 text-xl font-semibold md:text-2xl">활동을 이어 가는 운영 기반</h2>
            </div>
            <Link to="/operations" className="text-sm tracking-[0.14em] text-slate-300 transition hover:text-white">
              자세히 보기
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {operationsDetails.map((detail) => (
              <Link
                key={detail.id}
                to={getDetailPath(detail)}
                className="group rounded-2xl border border-slate-800 bg-black/30 p-5 transition-all duration-300 hover:border-slate-600"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{detail.label}</p>
                <h3 className="mt-3 text-xl font-medium text-white">{detail.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{detail.summary}</p>
              </Link>
            ))}
          </div>
        </section>

        <section id="contact" className="rounded-3xl border border-slate-800 bg-slate-950/50 p-6 md:p-8">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Contact</p>
              <h2 className="mt-2 text-xl font-semibold md:text-2xl">협업과 문의</h2>
            </div>
            <Link to="/credibility" className="text-sm tracking-[0.14em] text-slate-300 transition hover:text-white">
              자세히 보기
            </Link>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-black/30">
            <img src={teamPhoto} alt="SE3C team photo" className="h-72 w-full bg-black object-contain" />
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Link to="/links" className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-4 transition-all duration-300 hover:border-slate-600">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Email / Tools</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">공용 계정과 운영 링크를 정리한 페이지입니다.</p>
            </Link>
            <Link to="/records" className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-4 transition-all duration-300 hover:border-slate-600">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Focus</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">기술 실험, 체험 운영, 기록 누적, 발표 자료 정리</p>
            </Link>
            <Link to="/members" className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-4 transition-all duration-300 hover:border-slate-600">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">People</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">파트별 역할과 학생 참여 구조를 기반으로 팀 운영</p>
            </Link>
          </div>
        </section>
      </main>

      <PublicFooter />
    </div>
  );
}
