import React from "react";
import {
  MainItemInfo,
  RecentImage,
  RecentInfoItemContainer,
  RecentInfoItemWrapper,
  ViewItem,
} from "./styles";

export type RecentInfoItemProps = {
  image: string;
  name: string;
  type: string;
};

export const RecentInfoItem: React.FC<RecentInfoItemProps> = ({
  image,
  name,
  type,
}) => {
  return (
    <RecentInfoItemContainer>
      <RecentInfoItemWrapper>
        <RecentImage>
          <img src={image} alt="" />
        </RecentImage>
        <MainItemInfo>
          <h1>{name}</h1>
          <h3>{type}</h3>
        </MainItemInfo>
      </RecentInfoItemWrapper>
      <ViewItem>
        <p>View {type === "NFT" ? "NFT" : "game"}</p>
        <img src="/images/userdashboard/right.png" alt="" />
      </ViewItem>
    </RecentInfoItemContainer>
  );
};
