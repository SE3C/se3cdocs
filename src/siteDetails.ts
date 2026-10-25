import satelliteInteriorImage from "./assets/drive/satellite-interior.jpeg";
import statusLedBuzzerCode1Image from "./assets/2026/status-led-buzzer-code-review-1.jpg";
import statusLedBuzzerCode2Image from "./assets/2026/status-led-buzzer-code-review-2.jpg";
import ncrcLeaderboardTopImage from "./assets/drive/sat-ncrc-leaderboard-top.png";
import ncrcLeaderboardSe3cImage from "./assets/drive/sat-ncrc-leaderboard-se3c.png";
import expoOfficialPosterImage from "./assets/drive/songpa-expo-official-poster.jpg";
import satelliteSketchImage from "./assets/satellite-sketch.jpeg";
import nozzleModelImage from "./assets/nozzle-model.jpg";
import expoBoothImage from "./assets/expo-booth.jpg";
import expoInteriorImage from "./assets/expo-interior.jpg";
import expoExperienceImage from "./assets/expo-experience.jpg";
import expoGroupImage from "./assets/expo-group.jpg";
import cubesatIntegrationImage from "./assets/2026/cubesat-integration.webp";
import cubesatStructureImage from "./assets/2026/cubesat-structure.webp";
import sensorBenchImage from "./assets/2026/sensor-bench.webp";
import sensorBenchCloseImage from "./assets/2026/sensor-bench-close.webp";
import rocketWorkbenchImage from "./assets/2026/rocket-workbench.webp";
import rocketStandImage from "./assets/2026/rocket-stand.webp";
import piCloseupImage from "./assets/2026/pi-closeup.webp";
import ncrcPosterImage from "./assets/2026/ncrc-h1-poster.webp";

export type DetailStatus = "ACTIVE" | "UPCOMING" | "RESEARCH" | "OPERATIONS";

export type DetailPage = {
  category: "tech" | "general";
  id: string;
  label: string;
  title: string;
  summary: string;
  body: string[];
  metrics: string[];
  image: string;
  status?: DetailStatus;
  tags?: string[];
  gallery?: { src: string; alt: string; caption?: string }[];
  video?: { src: string; poster?: string; title?: string; caption: string };
  videos?: { src: string; poster?: string; title: string; caption: string }[];
  researchMilestones?: { date: string; label: string; title: string; description: string; url: string }[];
  sources?: { title: string; description: string; url: string }[];
};

export const detailPages: DetailPage[] = [
  {
    category: "tech",
    id: "cubesat",
    label: "위성 시스템",
    title: "CubeSat 시스템 개발",
    summary: "큐브형 구조 시제품 제작 경험을 바탕으로 ESP32 중심의 위성 제어 시스템을 개발하는 프로젝트입니다.",
    body: [
      "SE3C는 소형 위성 시스템의 구조와 센서·소프트웨어를 함께 설계하며, 공학 아이디어를 실제 모형과 시험 환경으로 옮기고 있습니다.",
      "2026년 상반기에는 Raspberry Pi 5를 활용한 초기 큐브형 구조 시제품과 ESP32 센서 시험 환경을 마련했습니다. 구조 제작, 장치 배치 검토, 센서 소프트웨어의 모듈화 작업을 진행했습니다.",
      "현재는 온보드 시스템의 설계 방향을 ESP32 중심으로 조정해 개발을 이어가고 있습니다. 공개 페이지에는 프로젝트 개요와 제작 성과를 소개하며, 내부 회로·세부 구성 자료는 포함하지 않습니다.",
      "실제 비행 및 전체 시스템 검증은 준비 중인 후속 단계입니다. 이 페이지에는 확인된 제작 기록과 향후 목표를 구분해 표시합니다.",
    ],
    metrics: ["ESP32-centered system design", "Early structural prototype", "Sensor testing environment", "Cross-team engineering"],
    image: cubesatIntegrationImage,
    status: "ACTIVE",
    tags: ["CUBESAT", "ESP32", "PROTOTYPING", "SYSTEM DESIGN"],
    gallery: [
      { src: cubesatStructureImage, alt: "큐브형 구조 시제품", caption: "상반기 큐브형 구조 시제품 제작 기록" },
      { src: sensorBenchImage, alt: "센서 시험 환경", caption: "초기 센서 시험 환경 구성" },
      { src: piCloseupImage, alt: "초기 온보드 배치", caption: "Raspberry Pi 기반 초기 시제품의 부품 배치 기록" },
      { src: sensorBenchCloseImage, alt: "센서 벤치 확대", caption: "센서 시험을 위한 초기 벤치 작업" },
      { src: satelliteInteriorImage, alt: "과거 CubeSat 초기 내부 구조 모형", caption: "초기 Raspberry Pi 기반 구조 시제품 내부 조립 사진 · 현행 ESP32 시스템과 구분" },
    ],
  },
  {
    category: "tech",
    id: "rocket",
    label: "로켓공학",
    title: "로켓공학",
    summary:
      "구조·노즐·추진·회수·현장 운용을 한 프로젝트 안에서 반복 검증하며 실제 제작 경험을 축적하는 로켓 공학 트랙입니다.",
    body: [
      "SE3C의 로켓 프로젝트는 단발성 발사보다 제작 공정과 반복 가능한 실험 조건을 확보하는 데 초점을 둡니다. 구조 설계, 노즐 형상, 재료 특성, 조립과 현장 운용을 각각 기록하고 다음 실험에 반영합니다.",
      "2026년에는 물로켓 계열 제작과 발사 장비 준비, 구조 부품 가공과 조립 활동을 이어가고 있습니다. 실제 제작 과정에서 필요한 공구, 배관, 체결, 기체 정렬 같은 기초적인 현장 작업도 프로젝트의 일부로 다룹니다.",
      "기존에 축적한 노즐 형상 모델링과 구조 시제품 제작 기록은 로켓 공학 활동을 보여주는 주요 성과입니다. 공개 페이지에서는 설계 결과물의 외형과 제작 과정을 중심으로 소개합니다.",
      "안전과 허가가 필요한 활동은 관련 절차를 우선하며, 공개 페이지에는 실제 검증이 끝난 결과와 진행 중인 계획을 구분해 기록합니다.",
    ],
    metrics: ["Structure & field work", "Nozzle modeling", "Prototype launch hardware", "Repeatable test records"],
    image: rocketWorkbenchImage,
    status: "ACTIVE",
    tags: ["STRUCTURE", "PROPULSION", "RECOVERY", "TEST"],
    gallery: [
      { src: rocketStandImage, alt: "Rocket field hardware", caption: "발사·시험을 위한 현장 장비 준비" },
      { src: nozzleModelImage, alt: "Nozzle model", caption: "기존 노즐 구조 모델링 자산" },
    ],
  },
  {
    category: "tech",
    id: "robotics-ai",
    label: "로보틱스·AI",
    title: "NCRC 2026 · 로봇 강화학습",
    summary:
      "NCRC 2026을 준비하며 NVIDIA Isaac Sim / Isaac Lab에서 Unitree H1 휴머노이드와 Go2 사족보행 로봇의 보행 정책을 학습하고 검증한 기록입니다.",
    body: [
      "2026년 7월부터 로보틱스·강화학습 연구를 새로운 프로젝트 축으로 확장했습니다. Isaac Sim과 Isaac Lab을 활용해 H1과 Go2의 보행 정책, 보상 함수, 체크포인트, 정책 평가와 실험 재현성을 연구했습니다.",
      "8월에는 H1 기준선 실험에서 공식 서버의 4,096개 병렬 환경, seed 42, 300 iteration 조건으로 학습·체크포인트·export·play 파이프라인을 검증했습니다. 이후 장기 학습과 지형별 정책 평가, 데이터 분석으로 연구 범위를 확장했습니다.",
      "Go2의 예선 5라운드 공식 평가 수신 기록(2026-10-08)에는 종합 88.32/100점이 남아 있습니다. 시뮬레이션 58.32/70점, 설계 의도 분석 20/20점, 리포트 품질 10/10점으로 항목별 결과를 보존했습니다.",
      "2026-10-11에는 H1 ACTRATE-0001 정책의 예선 6라운드 제출을 완료했습니다. 공식 서버에서 10,000 iteration 학습한 모델의 keeper checkpoint(model_9999)와 제출 정책의 actor 텐서 8개를 CPU로 대조해 출처를 검증했습니다.",
      "별도 PERSONAL 평가 환경에서는 6개 지형 영상, camera-off scenario7 데이터, 생존·속도 추종·자세·이동 통계를 수집했습니다. 자체 평가 지표는 후보 정책 비교에 활용하며 대회 공식 점수와 구분해 기록합니다.",
      "2026년 10월 23일 기준 선별 공개 보관본에는 H1·Go2 실험 관련 평가 ZIP 33개(영상 132개)와 별도 기술 보고서 6건이 포함돼 있습니다. 총 39개 개별 Release, 출처 검증 기록, 개인 정보 점검 내역은 공개 GitHub에서 확인할 수 있습니다. 전체 학습 자료나 제출 정책을 공개한 것은 아닙니다.",
    ],
    metrics: ["H1 + Go2 · Isaac Lab / PPO", "Go2 R5 · 공식 평가 88.32 / 100", "H1 R6 · 공식 학습 10K / 제출 완료", "39 Releases · 6 reports · 132 videos"],
    image: ncrcPosterImage,
    status: "ACTIVE",
    tags: ["H1", "GO2", "ISAAC LAB", "PPO", "EVALUATION"],
    gallery: [
      { src: ncrcLeaderboardTopImage, alt: "2026 NCRC 예선 TOP 32 화면", caption: "2026년 9월 18일 보존한 NCRC 예선 TOP 32 화면" },
      { src: ncrcLeaderboardSe3cImage, alt: "2026 NCRC 예선 순위의 SE3C 항목", caption: "2026년 9월 18일 화면에 표시된 SE3C 예선 순위 기록 · 해당 시점의 화면" },
    ],
    researchMilestones: [
      {
        date: "2026.08",
        label: "학습 파이프라인",
        title: "H1 공식 서버 기준선 구축",
        description: "4,096개 병렬 환경을 이용해 학습부터 정책 export, play 영상 생성까지의 워크플로를 검증했습니다.",
        url: "https://github.com/SE3C/naver-issacsim-opensource/blob/main/naver-issacsim-originals/data/raw/official_server_runs/h1/2026-08-24_124413_baseline_300iter/README.md",
      },
      {
        date: "2026.10.08",
        label: "대회 공식 평가 기록",
        title: "Go2 · 예선 5라운드 88.32점",
        description: "시뮬레이션 58.32/70, 설계 의도 20/20, 리포트 10/10의 공식 결과 수신 기록을 보존했습니다.",
        url: "https://github.com/SE3C/naver-issacsim-opensource/blob/main/naver-issacsim/data/processed/experiments/go2/analysis/2026-10-08_OFFICIAL_EVAL_GO2_ROUND5_LINTRACK125.md",
      },
      {
        date: "2026.10.11",
        label: "대회 제출 기록",
        title: "H1 · 예선 6라운드 정책 제출",
        description: "ACTRATE-0001 공식 학습 10,000 iteration을 마치고 model_9999 기반 제출 정책의 출처를 CPU에서 대조했습니다.",
        url: "https://github.com/SE3C/naver-issacsim-opensource/blob/main/naver-issacsim/data/processed/experiments/h1/2026-10-11_PRELIM_R6_SUBMISSION/release_notes.md",
      },
      {
        date: "2026.10.23",
        label: "연구 성과 공개",
        title: "H1·Go2 연구 보관본 39건 검증",
        description: "33개 평가 ZIP(영상 132개)과 기술 보고서 6건을 선별 공개했습니다. 총 39개 Release의 출처와 파일 검증 기록을 보존했습니다.",
        url: "https://github.com/SE3C/naver-issacsim-opensource/blob/main/_publication/VERIFICATION.md",
      },
    ],
    sources: [
      { title: "공개 연구·평가 저장소", description: "H1·Go2 분석, 도구, 출처 보존 문서", url: "https://github.com/SE3C/naver-issacsim-opensource" },
      { title: "Go2 5라운드 공식 평가 기록", description: "88.32/100점과 항목별 성적의 출처", url: "https://github.com/SE3C/naver-issacsim-opensource/blob/main/naver-issacsim/data/processed/experiments/go2/analysis/2026-10-08_OFFICIAL_EVAL_GO2_ROUND5_LINTRACK125.md" },
      { title: "H1 6라운드 제출 기록", description: "정책 식별·공식 학습 체크포인트 대응", url: "https://github.com/SE3C/naver-issacsim-opensource/blob/main/naver-issacsim/data/processed/experiments/h1/2026-10-11_PRELIM_R6_SUBMISSION/release_notes.md" },
      { title: "자체 평가 명세", description: "시나리오·추종 오차·정책 비교 계산 기준", url: "https://github.com/SE3C/naver-issacsim-opensource/blob/main/naver-issacsim-eval/SCORING_SPEC.md" },
      { title: "공개 평가 영상 및 데이터", description: "선별된 실험별 GitHub Releases", url: "https://github.com/SE3C/naver-issacsim-opensource/releases" },
    ],
    videos: [
      {
        src: "/media/ncrc-go2-r5.mp4",
        poster: ncrcPosterImage,
        title: "Go2 · NCRC 예선 5라운드 시뮬레이션",
        caption: "Go2 R5 보행 시뮬레이션 녹화 · 20초 · 공식 평가 점수는 별도 근거 문서에 기록되어 있습니다.",
      },
      {
        src: "/media/ncrc-h1-r6.mp4",
        poster: ncrcPosterImage,
        title: "H1 · NCRC 예선 6라운드 시뮬레이션",
        caption: "H1 R6 보행 시뮬레이션 녹화 · 20초 · 제출된 정책의 식별 정보는 별도 제출 문서로 확인합니다.",
      },
    ],
    video: {
      src: "/media/ncrc-h1-play.mp4",
      poster: ncrcPosterImage,
      title: "H1 · 2026년 8월 시뮬레이션 캡처",
      caption: "H1 play · NVIDIA 서버 · 2026.08 기준선 실험 영상 (10월 정책 영상과 별개)",
    },
  },
  {
    category: "tech",
    id: "software",
    label: "소프트웨어",
    title: "텔레메트리와 공학 소프트웨어",
    summary:
      "센서 데이터를 읽고 저장하는 코드부터 telemetry 검증, 시각화, 실험 로그 관리까지 하드웨어 프로젝트를 연결하는 소프트웨어 트랙입니다.",
    body: [
      "소프트웨어팀은 단순 앱 제작보다 실제 하드웨어가 만들어내는 데이터를 안정적으로 읽고 해석하는 역할에 집중하고 있습니다. 센서별 모듈을 나누고 공통 설정과 출력 계층을 분리해 여러 팀원이 동시에 작업할 수 있는 구조를 설계했습니다.",
      "위성 프로젝트에서는 센서 기능을 모듈화하고 모의 데이터를 활용해 진단·기록·시각화 흐름을 검토했습니다. 최신 온보드 설계는 ESP32 중심으로 개발하고 있습니다.",
      "2026년 10월에는 위성 장치의 상태를 LED와 부저로 표현하는 C++ 코드의 헤더와 구현 구조를 검토했습니다. 실제 동작 시험 성과와 혼동하지 않도록 코드 검토 사진을 별도로 기록했습니다.",
      "NCRC 프로젝트에서는 TensorBoard event, console log, checkpoint, env 설정과 hash를 함께 보존하는 실험 기록 체계까지 다룹니다. 하드웨어와 AI 프로젝트가 달라도 데이터와 재현성을 관리하는 공통 소프트웨어 기반을 만드는 것이 목표입니다.",
      "공개 가능한 프로젝트와 기술 문서는 GitHub를 통해 점진적으로 정리할 예정입니다.",
    ],
    metrics: ["C++ status indicator review", "ESP32-oriented software design", "Telemetry data flow", "Engineering documentation"],
    image: statusLedBuzzerCode2Image,
    status: "ACTIVE",
    tags: ["C++", "ESP32", "LED / BUZZER", "DOCUMENTATION"],
    gallery: [
      { src: statusLedBuzzerCode1Image, alt: "상태 표시 LED와 부저 모듈 헤더 구조 검토 사진", caption: "2026.10 · 상태 표시 LED·부저 모듈의 C++ 헤더 구성 검토" },
      { src: statusLedBuzzerCode2Image, alt: "상태 표시 LED와 부저 모듈 구현 코드 검토 사진", caption: "2026.10 · 상태 표시 LED·부저 모듈의 C++ 구현 구조 검토 · 장치 동작 검증과 별개" },
    ],
  },
  {
    category: "tech",
    id: "fabrication",
    label: "CAD · 시제품 제작",
    title: "CAD 설계와 구조 프로토타이핑",
    summary: "로켓 노즐의 3D 형상 모델링부터 소형 위성의 구조 스케치·모형 제작까지, 설계를 눈에 보이는 결과물로 발전시킨 활동입니다.",
    body: [
      "SE3C는 디지털 설계와 실제 제작을 함께 수행합니다. 로켓 노즐 모델링과 위성 구조 스케치를 통해 아이디어를 구체적인 형상으로 표현하고, 구조적 제약과 제작 가능성을 검토했습니다.",
      "기존 로켓 노즐 모델은 3D 형태로 시각화한 설계 기록입니다. 단순한 구상에 그치지 않고 형상을 만들어 검토했다는 점을 프로젝트 성과로 소개합니다.",
      "2025년에는 3D 프린팅을 이용한 로켓 노즐 형상 제작도 시도하며 설계 결과를 실물 제작으로 옮겼습니다. 이는 비행이나 추진 성능 검증 완료, 교내 3D 프린터 도입 완료를 의미하지 않습니다.",
      "위성팀은 큐브형 몸체의 목업을 제작하고 내부 장치의 배치 구성을 검토했습니다. 디지털 모델·스케치·실물 목업을 연결하는 제작 경험은 이후 시스템 개발의 기반이 됩니다.",
      "이 페이지는 실제로 남아 있는 CAD·목업·제작 이미지만 소개합니다. 상세 설계 파일과 내부 규격, 회로 배선 자료는 공개하지 않습니다.",
    ],
    metrics: ["3D nozzle modeling", "CubeSat structural mockups", "CAD & visual design", "Prototype documentation"],
    image: nozzleModelImage,
    status: "RESEARCH",
    tags: ["CAD", "3D MODELING", "STRUCTURE", "PROTOTYPING"],
    gallery: [
      { src: nozzleModelImage, alt: "로켓 노즐 모델링", caption: "로켓 노즐의 3D 형상 모델링" },
      { src: satelliteSketchImage, alt: "위성 구조 스케치", caption: "소형 위성의 초기 구조 구상과 시각화" },
      { src: cubesatStructureImage, alt: "CubeSat 구조 시제품", caption: "큐브형 위성 구조 시제품 제작" },
    ],
  },
  {
    category: "tech",
    id: "high-altitude-flight",
    label: "비행시험",
    title: "고고도 웨더벌룬 비행시험",
    summary:
      "개발 중인 위성 시스템 프로토타입을 웨더벌룬에 탑재하고 실제 고고도 환경에서 telemetry와 시스템 동작을 검증하는 비행 시험을 준비하고 있습니다.",
    body: [
      "지상에서 정상 동작하는 시스템이 실제 비행 환경에서도 같은 방식으로 동작하는지 확인하는 것이 이 프로젝트의 목적입니다. 위성 시스템 프로토타입을 웨더벌룬 payload로 구성해 고도, 위치, 기압, 온도, 자세와 시스템 상태를 기록할 계획입니다.",
      "비행 전에는 기체 질량과 고정 구조, 전원 지속시간, 데이터 저장, 통신 또는 회수 방식, 착륙 후 데이터 확보 절차를 단계적으로 검증합니다. mock telemetry 기반으로 만든 분석 흐름도 실제 비행 데이터에 연결할 예정입니다.",
      "공역을 사용하는 실제 비행은 임의로 진행하지 않습니다. 성남공항 등 관련 기관과 필요한 공역·비행 허가 절차를 확인하고 승인을 받은 범위 안에서 진행할 예정입니다.",
      "비행 일정과 허가 상태가 확정되면 이 페이지에서 실제 준비 기록, flight log, telemetry 결과를 공개 가능한 범위에서 업데이트합니다.",
    ],
    metrics: ["Weather-balloon payload", "Real telemetry collection", "Recovery & data retrieval", "Permission-first flight plan"],
    image: cubesatStructureImage,
    status: "UPCOMING",
    tags: ["WEATHER BALLOON", "FLIGHT TEST", "TELEMETRY", "RECOVERY"],
  },
  {
    category: "general",
    id: "team",
    label: "동아리 소개",
    title: "프로젝트 중심의 공학 팀",
    summary:
      "기구·회로·소프트웨어·운영을 프로젝트 단위로 연결하고, 각 파트의 결과를 다음 실험으로 넘기는 협업 구조를 운영합니다.",
    body: [
      "SE3C는 역할만 나눈 조직보다 실제 프로젝트가 끝까지 이어지는 구조를 지향합니다. 기구·몸체, 회로·센서, 소프트웨어, 운영·기록이 서로 다른 작업을 맡지만 하나의 검증 결과로 다시 합쳐집니다.",
      "2026년에는 CubeSat, Rocket, NCRC Robotics & AI가 동시에 진행되면서 프로젝트별 필요한 역할이 달라졌습니다. 팀 편성도 고정된 명칭보다 실제 과제와 책임에 맞춰 유연하게 운영합니다.",
      "지원·면접·인원관리 자료처럼 개인정보가 포함된 내부 운영 문서는 공개 저장소와 분리합니다. 홈페이지에는 공개 동의를 받은 정보 또는 식별정보를 제거한 기록만 사용합니다.",
      "각 프로젝트의 기록을 남겨 다음 기수가 그대로 이어받을 수 있게 하는 것이 장기적인 목표입니다.",
    ],
    metrics: ["Project-based roles", "Hardware + software integration", "Activity logs", "Public/private data separation"],
    image: expoGroupImage,
    status: "OPERATIONS",
  },
  {
    category: "general",
    id: "roadmap",
    label: "활동 연혁",
    title: "2025–2026 활동과 성과",
    summary: "체험 부스 운영에서 시작해 위성 시제품, 로켓 CAD, H1·Go2 로봇 강화학습으로 이어진 동아리 활동 기록입니다.",
    body: [
      "2025년에는 송파교육박람회에서 우주탐사차량·우주정거장 만들기 체험을 운영하고, Swift를 활용한 앱 개발 실습 등 공학 교육 활동을 진행했습니다.",
      "2026년 상반기에는 큐브형 구조 시제품과 센서 시험 환경을 제작하고, CAD 모델링과 로켓 구조·제작 관련 활동을 이어갔습니다.",
      "2026년 하반기에는 ESP32 중심의 위성 시스템 설계를 추진하는 동시에, H1·Go2 강화학습을 연구하고 NCRC 대회 제출·평가 기록을 확보했습니다.",
      "10월에는 공개 가능한 로봇 연구 자료와 평가 도구를 선별 공개했습니다. 홈페이지는 활동과 검증된 결과를 중심으로 갱신합니다.",
    ],
    metrics: ["2025 · STEM outreach", "2026 · CubeSat & CAD", "2026 · H1 / Go2 research", "Public achievement archive"],
    image: expoInteriorImage,
    status: "ACTIVE",
  },
  {
    category: "general",
    id: "outreach",
    label: "과학 체험 · 교육",
    title: "공학을 직접 체험하는 교육 활동",
    summary: "2025년 송파교육박람회 체험 부스와 SwiftUI·생성형 AI 앱 개발 실습을 통해 우주공학과 소프트웨어 교육 활동을 진행했습니다.",
    body: [
      "SE3C는 공학 프로젝트뿐 아니라 과학과 우주탐사의 재미를 방문객에게 소개하는 체험형 활동에도 참여했습니다.",
      "2025년 송파교육박람회에서는 우주탐사차량과 우주정거장 만들기를 주제로 한 체험 부스를 운영했습니다. 참가자들이 직접 모형을 제작하며 우주공학의 기본 개념을 접할 수 있도록 활동을 구성했습니다.",
      "2025년 9월에는 SwiftUI와 생성형 AI를 활용한 iOS 앱 개발 실습 활동을 진행했습니다. 참가자가 앱 아이디어를 구상하고 Swift 코드 작성과 결과 확인·디버깅 과정을 체험하도록 구성한 교육 활동입니다. 별도의 앱 출시 성과로 표기하지 않습니다.",
      "이 페이지에는 당시 공개된 행사 사진과 체험 활동 개요만 정리했습니다. 참가자의 개인정보와 행사 운영 내부자료는 게시하지 않습니다.",
    ],
    metrics: ["2025 · Songpa Education Expo", "Space rover & station activities", "2025.09 · SwiftUI workshop", "AI-assisted app prototyping"],
    image: expoBoothImage,
    status: "ACTIVE",
    tags: ["OUTREACH", "STEM", "SWIFTUI", "SPACE EDUCATION"],
    gallery: [
      { src: expoBoothImage, alt: "체험 부스 전경", caption: "2025 송파교육박람회 우주공학 체험 부스" },
      { src: expoInteriorImage, alt: "체험 부스 활동 공간", caption: "과학 체험 프로그램 운영 공간" },
      { src: expoExperienceImage, alt: "우주공학 체험 활동", caption: "우주탐사차량·우주정거장 만들기 체험 활동" },
      { src: expoOfficialPosterImage, alt: "송파구 2025 송파교육박람회 공식 홍보 포스터", caption: "2025년 제6회 송파교육박람회 행사 공식 홍보 포스터 · 출처: 송파구" },
    ],
  },
  {
    category: "general",
    id: "credibility",
    label: "활동 기록",
    title: "만들고, 시험하고, 기록합니다.",
    summary:
      "설계와 제작, 실험 데이터 및 검증 결과를 연결해 실제 공학 활동의 성과를 확인 가능한 기록으로 축적합니다.",
    body: [
      "SE3C의 공개 기록은 '무엇을 하고 싶다'보다 실제로 무엇을 만들고 어떤 데이터를 남겼는지 보여주는 방향으로 정리합니다.",
      "CubeSat 구조 시제품, 로켓 CAD 모델링, 2025년 공학 체험 행사, NCRC 학습·평가 기록 등 검증된 성과를 중심으로 소개합니다.",
      "AI 실험에서는 checkpoint 하나만 보존하지 않고 TensorBoard event, console, 설정, 코드 hash와 전체 run 구조를 함께 남기는 방식을 도입하고 있습니다. 이 원칙은 앞으로 다른 프로젝트의 실험 로그에도 확장할 수 있습니다.",
      "공개 가능한 기술 자료와 소스 코드는 GitHub 조직을 통해 정리합니다.",
    ],
    metrics: ["Photo & build evidence", "Experiment artifacts", "Status transparency", "GitHub-based documentation"],
    image: expoBoothImage,
    status: "OPERATIONS",
  },
  {
    category: "general",
    id: "operations",
    label: "운영",
    title: "프로젝트를 지속시키는 운영",
    summary:
      "예산·안전·기록·자료 관리·역할 배치를 기술 프로젝트와 연결해 동아리 활동을 반복 가능한 시스템으로 운영합니다.",
    body: [
      "프로젝트가 늘어날수록 부품 구매, 안전 검토, 실험 기록, 파일 관리와 일정 조정이 기술 개발만큼 중요해집니다. SE3C는 이 운영 계층을 프로젝트 일부로 다룹니다.",
      "제작·연구 과정에서 필요한 안전 점검, 활동 기록, 산출물 관리 기준을 프로젝트 성격에 맞게 마련하고 있습니다.",
      "개인정보, 계정 정보, 비공개 자료는 public Git 저장소와 분리하며 홈페이지에는 공개 가능한 결과만 배치합니다.",
      "이 운영 구조는 한 번의 활동을 다음 활동의 출발점으로 바꾸는 기반입니다.",
    ],
    metrics: ["Safety & permission", "Artifact management", "Public/private separation", "Reproducible workflows"],
    image: expoExperienceImage,
    status: "OPERATIONS",
  },
  {
    category: "general",
    id: "budget",
    label: "운영",
    title: "Budget & Procurement",
    summary: "프로젝트에 필요한 장비와 부품을 우선순위에 따라 도입하고, 안전·운영 조건까지 함께 검토합니다.",
    body: [
      "예산은 단순 구매 목록이 아니라 프로젝트 순서를 결정하는 요소입니다. 센서, 컴퓨팅 모듈, 구조 재료, 제작 장비와 현장 운용 품목을 프로젝트 단계에 맞춰 관리합니다.",
      "제작 장비를 검토할 때는 필요한 안전 기준과 운영 요건을 함께 살펴봅니다.",
      "구체적인 내부 예산표와 계정 정보는 공개 페이지에 올리지 않고, 외부에 필요한 경우 공개 가능한 범위의 요약만 제공합니다.",
    ],
    metrics: ["Project priority", "Equipment review", "Safety before operation", "Internal details kept private"],
    image: expoExperienceImage,
    status: "OPERATIONS",
  },
  {
    category: "general",
    id: "records",
    label: "운영",
    title: "Activity & Experiment Records",
    summary: "목표, 실험 설정, 측정 결과와 후속 성과를 함께 남겨 재현 가능한 공학 활동을 만듭니다.",
    body: [
      "활동 기록은 사진 모음보다 다음 실험을 재현할 수 있는 정보가 중요합니다. 날짜, 환경, 사용 부품, 설정, 결과와 다음 변경점을 함께 남깁니다.",
      "NCRC에서는 event, checkpoint, console, GPU 기록, 설정과 hash를 묶는 방식으로 실험 보존 수준을 높였습니다.",
      "CubeSat과 로켓 프로젝트의 공개 기록도 제작 사진·CAD 결과·확인된 활동 사실을 중심으로 정리합니다.",
    ],
    metrics: ["Configuration", "Results", "Evidence review", "Reproducible workflow"],
    image: expoInteriorImage,
    status: "OPERATIONS",
  },
  {
    category: "general",
    id: "links",
    label: "운영",
    title: "Open Engineering Links",
    summary: "공개 가능한 기술 자료와 소스 코드를 GitHub 중심으로 연결하고 내부 운영 자료는 별도 공간에서 관리합니다.",
    body: [
      "외부에 공개해도 되는 소스 코드와 기술 문서는 SE3C GitHub 조직에서 관리하는 방향으로 정리합니다.",
      "공용 계정, 내부 문서, 지원자 자료, 비공개 운영 링크는 공개 사이트와 분리합니다.",
      "홈페이지는 외부에서 SE3C가 무엇을 만들고 있는지 빠르게 이해할 수 있는 공개 진입점 역할을 합니다.",
    ],
    metrics: ["github.com/SE3C", "Public docs", "Project source links", "Private ops separated"],
    image: satelliteSketchImage,
    status: "OPERATIONS",
  },
  {
    category: "general",
    id: "members",
    label: "운영",
    title: "Members & Roles",
    summary: "구성원 정보는 공개 동의와 블라인드 원칙을 적용하고, 홈페이지에서는 프로젝트 역할 중심으로 소개합니다.",
    body: [
      "SE3C 내부에는 지원·면접·인원관리 자료가 있지만 이 자료를 그대로 public repo에 올리지 않습니다.",
      "개별 구성원을 공개할 때는 본인 동의를 확인하고, 동의하지 않았거나 확인되지 않은 정보는 이름·학번·연락처·얼굴 등 식별 가능한 요소를 제거합니다.",
      "홈페이지의 팀 소개는 개인 프로필보다 프로젝트에서 어떤 역할이 연결되는지를 중심으로 구성합니다.",
    ],
    metrics: ["Consent first", "Blind when needed", "Role-based public profile", "No raw applicant files"],
    image: expoGroupImage,
    status: "OPERATIONS",
  },
];

export const getDetailPath = (detail: DetailPage) =>
  detail.category === "tech" ? `/tech/${detail.id}` : `/${detail.id}`;
