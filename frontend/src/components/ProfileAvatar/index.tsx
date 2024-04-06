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
import { useGlobalState } from "../../store";
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

  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openConnectModal,
        openChainModal,
        accountLoading,
      }) => {
        return (
          <ProfileWrapper>
            <ProfileAvatarWrapper onClick={() => setVisible((prev) => !prev)}>
              <img src="/images/userdashboard/GamerAvatar.png" alt="" />
              <ProfileInfoWrapper>
                <ProfileInfo>
                  <h2>{username}</h2>
                  <p>
                    Top Gamer{" "}
                    <img src="/images/userdashboard/stargroup.png" alt="" />
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
                onClick={
                  //setVisible(false);
                  //router("/");
                  openAccountModal
                }
              >
                Logout
              </span>
            </DropdownWrapper>
          </ProfileWrapper>
        );
      }}
    </ConnectButton.Custom>
  );
};
