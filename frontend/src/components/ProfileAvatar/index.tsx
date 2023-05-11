import React, { useState } from "react";
import {
  DropdownWrapper,
  ProfileAvatarWrapper,
  ProfileInfo,
  ProfileInfoWrapper,
  ProfileWrapper,
} from "./styles";
import { IconDropdown } from "../SVGs";
import { useNavigate } from "react-router-dom";

export const ProfileAvatar: React.FC = () => {
  const router = useNavigate();
  const [visible, setVisible] = useState(false);
  return (
    <ProfileWrapper>
      <ProfileAvatarWrapper onClick={() => setVisible((prev) => !prev)}>
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
      <DropdownWrapper visible={visible}>
        <span
          onClick={() => {
            setVisible(false);
            router("/dashboard/profile");
          }}
        >
          Profile
        </span>
        <span
          onClick={() => {
            setVisible(false);
            router("/");
          }}
        >
          Logout
        </span>
      </DropdownWrapper>
    </ProfileWrapper>
  );
};
