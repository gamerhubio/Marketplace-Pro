import React, { useEffect, useState, lazy, Suspense }  from "react";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Outlet,
} from "react-router-dom";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./assets/css/custom-swiper.css";
import { ConnectButton } from "@particle-network/connect-react-ui";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ModalWrapper from "./components/AuthModals/ModalWrapper";
import Reward from "./components/AuthModals/Reward"
import { useDispatch, useSelector } from "react-redux";
import { getNewAcct, setLastRewardTime, setNewAcct } from "./store/slices/authSlice";
import SplashScreen from "./components/SplashScreen";


const LandingPage = lazy(() => import("./pages/landing"))
const AppHomePage = lazy(() => import("./pages/app/home"))
const DashboardHomePage = lazy(() => import("./pages/dashboard/home"))
const DashboardGamePage = lazy(() => import("./pages/dashboard/game"))
const DashboardProfilePage = lazy(() => import("./pages/dashboard/profile"))
const AppSignInPage = lazy(() => import("./pages/app/signin"))
const AppSignUpPage = lazy(() => import("./pages/app/signup"))
const AppSubScriptionPage = lazy(() => import("./pages/app/subscription"))
const AppWalletConnectPage = lazy(() => import("./pages/app/walletConnect"))
const ProtectedRoute = lazy(() => import("./ProtectedRoute"))
const DashboardGameOnlyPage = lazy(() => import("./pages/dashboard/home/game"))
const AppResetPage = lazy(() => import("./pages/app/reset"))
const AppForgotPage = lazy(() => import("./pages/app/forgot"))

const App: React.FC = () => {

  const isNewAcct = useSelector(getNewAcct)

  const dispatch = useDispatch()

  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    if (isNewAcct) {
      setShowModal(true)
      dispatch(setLastRewardTime())
      dispatch(setNewAcct(false))
    }
  }, [isNewAcct])


  const Suspension = () => {

    return (
      <Suspense fallback={<SplashScreen />}>
        <Outlet />
      </Suspense>
    )
  }


  return (
    <>
      <div style={{ display: "none" }}>
        <ConnectButton />
      </div>
      <Router>
        <Routes>
          <Route element={<Suspension />}>
            {/* Landing */}
            <Route path="/" element={<LandingPage />} />
            {/* App */}
            <Route path="/app/home" element={<AppHomePage />} />
            <Route path="/app/signin" element={<AppSignInPage />} />
            <Route path="/app/signup" element={<AppSignUpPage />} />
            <Route path="/app/forgot" element={<AppForgotPage />} />

            <Route path="/app/subscription" element={<AppSubScriptionPage />} />

            <Route path="/reset-password" element={<AppResetPage />} />

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
          </Route>
        </Routes>
      </Router>
      <ToastContainer />
      <ModalWrapper open={showModal} setOpen={setShowModal}>
        <Reward tokens={20} close={() => setShowModal(false)} />
      </ModalWrapper>
  </>
  );
};

export default App;
