import React, { useEffect, useState } from "react";
import {
  Route,
  Routes,
  BrowserRouter as Router,
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
import ProtectedRoute from "./ProtectedRoute";
import { DashboardGameOnlyPage } from "./pages/dashboard/home/game";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ModalWrapper from "./components/AuthModals/ModalWrapper";
import Reward from "./components/AuthModals/Reward"
import { useDispatch, useSelector } from "react-redux";
import { getNewAcct, setLastRewardTime, setNewAcct } from "./store/slices/authSlice";
import { AppResetPage } from "./pages/app/reset";
import { AppForgotPage } from "./pages/app/forgot";



const App: React.FC = () => {

  const isNewAcct = useSelector(getNewAcct)

  const dispatch = useDispatch()


  const address = useAccount();
  const [showModal, setShowModal] = useState(false)
  //const router = useNavigate();



  // useEffect(() => {
  //   const claimTokens = async() =>  {
  //     const DAY = 24 * 3600 * 1000
  //     const currentTime = Date.now()
  //     if (lastRewardTime + DAY <= currentTime && userData) {
  //       try {
  //         await authRequest().patch(BASE_URL + "/users/reward/" + userData?.id)
  //         setShowModal(true)
  //         dispatch(setLastRewardTime())
  //         if (isNewAcct) {
  //           dispatch(setCredit(credit + 20))
  //         } else {
  //           dispatch(setCredit(credit + 10))
  //         }
       
  //       } catch (e) {

  //       }
  //     } else {
        
  //     }
  //   }
  //   claimTokens()
  // }, [userData])


  useEffect(() => {
    if (isNewAcct) {
      setShowModal(true)
      dispatch(setLastRewardTime())
      dispatch(setNewAcct(false))
    }
  }, [isNewAcct])



  return (
    <>
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
