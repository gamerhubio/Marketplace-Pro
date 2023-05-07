import React, { useState } from "react";
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

export const AppWalletConnectPage: React.FC = () => {
  const [modalShow, setModalShow] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");

  const router = useNavigate();

  const handleConnectWallet = () => {
    setModalShow(true);
  };

  const handleConnected = (address: string) => {
    setWalletAddress(address);
    setIsConnected(true);
    setModalShow(false);
  };

  return (
    <AppLayout
      buttonContent={
        <AppButton onClick={isConnected ? () => {} : handleConnectWallet}>
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
            <Button disabled={isConnected} onClick={handleConnectWallet}>
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
};
