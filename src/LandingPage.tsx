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

type ProjectSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  to: string;
  image: string;
  align?: "left" | "right";
  video?: string;
  muted?: boolean;
};

function ProjectSection({ eyebrow, title, description, to, image, align = "left", video, muted = false }: ProjectSectionProps) {
  return (
    <section className="project-panel">
      {video ? (
        <video className="project-media" autoPlay muted loop playsInline preload="metadata" poster={image}>
          <source src={video} type="video/mp4" />
        </video>
      ) : (
        <img src={image} alt="" className="project-media" loading="lazy" />
      )}
      <div className={`project-overlay ${muted ? "project-overlay-heavy" : ""}`} />
      <div className={`project-copy ${align === "right" ? "project-copy-right" : ""}`}>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p className="project-description">{description}</p>
        <Link to={to} className="outline-cta">자세히 보기 <ArrowRight size={16} /></Link>
      </div>
    </section>
  );
}

export default function LandingPage() {
  const isChromeHidden = useHideChromeOnScroll();
  const location = useLocation();

  useEffect(() => { window.scrollTo({ top: 0, behavior: "auto" }); }, [location.pathname]);

  return (
    <div className="bg-black text-white">
      <PublicHeader isChromeHidden={isChromeHidden} />
      <main>
        <section className="hero-panel">
          <img src={heroImage} alt="SE3C 활동" className="project-media" />
          <div className="hero-overlay" />
          <div className="hero-copy">
            <p className="eyebrow">SE3C · 우주탐사공학실험동아리</p>
            <h1>상상하던 걸,<br />실제 프로젝트로 만들다.</h1>
            <p className="hero-description">설계하고, 만들고, 시험하고, 기록합니다.<br className="hidden sm:block" /> 2026년 SE3C의 실제 공학 프로젝트를 소개합니다.</p>
            <Link to="/tech" className="outline-cta">프로젝트 보기 <ArrowRight size={16} /></Link>
          </div>
          <a href="#projects" aria-label="아래로 이동" className="scroll-cue"><ArrowDown size={22} /></a>
        </section>

        <div id="projects">
          <ProjectSection
            eyebrow="2026 PROJECT 01 · 큐브위성"
            title="작은 위성을 직접 만들다."
            description="Raspberry Pi 기반 온보드 컴퓨터와 센서 시스템을 통합하고, 실제 비행 데이터를 수집하기 위한 위성 프로토타입을 개발하고 있습니다."
            to="/tech/cubesat"
            image={cubesatImage}
          />
          <ProjectSection
            eyebrow="2026 PROJECT 02 · 로켓공학"
            title="설계에서 시험까지."
            description="기체 구조, 추진, 회수와 제작 과정을 직접 다루며 반복적인 실험을 통해 로켓 시스템을 개선합니다."
            to="/tech/rocket"
            image={rocketImage}
            align="right"
          />
          <ProjectSection
            eyebrow="2026 PROJECT 03 · 로보틱스·AI"
            title="휴머노이드에게 걷는 법을 학습시키다."
            description="NCRC 2026을 준비하며 NVIDIA Isaac Sim / Isaac Lab 환경에서 Unitree H1 휴머노이드의 강화학습과 실험 재현성을 연구하고 있습니다."
            to="/tech/robotics-ai"
            image={ncrcPosterImage}
            video="/media/ncrc-h1-play.mp4"
          />
          <ProjectSection
            eyebrow="NEXT PROJECT · 3D 프린팅"
            title="설계한 부품을 바로 현실로."
            description="3D 프린터 도입 후 위성·로켓 프로젝트용 구조 부품, 센서 마운트와 실험 지그를 직접 설계하고 제작할 예정입니다."
            to="/tech/fabrication"
            image={fabricationImage}
            align="right"
            muted
          />
          <ProjectSection
            eyebrow="NEXT FLIGHT · 고고도 비행시험"
            title="실험실에서 하늘로."
            description="관련 공역과 비행 허가 절차를 거친 뒤 웨더벌룬에 위성 프로토타입을 탑재해 실제 고고도 환경에서 telemetry를 수집하고 검증할 예정입니다."
            to="/tech/high-altitude-flight"
            image={cubesatImage}
            muted
          />
        </div>

        <section className="closing-panel">
          <div className="mx-auto w-full max-w-[1500px] px-6 py-24 sm:px-8 md:py-32 lg:px-10">
            <p className="eyebrow">2026 ENGINEERING LOG</p>
            <h2 className="closing-title">결과보다 과정을 남깁니다.</h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/65">센서 벤치 테스트, 기체 통합, 강화학습 로그와 checkpoint, 제작 사진과 실패 기록까지. 다음 실험이 이전 실험에서 시작될 수 있도록 기록합니다.</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/credibility" className="outline-cta">활동 기록 보기 <ArrowRight size={16} /></Link>
              <a href="https://github.com/SE3C" target="_blank" rel="noreferrer" className="text-cta"><Github size={17} /> GitHub에서 보기</a>
            </div>
          </div>
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}
