import React, { useEffect, useState } from "react";
import { AppLayout } from "../../../layout";
import {
  AppButton,
  Button,
  ConnectWallet,
  IconDropdown,
  IconWalletConnect,
} from "../../../components";
import { useNavigate } from "react-router-dom";
import {
  AppSignUpPageWrapper,
  CheckboxWrapper,
  FormInputWrapper,
  SignUpFormWrapper,
} from "../signup/styles";
import { getFormatWalletAddress } from "../../../utils";
import { ConnectButton, useAccount } from "@particle-network/connect-react-ui";
import "@particle-network/connect-react-ui/dist/index.css";
import { usePrevious } from "../../../hooks";
import { login } from "../../../scripts";
import { setIsAuthenticated, setUser, useGlobalState } from "../../../store";
import {
  checkSubscription,
  checkUser,
  updateUserWalletList,
} from "../../../scripts/user";

export const AppWalletConnectPage: React.FC = () => {
  const [modalShow, setModalShow] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [isAuthenticated] = useGlobalState("isAuthenticated");
  const [currentUser] = useGlobalState("currentUser");
  const address = useAccount();

  //set custom hook
  const prevAddress = usePrevious(address);

  const router = useNavigate();

  const handleConnectWallet = () => {
    setModalShow(true);
  };

  const handleConnected = (address: string) => {
    setWalletAddress(address);
    setIsConnected(true);
    setModalShow(false);
  };

  const checkSubscriptionState = () => {
    checkSubscription(
      //@ts-expect-error
      currentUser.id || JSON.parse(window.localStorage.getItem("user")).id
    )
      .then((data) => {
        //@ts-ignore
        if (typeof data == "object" && data.error) {
          //@ts-ignore
          console.log(data.error);
        }
        //if true is returned
        //@ts-ignore
        if (data.msg) {
          //go to dashboard
          router("/dashboard/home");
        } else {
          router("/app/subscription");
        }
      })
      .catch((err) => console.log(err));
  };

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
        }
        //if true is returned
        //@ts-ignore
        if (data.msg) {
          //check if user is subscribed
          checkSubscriptionState();
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (address) {
      checkUser(address)
        .then((data) => {
          console.log(data);
          //@ts-ignore
          if (typeof data == "object" && data.error) {
            //@ts-ignore
            console.log(data.error);
          } else {
            console.log(data);
            //if no server error
            if (data.msg === true) {
              console.log(data.msg);
              if (
                //not authenticated
                //@ts-ignore
                !window.localStorage.getItem("accessToken")
              ) {
                //go to login page
                router("/app/signin");
              } else {
                //check if user is subscribed
                checkSubscriptionState();
              }
            } else {
              console.log("no");
              if (
                //not authenticated
                //@ts-ignore
                !window.localStorage.getItem("accessToken")
              ) {
                router("/app/signup");
              } else {
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
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openConnectModal,
        openChainModal,
        accountLoading,
      }) => {
        return (
          <AppLayout
            buttonContent={
              // @ts-ignore
              <AppButton onClick={openConnectModal}>
                <IconWalletConnect />
                <span>
                  {isConnected
                    ? getFormatWalletAddress(walletAddress)
                    : "Connect Wallet"}
                </span>
                {isConnected && <IconDropdown />}
              </AppButton>
            }
          >
            <AppSignUpPageWrapper>
              <h1>Connect Wallet to Gamerhub</h1>

              <SignUpFormWrapper>
                <FormInputWrapper>
                  <Button disabled={isConnected} onClick={openConnectModal}>
                    Connect Wallet
                  </Button>
                  <Button
                    disabled={!isConnected}
                    onClick={() => router("/app/subscription")}
                  >
                    Explore Gamerhub
                  </Button>
                </FormInputWrapper>
                <ConnectWallet onConnected={handleConnected} show={modalShow} />
                <CheckboxWrapper>
                  <p>
                    {"Don’t have a wallet? "}
                    <span>Get Metamask</span>
                  </p>
                </CheckboxWrapper>
              </SignUpFormWrapper>
            </AppSignUpPageWrapper>
          </AppLayout>
        );
      }}
    </ConnectButton.Custom>
  );
};
