import React from "react";
import { DashboardLayout } from "../../../layout";
import {
  ConnectWalletButton,
  GridGroupWraper,
  WelcomeContainer,
  WelcomeImageWrapper,
  WelcomeRecentAddedWrapper,
} from "./styles";
import { GameListGrid } from "../../../components";
import { allGameList, metaverseList, nftList } from "../data";

export const DashboardHomePage: React.FC = () => {
  return (
    <DashboardLayout>
      <WelcomeContainer>
        <WelcomeImageWrapper>
          <div>
            <h1>Welcome to GamerHub</h1>
            <p>
              Experience the future of gaming across multiple chains, all in one
              place.
            </p>
            <ConnectWalletButton>Connect Wallet</ConnectWalletButton>
          </div>
        </WelcomeImageWrapper>
        <WelcomeRecentAddedWrapper>
          <h1>Recently added</h1>
        </WelcomeRecentAddedWrapper>
      </WelcomeContainer>
      <GridGroupWraper>
        <GameListGrid title="All games" list={allGameList} />
        <GameListGrid title="Metaverse" list={metaverseList} />
        <GameListGrid title="NFT Marketplace" list={nftList} />
      </GridGroupWraper>
    </DashboardLayout>
  );
};
