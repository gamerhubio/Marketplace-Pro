import React from "react";
import { LandingLayout } from "../../layout";
import {
  GamerHubSection,
  HomeSection,
  ReinventingSection,
  RoadmapSection,
  TeamSection,
  TokenSection,
} from "../../modules";
import { ScrollTop } from "../../components";
import "./styles.css"
import { FeatureSection } from "../../modules/landing/feature";
import { EcosystemSection } from "../../modules/landing/ecosystem";
import { PartnersSection } from "../../modules/landing/partners";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init({duration: 800});

const LandingPage: React.FC = () => {
  return (
    <LandingLayout>
      <HomeSection />
      <ReinventingSection />
      <GamerHubSection />
      <FeatureSection />
      {/* <StreamingSection /> */}
      {/* <MarketplaceSection /> */}
      {/* <MerchStoreSection /> */}
      <EcosystemSection />
      <TokenSection />
      <RoadmapSection />
      <PartnersSection />
      <TeamSection />
      <ScrollTop />
    </LandingLayout>
  );
};


export default LandingPage