import React from "react";
import { DashboardLayout } from "../../../layout";
import { GridGroupWraper } from "./styles";
import { GameListGrid } from "../../../components";
import { gameList, metaverseList, nftList } from "../data";
import { ConnectButton } from "@particle-network/connect-react-ui";

export const DashboardGameOnlyPage: React.FC = () => {
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
          <DashboardLayout>
            <GridGroupWraper>
              <GameListGrid title="All games" list={gameList} />
            </GridGroupWraper>
          </DashboardLayout>
        );
      }}
    </ConnectButton.Custom>
  );
};
