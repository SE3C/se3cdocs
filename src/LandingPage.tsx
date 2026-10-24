import { ArrowDown, ArrowRight, Github } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import heroImage from "./assets/expo-booth.jpg";
import cubesatImage from "./assets/2026/cubesat-integration.webp";
import rocketImage from "./assets/2026/rocket-workbench.webp";
import ncrcPosterImage from "./assets/2026/ncrc-h1-poster.webp";
import fabricationImage from "./assets/nozzle-model.jpg";
import softwareCodeImage from "./assets/2026/status-led-buzzer-code-review-2.jpg";
import PublicHeader from "./PublicHeader";
import PublicFooter from "./PublicFooter";
import useHideChromeOnScroll from "./useHideChromeOnScroll";

type ProjectSectionProps = { index: string; eyebrow: string; title: string; description: string; to: string; image: string; align?: "left" | "right"; video?: string; muted?: boolean };

const milestones = [
  ["2025", "SPACE OUTREACH", "송파교육박람회에서 우주탐사 체험 부스를 운영했습니다."],
  ["03", "TEAM FORMATION", "프로젝트 중심의 역할과 기록 체계를 구성했습니다."],
  ["06", "STRUCTURE & CAD", "큐브형 구조 시제품과 로켓 노즐 CAD 모델링을 기록했습니다."],
  ["08", "H1 BASELINE", "Isaac Lab 기반 H1 학습·export·play 검증 흐름을 구축했습니다."],
  ["10", "CUBESAT · ESP32", "온보드 제어 시스템을 ESP32 중심으로 재설계하고 있습니다."],
  ["10", "C++ CODE REVIEW", "위성 상태 표시 LED·부저 모듈의 C++ 코드 구조를 검토했습니다."],
  ["10", "NCRC · H1 & GO2", "Go2 공식 평가 기록을 확보하고 H1 예선 6라운드 정책을 제출했습니다."],
  ["10", "RESEARCH PUBLICATION", "H1·Go2 연구 자료와 자체 평가 도구·영상을 선별 공개했습니다."],
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
        <div className="mission-hero-copy"><p className="eyebrow">SE3C · SPACE EXPLORATION ENGINEERING EXPERIMENTAL CLUB</p><h1>상상하던 걸,<br />실제 프로젝트로<br />만들다.</h1><p>설계하고, 만들고, 시험하고, 기록합니다.<br />SE3C는 공학의 다음 단계를 직접 검증합니다.</p></div>
        <a href="#mission" aria-label="미션으로 이동" className="scroll-cue"><ArrowDown size={22} /></a>
      </section>
      <section id="mission" className="mission-statement">
        <div className="mission-statement-copy"><p className="eyebrow">OUR MISSION</p><h2>다음 실험은<br />이전 기록에서 시작됩니다.</h2><p>SE3C는 기구·회로·소프트웨어·운영을 하나의 검증 과정으로 연결합니다. 결과물과 실험 조건, 검증 데이터, 후속 성과를 함께 남겨 프로젝트가 다음 사람에게도 이어지게 만듭니다.</p><Link to="/tests" className="outline-cta">검증 기록 보기 <ArrowRight size={16} /></Link></div>
        <dl className="mission-stats" aria-label="SE3C 2026 활동 지표"><div><dt>03</dt><dd>ACTIVE<br />PROJECT TRACKS</dd></div><div><dt>04</dt><dd>ENGINEERING<br />DISCIPLINES</dd></div><div><dt>2026</dt><dd>PUBLIC<br />ENGINEERING LOG</dd></div></dl>
      </section>
      <div id="projects">
        <ProjectSection index="01" eyebrow="CUBESAT SYSTEM · ACTIVE" title="작은 위성을 직접 만들다." description="초기 큐브형 구조 시제품을 제작한 경험을 바탕으로 ESP32 중심의 소형 위성 제어 시스템을 개발하고 있습니다." to="/tech/cubesat" image={cubesatImage} />
        <ProjectSection index="02" eyebrow="ROCKET ENGINEERING · ACTIVE" title="설계에서 시험까지." description="기체 구조, 추진, 회수와 제작 과정을 직접 다루며 반복적인 실험을 통해 로켓 시스템을 개선합니다." to="/tech/rocket" image={rocketImage} align="right" />
        <ProjectSection index="03" eyebrow="ROBOTICS · AI · ACTIVE" title="휴머노이드에게 걷는 법을 학습시키다." description="Isaac Sim / Isaac Lab으로 H1·Go2 보행 정책을 연구했습니다. Go2 예선 5라운드 88.32점의 공식 평가 기록과 H1 예선 6라운드 제출 기록을 공개합니다." to="/tech/robotics-ai" image={ncrcPosterImage} video="/media/ncrc-h1-play.mp4" />
        <ProjectSection index="04" eyebrow="CAD & STRUCTURAL DESIGN · RESEARCH" title="설계 아이디어를 3D 형태로." description="로켓 노즐 CAD 모델링과 위성 구조 스케치·목업 제작으로 공학 설계를 시각화하고 검토했습니다." to="/tech/fabrication" image={fabricationImage} align="right" />
        <ProjectSection index="05" eyebrow="EMBEDDED SOFTWARE · ACTIVE" title="하드웨어의 상태를 코드로 표현하다." description="2026년 10월, LED·부저 상태 표시 모듈의 C++ 헤더와 구현 구조를 검토했습니다. 코드 작업 현장을 사진으로 기록했습니다." to="/tech/software" image={softwareCodeImage} />
        <ProjectSection index="06" eyebrow="SPACE EDUCATION · OUTREACH" title="우주공학을 함께 체험하다." description="2025년 송파교육박람회에서 우주탐사차량과 우주정거장 만들기 체험 부스를 운영했습니다." to="/outreach" image={heroImage} align="right" />
      </div>
      <section className="engineering-log"><div className="engineering-log-heading"><p className="eyebrow">2025–2026 ENGINEERING LOG</p><h2>만든 것, 시험한 것,<br />그리고 다음 단계.</h2></div><ol className="milestone-list">{milestones.map(([date, title, description]) => <li key={title}><p>{date}</p><div><h3>{title}</h3><span>{description}</span></div></li>)}</ol><div className="engineering-log-actions"><Link to="/projects" className="outline-cta">전체 프로젝트 보기 <ArrowRight size={16} /></Link><a href="https://github.com/SE3C" target="_blank" rel="noreferrer" className="text-cta"><Github size={17} /> GitHub에서 보기</a></div></section>
    </main>
    <PublicFooter />
  </div>;
}
