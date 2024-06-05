import React from "react";
import { ImgWrapper, InfoWrapper, MemberCardWrapper } from "./styles";

type CardProps = {
  img: string;
  name: string;
  role: string;
  linkedin: string;
};

export const TeamMemberCard: React.FC<CardProps> = ({ img, name, role, linkedin }) => {
  return (
    <MemberCardWrapper>
      <ImgWrapper>
        <img src={img} alt="" />
      </ImgWrapper>
      <InfoWrapper>
        <h4>
          <a rel="noreferrer" target="_blank" href={linkedin}>{name}</a>
        </h4>
        <p>{role}</p>
      </InfoWrapper>
    </MemberCardWrapper>
  );
};
