import React from "react";
import {
  GamerListContainer,
  GamerListHeader,
  GamerListUserInfoWrapper,
  ViewMoreBtn,
} from "./styles";
import { GamerListInfo } from "./data";
import { UserInfoItem } from "../../../../components/UserInfoItem";

export const GamerList: React.FC = () => {
  return (
    <GamerListContainer>
      <GamerListHeader>
        <span>Gamer</span>
        <ViewMoreBtn>
          <span>View more</span>
          <img src="/images/userdashboard/right.png" alt="" />
        </ViewMoreBtn>
      </GamerListHeader>
      <GamerListUserInfoWrapper>
        {GamerListInfo.map((item, key) => (
          <UserInfoItem
            key={key}
            avatar={item.avatar}
            name={item.name}
            level={item.level}
          />
        ))}
      </GamerListUserInfoWrapper>
    </GamerListContainer>
  );
};
