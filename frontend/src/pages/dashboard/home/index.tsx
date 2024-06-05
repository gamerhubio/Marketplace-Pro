import React, { useState } from "react";
import { DashboardLayout } from "../../../layout";
import {
  ConnectWalletButton,
  GridGroupWraper,
  WelcomeContainer,
  WelcomeImageWrapper,
  WelcomeRecentAddedWrapper,
} from "./styles";
import { GameListGrid } from "../../../components";
import { gameList } from "../data";
import { ConnectButton } from "@particle-network/connect-react-ui";
import AuthModals from "../../../components/AuthModals";

export const DashboardHomePage: React.FC = () => {

  const [open, setOpen] = useState(false)

  return (
    <>
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
            <DashboardLayout>
              <WelcomeContainer>
                <WelcomeImageWrapper>
                  <div>
                    <h1>Welcome to GamerHub</h1>
                    <p>
                      Experience the future of gaming across multiple chains, all
                      in one place.
                    </p>
                    {!account && (
                      <ConnectWalletButton onClick={() => setOpen(true)}>Sign In</ConnectWalletButton>
                    )}
                    
                  </div>
                </WelcomeImageWrapper>
                <WelcomeRecentAddedWrapper>
                  <h1>Recently added</h1>
                </WelcomeRecentAddedWrapper>
              </WelcomeContainer>
              <GridGroupWraper>
                <GameListGrid title="All games" list={gameList} />
                {/* <GameListGrid title="Metaverse" list={metaverseList} />
                <GameListGrid title="NFT Marketplace" list={nftList} /> */}
              </GridGroupWraper>
            </DashboardLayout>
          );
        }}
      </ConnectButton.Custom>
      <AuthModals link={null} open={open} setOpen={setOpen} />
    </>
  );
};
