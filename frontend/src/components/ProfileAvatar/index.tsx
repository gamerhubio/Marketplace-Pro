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
import {
  setGlobalState,
  setIsAuthenticated,
  useGlobalState,
} from "../../store";
import { ConnectButton } from "@particle-network/connect-react-ui";

export const ProfileAvatar: React.FC = () => {
  const router = useNavigate();
  const [visible, setVisible] = useState(false);

  const [currentUser] = useGlobalState("currentUser");

  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");

  useEffect(() => {
    //@ts-ignore
    setEmail(currentUser.email);
    //@ts-ignore
    setUsername(currentUser.username);
  }, [currentUser]);

  const logout = () => {
    setIsAuthenticated(false);
    setGlobalState("currentUser", {});
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    router("/app/signin");
  };

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
            <h2>{username}</h2>
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
        <span onClick={() => logout()}>Logout</span>
      </DropdownWrapper>
    </ProfileWrapper>
  );
  // }}
  //   </ConnectButton.Custom>
  // );
};
