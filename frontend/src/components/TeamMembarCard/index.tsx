import React from "react";
import { ImgWrapper, InfoWrapper, MemberCardWrapper } from "./styles";
import { FaDiscord, FaLinkedin } from "react-icons/fa6";

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
        <h4>{name}</h4>
        <p>
          {role}
        </p>
        <div>
          <a rel="noreferrer" target="_blank" href={linkedin}>
            <FaLinkedin size={20} />
          </a>
        </div>
      </InfoWrapper>
    </MemberCardWrapper>
  );
};
