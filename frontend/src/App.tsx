import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { LandingPage } from "./pages";

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
