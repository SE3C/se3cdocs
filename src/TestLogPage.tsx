import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PublicFooter from "./PublicFooter";
import PublicHeader from "./PublicHeader";
import { useDocumentMeta } from "./useDocumentMeta";

const testRecords = [
  { id: "LOG 001", date: "2026.08", status: "DOCUMENTED", title: "H1 reinforcement-learning baseline", description: "NVIDIA Isaac Sim / Isaac Lab 환경에서 4,096개 병렬 환경, seed 42, 300 iteration 기준선의 학습·export·play 검증 흐름을 기록했습니다.", to: "/tech/robotics-ai" },
  { id: "LOG 002", date: "TBD", status: "PLANNED", title: "High-altitude telemetry validation", description: "관련 허가 절차와 지상 통합 시험이 완료된 뒤, 웨더벌룬 탑재 환경에서 telemetry 수집과 시스템 동작을 검증할 예정입니다.", to: "/tech/high-altitude-flight" },
  { id: "LOG 003", date: "TBD", status: "IN DEVELOPMENT", title: "Rapid-prototyping workflow", description: "장비 도입 후 구조 부품, 센서 마운트와 시험 지그의 설계·출력·검증 기록을 공개 가능한 범위에서 축적합니다.", to: "/tech/fabrication" },
];

export default function TestLogPage() {
  useDocumentMeta("Test log", "SE3C의 문서화된 실험 기준선과 계획 단계의 검증 기록입니다.");

  return <div className="test-log-page"><PublicHeader /><main><section className="test-log-hero"><p className="eyebrow">SE3C · ENGINEERING RECORD</p><h1>TEST<br />LOG</h1><p>성공만 기록하지 않습니다. 설정, 결과, 제약과 다음 검증 단계를 함께 남깁니다.</p></section><section className="test-records" aria-label="SE3C test records">{testRecords.map((record) => <article key={record.id} className="test-record"><div className="test-record-meta"><span>{record.id}</span><span>{record.date}</span><span>{record.status}</span></div><div><h2>{record.title}</h2><p>{record.description}</p></div><Link to={record.to} className="test-record-link">RECORD <ArrowRight size={17} /></Link></article>)}</section><section className="test-log-note"><p className="eyebrow">PUBLICATION PRINCIPLE</p><h2>검증 전의 결과는<br />성과로 표시하지 않습니다.</h2><p>실험 데이터가 충분하지 않은 항목은 TBD 또는 계획 상태로 표시합니다. 실제 로그와 공개 가능한 근거가 확보되면 이 기록을 갱신합니다.</p></section></main><PublicFooter /></div>;
}
