import React from "react";
import { ImgWrapper, InfoWrapper, MemberCardWrapper } from "./styles";

type CardProps = {
  img: string;
  name: string;
  role: string;
};

export const TeamMemberCard: React.FC<CardProps> = ({ img, name, role }) => {
  return (
    <MemberCardWrapper>
      <ImgWrapper>
        <img src={img} alt="" />
      </ImgWrapper>
      <InfoWrapper>
        <h4>{name}</h4>
        <p>{role}</p>
      </InfoWrapper>
    </MemberCardWrapper>
  );
};
