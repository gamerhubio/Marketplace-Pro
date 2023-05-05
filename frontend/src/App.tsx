import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { LandingPage } from "./pages";

import "./assets/css/custom-swiper.css";
import "swiper/css";
import "swiper/css/pagination";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
};

export default App;
