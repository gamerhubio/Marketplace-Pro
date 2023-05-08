import React from "react";
import {
  ProfileAvatarWrapper,
  ProfileInfo,
  ProfileInfoWrapper,
  ProfileWrapper,
} from "./styles";
import { IconDropdown } from "../SVGs";

export const ProfileAvatar: React.FC = () => {
  return (
    <ProfileWrapper>
      <ProfileAvatarWrapper>
        <img src="/images/userdashboard/GamerAvatar.png" alt="" />
        <ProfileInfoWrapper>
          <ProfileInfo>
            <h2>Gamer 1</h2>
            <p>
              Top Gamer <img src="/images/userdashboard/stargroup.png" alt="" />
            </p>
          </ProfileInfo>
          <div>
            <IconDropdown />
          </div>
        </ProfileInfoWrapper>
      </ProfileAvatarWrapper>
    </ProfileWrapper>
  );
};
