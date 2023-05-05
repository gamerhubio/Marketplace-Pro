import React from "react";
import { LandingLayout } from "../../layout";
import {
  GamerHubSection,
  HomeSection,
  MarketplaceSection,
  MerchStoreSection,
  ReinventingSection,
  RoadmapSection,
  StreamingSection,
  TokenSection,
} from "../../modules";

export const LandingPage: React.FC = () => {
  return (
    <LandingLayout>
      <HomeSection />
      <ReinventingSection />
      <GamerHubSection />
      <StreamingSection />
      <MarketplaceSection />
      <MerchStoreSection />
      <TokenSection />
      <RoadmapSection />
    </LandingLayout>
  );
};
