import React from "react";
import { TeamMemberCardGroupWrapper, TeamSectionWrapper } from "./styles";
import { teamData } from "../data";
import { TeamMemberCard } from "../../../components";

export const TeamSection: React.FC = () => {
  return (
    <TeamSectionWrapper>
      <h1 data-aos="slide-right"> <strong> Meet </strong> The Team</h1>
      <p data-aos="slide-left">
        The executive and development team experience spans the gaming,
        blockchain, IT, and finance industries. Each team member is highly
        accomplished in their respective fields and holds a role that leverages
        their skillset.
      </p>
      <TeamMemberCardGroupWrapper>
        {teamData.map((item, key) => (
          <TeamMemberCard key={key} {...item} />
        ))}
      </TeamMemberCardGroupWrapper>
    </TeamSectionWrapper>
  );
};
