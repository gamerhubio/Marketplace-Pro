import React from "react";
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

export const AppSubScriptionPage: React.FC = () => {
  const walletAddress = "0x8396Cf380b556fFA3B4025530bB03aaf09bd5C2F";
  return (
    <AppLayout
      buttonContent={
        <AppButton onClick={() => {}}>
          <IconWalletConnect />
          <span>{getFormatWalletAddress(walletAddress)}</span>
          <IconDropdown />
        </AppButton>
      }
    >
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
                  <p key={pKey}>
                    <div>
                      <IconCheck />
                    </div>
                    {pItem}
                  </p>
                ))}
              </GamerPlanWrapper>
              <Button onClick={() => {}} width={207} height={58} fSize={18}>
                Choose Plan
              </Button>
            </PlanCardWrapper>
          ))}
        </PlanCardGroupWrapper>
      </AppSubscriptionPageWrapper>
    </AppLayout>
  );
};
