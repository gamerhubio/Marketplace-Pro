import React, { useEffect, useMemo } from "react";
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
import { setGlobalState, useGlobalState } from "./store";
import ProtectedRoute from "./ProtectedRoute";
import {
  checkSubscription,
  checkUser,
  updateUserWalletList,
} from "./scripts/user";
import { MyMark } from "./components/MyMark";

const App: React.FC = () => {
  const address = useAccount();
  const [currentUser] = useGlobalState("currentUser");
  //const router = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("accessToken") && localStorage.getItem("user")) {
      setGlobalState("isAuthenticated", true);
      //set user object
      const user = {
        //@ts-expect-error
        id: JSON.parse(window.localStorage.getItem("user")).id,
        //@ts-expect-error
        email: JSON.parse(window.localStorage.getItem("user")).email,
        //@ts-expect-error
        username: JSON.parse(window.localStorage.getItem("user")).username,
        //@ts-expect-error
        wallets: JSON.parse(window.localStorage.getItem("user")).wallets,
      };
      setGlobalState("currentUser", user);
    }
  }, []);

  const updateWalletList = () => {
    const walletList =
      //@ts-ignore
      currentUser.wallets ||
      //@ts-ignore
      JSON.parse(window.localStorage.getItem("user")).wallets;

    updateUserWalletList({
      email:
        //@ts-ignore
        currentUser.email ||
        //@ts-ignore
        JSON.parse(window.localStorage.getItem("user")).email,

      username:
        //@ts-ignore
        currentUser.username ||
        //@ts-ignore
        JSON.parse(window.localStorage.getItem("user")).username,
      //@ts-ignore
      wallets: [...walletList, address],
    })
      .then((data) => {
        console.log(data);
        //@ts-ignore
        if (typeof data == "object" && data.error) {
          //@ts-ignore
          console.log(data.error);
        } else {
          console.log("new wallet address added for user");
        }
        //if true is returned
        //@ts-ignore
        // if (data.msg) {
        //   //check if user is subscribed
        //   checkSubscriptionState();
        // }
      })
      .catch((err) => console.log(err));
  };

  //watch for wallet address switches
  useEffect(() => {
    console.log(address);
    if (address) {
      checkUser(address)
        .then((data) => {
          console.log(data);
          //@ts-ignore
          if (typeof data == "object" && data.error) {
            //@ts-ignore
            console.log(data.error);
          } else {
            //if no server error and no account exists
            if (data.msg === false) {
              console.log("called");
              if (
                // authenticated
                //@ts-ignore
                window.localStorage.getItem("accessToken")
              ) {
                //update user wallet list
                updateWalletList();
              }
            }
          }
          //if true is returned
        })
        .catch((err) => console.log(err));
    }
    //else {
    //   //clear user details
    //   localStorage.removeItem("user");
    //   localStorage.removeItem("accessToken");
    //   //@ts-expect-error
    //   setUser({});
    //   setIsAuthenticated(false);
    // }
  }, [address]);

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
          <Route path="/app/subscription" element={<AppSubScriptionPage />} />
          <Route
            path="/app/wallet-connect"
            element={<AppWalletConnectPage />}
          />
          {/* Dashboard */}
          <Route
            path="/dashboard/home"
            element={
              <ProtectedRoute>
                <DashboardHomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/game"
            element={
              <ProtectedRoute>
                <DashboardGamePage />
              </ProtectedRoute>
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
      <MyMark />
    </>
  );
};

export default App;
