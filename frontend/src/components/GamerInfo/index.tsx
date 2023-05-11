import React from "react";
import {
  FollowSection,
  Followers,
  Following,
  GamerAvatar,
  GamerInfo,
  GamerLevelInfo,
  GamerMainInfo,
  InfoSection,
} from "./styles";

export const GamerInfoComponent: React.FC = () => {
  return (
    <GamerInfo>
      <GamerAvatar>
        <img
          src="/images/userdashboard/GamerAvatar_big.png"
          alt="avatar image"
        />
      </GamerAvatar>
      <InfoSection>
        <GamerMainInfo>
          <h1>Gamer1</h1>
          <p>femi@gamerhub.io</p>
        </GamerMainInfo>
        <FollowSection>
          <Followers>
            <h6>Followers</h6>
            <p>40</p>
          </Followers>
          <Following>
            <h6>Following</h6>
            <p>62</p>
          </Following>
        </FollowSection>
        <GamerLevelInfo>
          <span>Top Gamer </span>
          <img src="/images/userdashboard/stargroup.png" alt="" />
        </GamerLevelInfo>
      </InfoSection>
    </GamerInfo>
  );
};
