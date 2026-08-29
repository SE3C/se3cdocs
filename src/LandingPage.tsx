import { ArrowDown, ArrowRight, Github } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import heroImage from "./assets/expo-booth.jpg";
import cubesatImage from "./assets/2026/cubesat-integration.webp";
import rocketImage from "./assets/2026/rocket-workbench.webp";
import ncrcPosterImage from "./assets/2026/ncrc-h1-poster.webp";
import fabricationImage from "./assets/nozzle-model.jpg";
import PublicHeader from "./PublicHeader";
import PublicFooter from "./PublicFooter";
import useHideChromeOnScroll from "./useHideChromeOnScroll";

type ProjectSectionProps = { index: string; eyebrow: string; title: string; description: string; to: string; image: string; align?: "left" | "right"; video?: string; muted?: boolean };

const milestones = [
  ["03", "TEAM FORMATION", "프로젝트 중심의 역할과 기록 체계를 구성했습니다."],
  ["06", "HARDWARE INTEGRATION", "센서 벤치와 CubeSat 구조 프로토타입을 통합했습니다."],
  ["08", "ROBOTICS BASELINE", "Isaac Lab 기반 H1 강화학습 검증 흐름을 구축했습니다."],
  ["NEXT", "PROTOTYPE & FLIGHT", "디지털 제작과 허가 기반 고고도 비행시험을 준비합니다."],
];

function ProjectSection({ index, eyebrow, title, description, to, image, align = "left", video, muted = false }: ProjectSectionProps) {
  return <section className="project-panel">
    {video ? <video className="project-media" autoPlay muted loop playsInline preload="metadata" poster={image}><source src={video} type="video/mp4" /></video> : <img src={image} alt="" className="project-media" loading="lazy" />}
    <div className={`project-overlay ${muted ? "project-overlay-heavy" : ""}`} />
    <div className={`project-copy ${align === "right" ? "project-copy-right" : ""}`}>
      <p className="project-index">{index}</p><p className="eyebrow">{eyebrow}</p><h2>{title}</h2><p className="project-description">{description}</p>
      <Link to={to} className="outline-cta">프로젝트 보기 <ArrowRight size={16} /></Link>
    </div>
  </section>;
}

export default function LandingPage() {
  const isChromeHidden = useHideChromeOnScroll();
  const location = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "auto" }); }, [location.pathname]);

  return <div className="bg-black text-white">
    <PublicHeader isChromeHidden={isChromeHidden} />
    <main>
      <section className="mission-hero">
        <img src={heroImage} alt="SE3C 제작 활동" className="project-media" /><div className="mission-hero-overlay" />
        <div className="mission-hero-copy"><p className="eyebrow">SE3C · SPACE EXPLORATION ENGINEERING EXPERIMENTAL CLUB</p><h1>Turning Ideas<br />Into Real<br />Projects.</h1><p>설계하고, 만들고, 시험하고, 기록합니다.<br />SE3C는 공학의 다음 단계를 직접 검증합니다.</p></div>
        <a href="#mission" aria-label="미션으로 이동" className="scroll-cue"><ArrowDown size={22} /></a>
      </section>
      <section id="mission" className="mission-statement">
        <div className="mission-statement-copy"><p className="eyebrow">OUR MISSION</p><h2>다음 실험은<br />이전 기록에서 시작됩니다.</h2><p>SE3C는 기구·회로·소프트웨어·운영을 하나의 검증 과정으로 연결합니다. 결과물뿐 아니라 설정, 실패와 다음 변경점을 남겨 프로젝트가 다음 사람에게도 이어지게 만듭니다.</p><Link to="/credibility" className="outline-cta">활동 기록 보기 <ArrowRight size={16} /></Link></div>
        <dl className="mission-stats" aria-label="SE3C 2026 활동 지표"><div><dt>03</dt><dd>ACTIVE<br />PROJECT TRACKS</dd></div><div><dt>04</dt><dd>ENGINEERING<br />DISCIPLINES</dd></div><div><dt>2026</dt><dd>PUBLIC<br />ENGINEERING LOG</dd></div></dl>
      </section>
      <div id="projects">
        <ProjectSection index="01" eyebrow="CUBESAT SYSTEM · ACTIVE" title="작은 위성을 직접 만들다." description="Raspberry Pi 기반 온보드 컴퓨터와 센서 시스템을 통합하고, 실제 비행 데이터를 수집하기 위한 위성 프로토타입을 개발하고 있습니다." to="/tech/cubesat" image={cubesatImage} />
        <ProjectSection index="02" eyebrow="ROCKET ENGINEERING · ACTIVE" title="설계에서 시험까지." description="기체 구조, 추진, 회수와 제작 과정을 직접 다루며 반복적인 실험을 통해 로켓 시스템을 개선합니다." to="/tech/rocket" image={rocketImage} align="right" />
        <ProjectSection index="03" eyebrow="ROBOTICS · AI · ACTIVE" title="휴머노이드에게 걷는 법을 학습시키다." description="NCRC 2026을 준비하며 NVIDIA Isaac Sim / Isaac Lab 환경에서 Unitree H1 휴머노이드의 강화학습과 실험 재현성을 연구하고 있습니다." to="/tech/robotics-ai" image={ncrcPosterImage} video="/media/ncrc-h1-play.mp4" />
        <ProjectSection index="04" eyebrow="DIGITAL FABRICATION · UPCOMING" title="설계한 부품을 바로 현실로." description="3D 프린터 도입 후 위성·로켓 프로젝트용 구조 부품, 센서 마운트와 실험 지그를 직접 설계하고 제작할 예정입니다." to="/tech/fabrication" image={fabricationImage} align="right" muted />
      </div>
      <section className="engineering-log"><div className="engineering-log-heading"><p className="eyebrow">2026 ENGINEERING LOG</p><h2>만든 것, 시험한 것,<br />그리고 다음 단계.</h2></div><ol className="milestone-list">{milestones.map(([date, title, description]) => <li key={title}><p>{date}</p><div><h3>{title}</h3><span>{description}</span></div></li>)}</ol><div className="engineering-log-actions"><Link to="/tech" className="outline-cta">전체 프로젝트 보기 <ArrowRight size={16} /></Link><a href="https://github.com/SE3C" target="_blank" rel="noreferrer" className="text-cta"><Github size={17} /> GitHub에서 보기</a></div></section>
    </main>
    <PublicFooter />
  </div>;
}
