import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import {
  LandingPage,
  AppHomePage,
  AppSignInPage,
  AppSignUpPage,
  AppSubScriptionPage,
  AppWalletConnectPage,
  DashboardHomePage,
  DashboardGamePage,
  DashboardProfilePage,
} from "./pages";

import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./assets/css/custom-swiper.css";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Landing */}
        <Route path="/" element={<LandingPage />} />
        {/* App */}
        <Route path="/app/home" element={<AppHomePage />} />
        <Route path="/app/signin" element={<AppSignInPage />} />
        <Route path="/app/signup" element={<AppSignUpPage />} />
        <Route path="/app/subscription" element={<AppSubScriptionPage />} />
        <Route path="/app/wallet-connect" element={<AppWalletConnectPage />} />
        {/* Dashboard */}
        <Route path="/dashboard/home" element={<DashboardHomePage />} />
        <Route path="/dashboard/game" element={<DashboardGamePage />} />
        <Route path="/dashboard/profile" element={<DashboardProfilePage />} />
      </Routes>
    </Router>
  );
};

export default App;
