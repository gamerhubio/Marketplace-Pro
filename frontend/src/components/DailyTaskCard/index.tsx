import React from "react";
import {
  DailyTaskCardContainer,
  DailyTaskInfo,
  DailyTaskStatus,
  StatusBtn,
  TaskReward,
} from "./styles";
import {
  ConnectButton,
  useAccount,
  useParticleProvider,
} from "@particle-network/connect-react-ui";
import { requestPayment } from "../../scripts/blockchainServices";

type CardProps = {
  title: string;
  amount: string;
  credit: number;
  isOdd: boolean;
};

export const DailyTaskCard: React.FC<CardProps> = ({
  title,
  amount,
  credit,
  isOdd,
}) => {
  const address = useAccount();
  const provider = useParticleProvider();

  const proceedToPayment = (credit: number) => {
    if (address && provider) {
      requestPayment(address, provider, credit);
    }
  };

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
          <DailyTaskCardContainer>
            {/* @ts-ignore */}
            <DailyTaskInfo isOdd={isOdd}>
              <h1>{title}</h1>
              <h2>{amount}</h2>
            </DailyTaskInfo>
            <DailyTaskStatus>
              <TaskReward>
                <img src="/images/userdashboard/credit.png" alt="credit" />
                <p>{credit}</p>
              </TaskReward>
              {/* @ts-ignore */}
              <StatusBtn
                isOdd={isOdd}
                onClick={() => {
                  proceedToPayment(credit);
                }}
              >
                {!isOdd ? "GO" : "CLAIM"}
              </StatusBtn>
            </DailyTaskStatus>
          </DailyTaskCardContainer>
        );
      }}
    </ConnectButton.Custom>
  );
};
