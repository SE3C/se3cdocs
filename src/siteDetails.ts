import satelliteMonitorImage from "./assets/satellite-monitor.jpeg";
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
  researchMilestones?: { date: string; label: string; title: string; description: string; url: string }[];
  sources?: { title: string; description: string; url: string }[];
};

export const detailPages: DetailPage[] = [
  {
    category: "tech",
    id: "cubesat",
    label: "위성 시스템",
    title: "큐브위성 시스템",
    summary:
      "Raspberry Pi 5와 ESP32, 환경·자세 센서를 한 기체 안에 통합하고 실제 비행 데이터 수집까지 이어가기 위한 소형 위성 시스템 프로토타입입니다.",
    body: [
      "2026년 SE3C 위성 프로젝트는 구조물만 만드는 데서 끝나지 않습니다. 센서 계층, 온보드 컴퓨터, 전원과 배선, 데이터 저장·분석 흐름을 하나의 시스템으로 연결하는 것을 목표로 하고 있습니다.",
      "6월 하드웨어 통합 활동에서는 ESP32 기반 센서 브레드보드 시험과 Raspberry Pi 5를 탑재한 큐브형 구조물 제작을 진행했습니다. GPS, 온습도, 기압, 조도, 자세 계열 센서를 모듈 단위로 검증하고 실제 기체 안에 배치하는 과정을 반복했습니다.",
      "소프트웨어는 센서별 모듈을 분리해 수집·출력·기록 흐름을 관리하는 방향으로 설계하고 있습니다. 실제 비행 전에는 mock telemetry를 이용해 데이터 검증과 분석 UI를 먼저 시험합니다.",
      "다음 단계는 지상 통합 시험을 마친 뒤 웨더벌룬 탑재 비행을 통해 고도·위치·환경 데이터를 실제 조건에서 수집하는 것입니다. 비행은 관련 공역과 관계 기관의 허가 절차를 거쳐 진행할 예정입니다.",
    ],
    metrics: ["Raspberry Pi 5 OBC", "ESP32 sensor bench", "5+ sensor modules", "Telemetry → analysis pipeline"],
    image: cubesatIntegrationImage,
    status: "ACTIVE",
    tags: ["OBC", "TELEMETRY", "SENSORS", "INTEGRATION"],
    gallery: [
      { src: sensorBenchImage, alt: "ESP32 sensor bench", caption: "ESP32 기반 센서 통합 벤치 테스트" },
      { src: cubesatStructureImage, alt: "CubeSat structure prototype", caption: "Raspberry Pi와 센서 모듈을 배치한 큐브형 구조 프로토타입" },
      { src: piCloseupImage, alt: "Raspberry Pi close-up", caption: "기체 내부 Raspberry Pi 계열 컴퓨팅 모듈 배치" },
      { src: sensorBenchCloseImage, alt: "Sensor bench close-up", caption: "센서별 연결 및 데이터 수집 검증" },
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
      "기존에 축적한 노즐 모델링과 추진 연구 자료는 향후 3D 프린팅 환경과 연결할 예정입니다. 부품을 직접 설계하고 출력할 수 있게 되면 노즐 목업, 센서 마운트, 테스트 지그와 같은 반복 제작 속도를 높일 수 있습니다.",
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
      "2026-10-23 공개 보관본에는 H1·Go2 연구 문서와 자체 평가 도구, 선별 평가 데이터가 공개됐습니다. 영상 132개가 포함된 33개 평가 ZIP과 출처·검증 기록을 GitHub에서 확인할 수 있습니다.",
    ],
    metrics: ["H1 + Go2 · Isaac Lab / PPO", "Go2 R5 · 공식 평가 88.32 / 100", "H1 R6 · 공식 학습 10K / 제출 완료", "33 evaluation ZIPs · 132 videos"],
    image: ncrcPosterImage,
    status: "ACTIVE",
    tags: ["H1", "GO2", "ISAAC LAB", "PPO", "EVALUATION"],
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
        title: "H1·Go2 데이터와 평가 도구 공개",
        description: "33개 평가 ZIP, 132개 영상과 연구 문서·검증 기록을 선별 공개했습니다.",
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
      "위성 프로젝트에서는 GPS, DHT11, BMP280, MPU6050, BH1750 등 센서 계층과 LED·buzzer 출력 계층을 분리하는 방향을 사용합니다. 실제 비행 전에 mock telemetry를 이용해 파일 검증, 상태 판정, 그래프와 이상 감지 UI를 시험할 수 있습니다.",
      "NCRC 프로젝트에서는 TensorBoard event, console log, checkpoint, env 설정과 hash를 함께 보존하는 실험 기록 체계까지 다룹니다. 하드웨어와 AI 프로젝트가 달라도 데이터와 재현성을 관리하는 공통 소프트웨어 기반을 만드는 것이 목표입니다.",
      "공개 가능한 프로젝트와 기술 문서는 GitHub를 통해 점진적으로 정리할 예정입니다.",
    ],
    metrics: ["Python module structure", "Telemetry validation", "Data visualization", "Experiment reproducibility"],
    image: satelliteMonitorImage,
    status: "ACTIVE",
    tags: ["PYTHON", "DATA", "WEB", "LOGGING"],
  },
  {
    category: "tech",
    id: "fabrication",
    label: "디지털 제작",
    title: "3D 프린팅과 신속 시제품 제작",
    summary:
      "3D 프린터 도입 이후 로켓·위성 프로젝트용 구조 부품, 센서 마운트와 실험 지그를 직접 설계·출력하기 위한 제작 인프라를 준비하고 있습니다.",
    body: [
      "SE3C는 3D 프린터를 단순 체험 장비가 아니라 프로젝트 제작 속도를 높이는 공학 도구로 도입할 계획입니다. CAD 설계부터 출력 방향, 재료 특성, 후가공, 체결과 실제 사용 조건까지 한 흐름으로 다루게 됩니다.",
      "도입 전 단계에서는 PLA 계열 재료의 MSDS와 교육기관 3D 프린팅 안전 가이드, 학교 안전관리 자료 등을 검토해 운영 기준을 준비했습니다. 장비가 들어온 뒤에는 안전한 출력·환기·보관 절차를 먼저 확립할 예정입니다.",
      "첫 활용 후보는 CubeSat 센서 마운트와 내부 브래킷, 로켓 구조 목업, 노즐 형상 검증용 모델, 실험용 고정 지그입니다. 기존에 외부 제작이나 수작업에 의존하던 부품을 빠르게 반복 제작하는 것이 핵심입니다.",
      "실제 출력물과 프로젝트 결과는 장비 도입 후 이 페이지에 순차적으로 업데이트합니다.",
    ],
    metrics: ["CAD → print workflow", "Safety guideline reviewed", "Sensor mounts & brackets", "Test jigs / structural mockups"],
    image: nozzleModelImage,
    status: "UPCOMING",
    tags: ["CAD", "FDM", "RAPID PROTOTYPING", "SAFETY"],
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
    label: "로드맵",
    title: "2026 프로젝트 로드맵",
    summary:
      "팀 구성에서 CubeSat 하드웨어 통합, NCRC 강화학습까지 진행했고 다음 단계로 3D 제작 환경과 고고도 비행 시험을 준비합니다.",
    body: [
      "3월에는 신입부원 모집과 팀 구성을 진행했고, 4~5월에는 CubeSat OBC·센서·전원·소프트웨어 구조와 telemetry 흐름을 설계했습니다.",
      "6월에는 ESP32 센서 벤치와 Raspberry Pi 기반 큐브 구조를 실제로 제작·통합했고 로켓 제작과 현장 장비 준비도 병행했습니다.",
      "7월부터 NCRC 2026 준비를 시작해 8월에는 H1 강화학습 baseline, 장기 검증 실행, TensorBoard와 checkpoint 분석, 실험 증거 보존 절차를 정리했습니다.",
      "다음 단계는 3D 프린터 기반 rapid prototyping을 실제 프로젝트에 연결하고, 관련 허가 절차를 거친 웨더벌룬 고고도 비행으로 CubeSat-format payload를 검증하는 것입니다.",
    ],
    metrics: ["MAR · team formation", "JUN · hardware integration", "AUG · humanoid RL", "NEXT · fabrication & flight"],
    image: expoInteriorImage,
    status: "ACTIVE",
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
      "CubeSat 프로젝트에는 센서 테스트와 기체 통합 사진, NCRC에는 학습 산출물과 play 영상, 로켓에는 제작·시험 준비 기록이 있습니다. 진행 예정 프로젝트는 ACTIVE 결과와 섞지 않고 UPCOMING으로 구분합니다.",
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
      "3D 프린터 도입 전 안전 가이드와 소재 자료를 검토하고, NCRC 실험 전후에는 전체 로그와 산출물 export 규칙을 정리하는 것처럼 프로젝트 성격에 맞는 운영 절차를 따로 구축하고 있습니다.",
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
      "3D 프린터처럼 운영 기준이 필요한 장비는 구매 이전에 안전 가이드와 재료 정보를 함께 검토합니다.",
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
      "CubeSat과 로켓 프로젝트도 제작 버전과 시험 결과를 연결해 장기적으로 engineering log 형태로 공개할 계획입니다.",
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
