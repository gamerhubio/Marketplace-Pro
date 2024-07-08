import React from "react";
import { DashboardLayout } from "../../../layout";
import { GridGroupWraper } from "./styles";
import GameListGrid from "../../../components/GameListGrid";
import { gameList } from "../data";
import { ConnectButton } from "@particle-network/connect-react-ui";

const DashboardGameOnlyPage: React.FC = () => {
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


export default DashboardGameOnlyPage