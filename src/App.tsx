import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "./LandingPage";
import MainDetailPage from "./MainDetailPage";
import TechPage from "./TechPage";

function PublicRoutes() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<LandingPage />} />
      <Route path="/tech" element={<TechPage />} />
      <Route path="/tech/:id" element={<MainDetailPage />} />
      <Route path="/:id" element={<MainDetailPage />} />
      <Route path="*" element={<LandingPage />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <PublicRoutes />
    </BrowserRouter>
  );
}
