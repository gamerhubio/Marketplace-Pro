import React from "react";
import { PartnerSectionWrapper, PartnersWrapper } from "./styles";
import kangeroo from "./assets/kangaro.png"
import bnb from "./assets/bnb.png"
import venidium from "./assets/venidium.png"
import cadu from "./assets/cadu.png"
import xt from "./assets/xt.png"
import hash from "./assets/hash-up.png"

import mindspace from "./assets/mindspace.png"
import hauted from "./assets/haunted-space.png"
import blackwater from "./assets/blackwater.png"
import metashooter from "./assets/meta-shooter.png"
import drive from "./assets/drive.png"

import ikon from "./assets/ikon.png"
import pirate from "./assets/pirate.png"
import talent from "./assets/talent.png"
import metarace from "./assets/metarace.png"
import revo from "./assets/revo.png"
import war from "./assets/war.png"

export const PartnersSection: React.FC = () => {
  return (
    <PartnerSectionWrapper>
      <PartnersWrapper>
        <h1> <strong>Partners</strong> and Backers </h1>

        <div>
          <img src={kangeroo} alt="Kangaro DAO" />
          <img src={bnb} alt="BNBChain" />
          <img src={venidium} alt="Venidium" />
          <img src={cadu} alt="cadu" />
          <img src={xt} alt="xt.com" />
          <img src={hash} alt="hash up" />
        </div>

        <div>
          <img src={mindspace} alt="Mindspace" />
          <img src={hauted} alt="Hauted Space" />
          <img src={blackwater} alt="Castle of Blackwater" />
          <img src={metashooter} alt="Meta Shooter" />
          <img src={drive} alt="Drive" />
        </div>

        <div>
          <img src={ikon} alt="Ikon" />
          <img src={pirate} alt="Pirate" />
          <img src={talent} alt="Talent" />
          <img src={metarace} alt="Meta Race" />
          <img src={revo} alt="Revo" />
          <img src={war} alt="war" />
        </div>
      </PartnersWrapper>
    </PartnerSectionWrapper>
  );
};
