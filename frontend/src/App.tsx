import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import {
  LandingPage,
  AppHomePage,
  AppSignInPage,
  AppSignUpPage,
  AppSubScriptionPage,
  AppWalletConnectPage,
} from "./pages";

import "./assets/css/custom-swiper.css";
import "swiper/css";
import "swiper/css/pagination";

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
      </Routes>
    </Router>
  );
};

export default App;
