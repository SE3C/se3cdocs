import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "./LandingPage";
import MainDetailPage from "./MainDetailPage";
import NotFoundPage from "./NotFoundPage";
import { detailPages } from "./siteDetails";
import TechPage from "./TechPage";
import TestLogPage from "./TestLogPage";
import HistoryPage from "./HistoryPage";
import { useDocumentMeta } from "./useDocumentMeta";

function RouteMeta() {
  const location = useLocation();
  const detail = detailPages.find((item) => location.pathname.endsWith(`/${item.id}`) || location.pathname === `/${item.id}`);
  useDocumentMeta(detail?.title ?? ((location.pathname === "/tech" || location.pathname === "/projects") ? "프로젝트" : location.pathname === "/tests" ? "Test log" : location.pathname === "/history" ? "2025년 활동 아카이브" : "Space Exploration Engineering Experimental Club"), detail?.summary);
  return null;
}

function PublicRoutes() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<LandingPage />} />
      <Route path="/tech" element={<TechPage />} />
      <Route path="/projects" element={<TechPage />} />
      <Route path="/tests" element={<TestLogPage />} />
      <Route path="/history" element={<HistoryPage />} />
      <Route path="/tech/:id" element={<MainDetailPage />} />
      <Route path="/:id" element={<MainDetailPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <RouteMeta />
      <PublicRoutes />
    </BrowserRouter>
  );
}
