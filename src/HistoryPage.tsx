import { ArrowRight, ArrowUpRight, Archive, Github } from "lucide-react";
import { Link } from "react-router-dom";
import PublicHeader from "./PublicHeader";
import PublicFooter from "./PublicFooter";
import { useDocumentMeta } from "./useDocumentMeta";

const origin = "https://github.com/StudentsView/SE3C";
const revision = "d7800445ca9cd47496fff52b37dc8a5b9751a2eb";
const legacy = "/legacy/2025/index.html";

const activities = [
  {
    date: "2025.05",
    type: "당시 홈페이지 기록",
    title: "최초 헬륨 발사 테스트",
    description: "2025년 홈페이지에는 위성팀·프로그래밍팀의 최초 발사 테스트, 장비 미탑재, 헬륨 66L 사용이 기록되어 있습니다. 탑재체 비행 성과로 해석하지 않습니다.",
    source: `${origin}/blob/${revision}/index.html`,
  },
  {
    date: "2025.05",
    type: "당시 홈페이지 기록",
    title: "로켓팀의 첫 소규모 연소 실험",
    description: "로켓팀의 첫 연소 실험이 기록되어 있습니다. 여기서는 당시 진행 사실만 소개하며 성능·안전 검증이 완료되었다고 주장하지 않습니다.",
    source: `${origin}/blob/${revision}/index.html`,
  },
  {
    date: "2025.09",
    type: "기존 공개 활동",
    title: "Swift · AI 앱 개발 실습",
    description: "Swift와 AI 활용 iOS 앱 프로그래밍을 함께 실습한 교육 활동입니다. 앱 출시 실적으로 표기하지 않습니다.",
    source: "/outreach",
  },
  {
    date: "2025.11",
    type: "기존 공개 활동",
    title: "송파교육박람회 과학 체험",
    description: "우주탐사차량·우주정거장 모형 만들기 체험 부스를 운영한 기록입니다.",
    source: "/outreach",
  },
];

export default function HistoryPage() {
  useDocumentMeta("2025 활동과 웹사이트 아카이브", "SE3C 선배 운영진의 2025년 활동과 원본 홈페이지를 보존한 기록입니다.");
  return <div className="min-h-screen bg-[#050505] text-white">
    <PublicHeader />
    <main>
      <section className="border-b border-white/15 bg-[radial-gradient(ellipse_at_80%_30%,#252525_0%,#050505_65%)]">
        <div className="mx-auto max-w-[1500px] px-6 pb-20 pt-40 sm:px-8 md:pb-28 lg:px-10">
          <p className="eyebrow">SE3C · LEGACY ARCHIVE · 2025</p>
          <h1 className="mt-7 text-5xl font-semibold leading-[.94] tracking-[-.06em] sm:text-7xl lg:text-8xl">2025년의 기록,<br />다음 기수의 시작.</h1>
          <p className="mt-8 max-w-3xl text-sm leading-8 text-white/65 sm:text-lg">선배 운영진이 만든 웹사이트와 당시 프로젝트 기록을 보존합니다. 당시 실험, 계획과 2026년의 최신 활동은 서로 구분해 소개합니다.</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={legacy} className="inline-flex items-center gap-2 border border-white bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/85">2025년 원본 사이트 보기 <ArrowUpRight size={17} /></a>
            <a href={origin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-white/35 px-5 py-3 text-sm font-medium hover:border-white"><Github size={17} /> 원본 GitHub 저장소</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-6 py-20 sm:px-8 lg:px-10">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div><p className="eyebrow">2025 ACTIVITY LOG</p><h2 className="mt-4 text-3xl font-semibold tracking-[-.04em] md:text-5xl">당시의 활동과 실험</h2></div>
          <p className="max-w-md text-sm leading-7 text-white/50">기록의 출처와 확실성을 구분합니다. 초기 발사 및 연소 실험의 상세 결과는 추가 검증 전까지 확대 해석하지 않습니다.</p>
        </div>
        <ol className="border-t border-white/20">
          {activities.map((item) => <li key={item.date + item.title} className="grid gap-5 border-b border-white/20 py-8 md:grid-cols-[130px_minmax(0,1fr)_80px] md:gap-10">
            <time className="text-sm font-medium tracking-widest text-white/50">{item.date}</time>
            <div><p className="text-xs uppercase tracking-widest text-white/45">{item.type}</p><h3 className="mt-3 text-2xl font-semibold tracking-tight">{item.title}</h3><p className="mt-4 max-w-3xl text-sm leading-7 text-white/65">{item.description}</p></div>
            {item.source.startsWith("/") ? <Link to={item.source} className="inline-flex h-fit items-center gap-1 text-sm underline underline-offset-4">기록 <ArrowRight size={14}/></Link> : <a href={item.source} target="_blank" rel="noopener noreferrer" className="inline-flex h-fit items-center gap-1 text-sm underline underline-offset-4">출처 <ArrowUpRight size={14}/></a>}
          </li>)}
        </ol>
      </section>

      <section className="border-t border-white/15 bg-[#101010]">
        <div className="mx-auto grid max-w-[1500px] gap-10 px-6 py-20 sm:px-8 md:grid-cols-[1fr_1fr] lg:px-10">
          <div><p className="eyebrow">ORIGINAL WEBSITE · 2025</p><h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">옛 웹사이트를<br />그 모습 그대로.</h2><p className="mt-5 max-w-xl text-sm leading-8 text-white/60">당시 소개·모집·커리큘럼과 홍보 페이지를 보존했습니다. CSS와 모바일 표시 오류를 수정하고 운영이 끝난 지원 링크는 현재 사이트로 연결했습니다.</p></div>
          <div className="flex flex-col gap-3">
            {[["2025 홈페이지", "index.html"], ["동아리 소개", "falcon9.html"], ["당시 모집 안내", "falcon-heavy.html"], ["당시 커리큘럼", "dragon.html"], ["홍보 포스터", "poster.html"], ["홍보자료", "test.html"]].map(([title, page]) => (
              <a key={page} href={`/legacy/2025/${page}`} className="flex items-center justify-between border-b border-white/20 px-1 py-4 text-sm font-medium transition hover:text-white/65"><span>{title}</span><ArrowUpRight size={17}/></a>
            ))}
            <p className="mt-3 flex items-start gap-2 text-xs leading-6 text-white/45"><Archive size={15} className="mt-1 shrink-0"/>이미지·영상은 원본 GitHub의 고정 커밋을 참조하며 외부 자료는 원본 제공처에 의존합니다.</p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1500px] px-6 py-16 sm:px-8 lg:px-10"><Link to="/projects" className="inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-8">2026 프로젝트 이어서 보기 <ArrowRight size={17}/></Link></section>
    </main><PublicFooter />
  </div>;
}
