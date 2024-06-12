import React, { useEffect, useState } from "react";
import {
  DropdownWrapper,
  ProfileAvatarWrapper,
  ProfileInfo,
  ProfileInfoWrapper,
  ProfileWrapper,
} from "./styles";
import { IconDropdown } from "../SVGs";
import { useNavigate } from "react-router-dom";
import { ConnectButton } from "@particle-network/connect-react-ui";
import useAuthState from "../../hooks/useAuthState";
import { useDispatch } from "react-redux";
import { logout } from "../../store/slices/authSlice";

export const ProfileAvatar: React.FC = () => {

  const router = useNavigate();
  const dispatch = useDispatch()
  const [visible, setVisible] = useState(false);


  const { userData } = useAuthState()

  const logoutAction = () => {
    dispatch(logout())
    //router("/app/signin");
  };

  if (!userData) return

  return (
    // <ConnectButton.Custom>
    //   {({
    //     account,
    //     chain,
    //     openAccountModal,
    //     openConnectModal,
    //     openChainModal,
    //     accountLoading,
    //   }) => {
    //     return (
    <ProfileWrapper>
      {/* @ts-ignore */}
      <ProfileAvatarWrapper onClick={() => setVisible((prev) => !prev)}>
        <img src="/images/userdashboard/GamerAvatar.png" alt="" />
        <ProfileInfoWrapper>
          <ProfileInfo>
            <h2>{userData?.username}</h2>
            <p>
              Top Gamer <img src="/images/userdashboard/stargroup.png" alt="" />
            </p>
          </ProfileInfo>
          <div>
            <IconDropdown />
          </div>
        </ProfileInfoWrapper>
      </ProfileAvatarWrapper>
      {/* @ts-ignore */}
      <DropdownWrapper visible={visible}>
        <span
          onClick={() => {
            setVisible(false);
            router("/dashboard/profile");
          }}
        >
          Profile
        </span>
        <span onClick={logoutAction}>Logout</span>
      </DropdownWrapper>
    </ProfileWrapper>
  );
  // }}
  //   </ConnectButton.Custom>
  // );
};
