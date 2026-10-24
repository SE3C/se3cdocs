import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PublicFooter from "./PublicFooter";
import PublicHeader from "./PublicHeader";
import { useDocumentMeta } from "./useDocumentMeta";

const testRecords = [
  { id: "LOG 004", date: "2026.10.23", status: "PUBLISHED", title: "H1 & Go2 · Open research archive", description: "자체 평가기·연구 자료와 함께 H1·Go2의 33개 평가 ZIP 및 영상 132개를 선별 공개했습니다. 원본과 공개본의 출처·검증 기록을 함께 제공합니다.", href: "https://github.com/SE3C/naver-issacsim-opensource/blob/main/_publication/VERIFICATION.md" },
  { id: "LOG 005", date: "2026.10.11", status: "SUBMITTED", title: "H1 · Preliminary Round 6", description: "공식 서버에서 10,000 iteration 학습한 ACTRATE-0001 정책을 제출하고, keeper model_9999 및 제출 actor의 대응을 검증했습니다.", href: "https://github.com/SE3C/naver-issacsim-opensource/blob/main/naver-issacsim/data/processed/experiments/h1/2026-10-11_PRELIM_R6_SUBMISSION/release_notes.md" },
  { id: "LOG 006", date: "2026.10.08", status: "RECORDED", title: "Go2 · Preliminary Round 5", description: "공식 결과 수신 기록: 총점 88.32/100, 시뮬레이션 58.32/70, 설계 의도 20/20, 리포트 품질 10/10.", href: "https://github.com/SE3C/naver-issacsim-opensource/blob/main/naver-issacsim/data/processed/experiments/go2/analysis/2026-10-08_OFFICIAL_EVAL_GO2_ROUND5_LINTRACK125.md" },
  { id: "LOG 001", date: "2026.08", status: "DOCUMENTED", title: "H1 reinforcement-learning baseline", description: "NVIDIA Isaac Sim / Isaac Lab 환경에서 4,096개 병렬 환경, seed 42, 300 iteration 기준선의 학습·export·play 검증 흐름을 기록했습니다.", to: "/tech/robotics-ai" },
  { id: "LOG 002", date: "TBD", status: "PLANNED", title: "High-altitude telemetry validation", description: "관련 허가 절차와 지상 통합 시험이 완료된 뒤, 웨더벌룬 탑재 환경에서 telemetry 수집과 시스템 동작을 검증할 예정입니다.", to: "/tech/high-altitude-flight" },
  { id: "LOG 003", date: "TBD", status: "IN DEVELOPMENT", title: "Rapid-prototyping workflow", description: "장비 도입 후 구조 부품, 센서 마운트와 시험 지그의 설계·출력·검증 기록을 공개 가능한 범위에서 축적합니다.", to: "/tech/fabrication" },
];

export default function TestLogPage() {
  useDocumentMeta("Test log", "SE3C의 학습·대회 제출·공개 연구 성과와 실험 기록입니다.");

  return <div className="test-log-page"><PublicHeader /><main><section className="test-log-hero"><p className="eyebrow">SE3C · ENGINEERING RECORD</p><h1>TEST<br />LOG</h1><p>성공만 기록하지 않습니다. 설정, 결과, 제약과 다음 검증 단계를 함께 남깁니다.</p></section><section className="test-records" aria-label="SE3C test records">{testRecords.map((record) => <article key={record.id} className="test-record"><div className="test-record-meta"><span>{record.id}</span><span>{record.date}</span><span>{record.status}</span></div><div><h2>{record.title}</h2><p>{record.description}</p></div>{"href" in record ? (
  <a href={record.href} target="_blank" rel="noopener noreferrer" className="test-record-link">SOURCE <ArrowRight size={17} /></a>
) : (
  <Link to={record.to} className="test-record-link">RECORD <ArrowRight size={17} /></Link>
)}</article>)}</section><section className="test-log-note"><p className="eyebrow">PUBLICATION PRINCIPLE</p><h2>검증 전의 결과는<br />성과로 표시하지 않습니다.</h2><p>실험 데이터가 충분하지 않은 항목은 TBD 또는 계획 상태로 표시합니다. 실제 로그와 공개 가능한 근거가 확보되면 이 기록을 갱신합니다.</p></section></main><PublicFooter /></div>;
}
