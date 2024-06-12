import React, { FormEvent, useEffect, useState } from "react";
import { AppLayout } from "../../../layout";
import {
  AppButton,
  Button,
  IconCheck,
  IconDropdown,
  IconWalletConnect,
} from "../../../components";
import { getFormatWalletAddress } from "../../../utils";
import {
  AppSubscriptionPageWrapper,
  CardHeader,
  GamerAvatar,
  GamerDesc,
  GamerPlanWrapper,
  PlanCardGroupWrapper,
  PlanCardWrapper,
} from "./styles";
import { subscriptionData } from "../data";
import { useNavigate } from "react-router-dom";
import {
  ConnectButton,
  useAccount,
  useParticleProvider,
} from "@particle-network/connect-react-ui";
import { subscribe } from "../../../scripts/blockchainServices";
import useAuthState from "../../../hooks/useAuthState";

interface IUser {
  id: string;
  email: string;
  username: string;
}

export const AppSubScriptionPage: React.FC = () => {
  const router = useNavigate();
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const address = useAccount();
  const { userData } = useAuthState()
  //hooks
  const provider = useParticleProvider();

  const makeSubscription = (e: FormEvent, plan: number, amt: string) => {
    e.preventDefault();
    if (provider) {
      //make subscription
      subscribe(
        plan,
        amt,
        provider,
        userData?.email,
        userData?.username
      );
    }
  };

  useEffect(() => {
    if (address) setWalletAddress(address);
  }, [address]);

  return (
    <AppLayout
      buttonContent={
        walletAddress ? (
          <AppButton onClick={() => {}}>
            <IconWalletConnect />
            <span>{getFormatWalletAddress(walletAddress)}</span>
            <IconDropdown />
          </AppButton>
        ) : (
          <AppButton onClick={() => router("/app/wallet-connect")}>
            <IconWalletConnect />
            <span>Connect wallet</span>
            <IconDropdown />
          </AppButton>
        )
      }
    >
      <div style={{ display: "none" }}>
        {" "}
        <ConnectButton />
      </div>
      <AppSubscriptionPageWrapper>
        <h1>
          <span>Flexible</span> Plans
        </h1>
        <p>{"Choose a plan that works best for you based on your device(s)"}</p>
        <PlanCardGroupWrapper>
          {subscriptionData.map((item, key) => (
            <PlanCardWrapper key={key} className={key === 1 ? "top-card" : ""}>
              <CardHeader>
                <GamerAvatar
                  color={item.color}
                  className={key === 1 ? "top-card-avatar" : ""}
                />
                <GamerDesc>
                  <h3>{item.title}</h3>
                  <h4>
                    <span>$</span>
                    {item.price}
                  </h4>
                </GamerDesc>
              </CardHeader>
              <GamerPlanWrapper>
                {item.plan.map((pItem, pKey) => (
                  <div key={pKey}>
                    <div>
                      <IconCheck />
                    </div>
                    {pItem}
                  </div>
                ))}
              </GamerPlanWrapper>
              <Button
                onClick={(e) => makeSubscription(e, key, item.BNBPrice)}
                width={207}
                height={58}
                fSize={18}
              >
                Choose Plan
              </Button>
            </PlanCardWrapper>
          ))}
        </PlanCardGroupWrapper>
      </AppSubscriptionPageWrapper>
    </AppLayout>
  );
};
