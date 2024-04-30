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
  TeamSection,
  TokenSection,
} from "../../modules";
import { ScrollTop } from "../../components";

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
      {/* <RoadmapSection /> */}
      <TeamSection />
      <ScrollTop />
    </LandingLayout>
  );
};
