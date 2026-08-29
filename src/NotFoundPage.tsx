import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import PublicFooter from "./PublicFooter";
import PublicHeader from "./PublicHeader";
import { useDocumentMeta } from "./useDocumentMeta";

export default function NotFoundPage() {
  useDocumentMeta("Signal lost", "요청한 SE3C 페이지를 찾을 수 없습니다.");
  return <div className="not-found-page"><PublicHeader /><main className="not-found-content"><p className="eyebrow">404 · SIGNAL LOST</p><h1>요청한 경로를<br />찾을 수 없습니다.</h1><p>주소를 확인하거나 SE3C의 프로젝트 기록으로 돌아가세요.</p><Link to="/" className="outline-cta"><ArrowLeft size={16} /> 홈으로 돌아가기</Link></main><PublicFooter /></div>;
}
