import React, { useEffect, useMemo, useState } from "react";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  useNavigate,
} from "react-router-dom";
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

import { ConnectButton, useAccount } from "@particle-network/connect-react-ui";
import { usePrevious } from "./hooks";
import { getUser, login } from "./scripts";
import { persistor, store } from './store'
import ProtectedRoute from "./ProtectedRoute";
import {
  checkSubscription,
  checkUser,
  updateUserWalletList,
} from "./scripts/user";
import { DashboardGameOnlyPage } from "./pages/dashboard/home/game";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ModalWrapper from "./components/AuthModals/ModalWrapper";
import Reward from "./components/AuthModals/Reward"
import { claimTokens } from "./utils";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";



const App: React.FC = () => {


  const address = useAccount();
  const [showModal, setShowModal] = useState(false)
  //const router = useNavigate();



  // useEffect(() => {
  //   async function claim() {
  //     const id = (currentUser as any)?.id
  //     if (id) {
  //       const res = await claimTokens(id)
  //       console.log({res})
  //       if (res) setShowModal(true)
  //     }
  //   }
  //   claim()
  // }, [currentUser])



  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>

        <div style={{ display: "none" }}>
          <ConnectButton />
        </div>
        <Router>
          <Routes>
            {/* Landing */}
            <Route path="/" element={<LandingPage />} />
            {/* App */}
            <Route path="/app/home" element={<AppHomePage />} />
            <Route path="/app/signin" element={<AppSignInPage />} />
            <Route path="/app/signup" element={<AppSignUpPage />} />
            <Route path="/app/subscription" element={<AppSubScriptionPage />} />
            <Route
              path="/app/wallet-connect"
              element={<AppWalletConnectPage />}
            />
            {/* Dashboard */}
            <Route
              path="/dashboard/home"
              element={
                // <ProtectedRoute>
                  <DashboardHomePage />
                // </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/game"
              element={
                // <ProtectedRoute>
                  <DashboardGameOnlyPage />
                // </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/game/:id"
              element={
                // <ProtectedRoute>
                  <DashboardGamePage />
                // </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/profile"
              element={
                <ProtectedRoute>
                  <DashboardProfilePage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Router>
        <ToastContainer />
        <ModalWrapper open={showModal} setOpen={setShowModal}>
          <Reward close={() => setShowModal(false)} />
        </ModalWrapper>
    </PersistGate>
  </Provider>
  );
};

export default App;
