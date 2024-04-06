import React from "react";
import {
  CardContainer,
  CardDescription,
  CardTitle,
  TokenomicsCardWrapper,
} from "./styles";

type CardProps = {
  img: string;
  title: string;
  description: string;
};

export const TokenomicsCard: React.FC<CardProps> = ({
  img,
  title,
  description,
}) => {
  return (
    <TokenomicsCardWrapper>
      <CardContainer>
        <img src={img} alt="" />
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContainer>
      <img src={img} alt="" />
    </TokenomicsCardWrapper>
  );
};
