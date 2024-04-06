import React from "react";
import {
  FollowBtn,
  MainUserInfo,
  UserAvatar,
  UserInfoItemContainer,
  UserInfoItemWrapper,
} from "./styles";

export type UserInfoItemProps = {
  avatar: string;
  name: string;
  level: string;
};

export const UserInfoItem: React.FC<UserInfoItemProps> = ({
  avatar,
  name,
  level,
}) => {
  return (
    <UserInfoItemContainer>
      <UserInfoItemWrapper>
        <UserAvatar>
          <img src={avatar} alt="user avatar" />
        </UserAvatar>
        <MainUserInfo>
          <h1>{name}</h1>
          <h3>{level}</h3>
          <img src="" alt="" />
        </MainUserInfo>
      </UserInfoItemWrapper>
      <FollowBtn>Follow</FollowBtn>
    </UserInfoItemContainer>
  );
};
