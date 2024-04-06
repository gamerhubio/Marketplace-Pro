import React from "react";
import { ConnectWalletWrapper, TitleWrapper, WalletWrapper } from "./styles";

type ConnectWalletProps = {
  onConnected: (address: string) => void;
  show: boolean;
};

export const ConnectWallet: React.FC<ConnectWalletProps> = ({
  onConnected,
  show,
}) => {
  const handleMetamaskConnect = () => {
    onConnected("0x8396Cf380b556fFA3B4025530bB03aaf09bd5C2F");
  };
  const handleWalletConnect = () => {
    onConnected("0x8396Cf380b556fFA3B4025530bB03aaf09bd5C2F");
  };
  return (
    <ConnectWalletWrapper show={show}>
      <TitleWrapper>Connect Wallet</TitleWrapper>
      <WalletWrapper onClick={handleMetamaskConnect}>
        <p>MetaMask</p>
        <img src="/images/app/metamask.png" alt="" />
      </WalletWrapper>
      <WalletWrapper onClick={handleWalletConnect}>
        <p>WalletConnect</p>
        <img src="/images/app/wallet.png" alt="" />
      </WalletWrapper>
    </ConnectWalletWrapper>
  );
};
