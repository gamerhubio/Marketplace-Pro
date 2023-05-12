import React, { useEffect, useState } from "react";
import {
  FollowSection,
  Followers,
  Following,
  GamerAvatar,
  GamerInfoWrapper,
  GamerLevelInfo,
  GamerMainInfo,
  InfoSection,
} from "./styles";
import { useGlobalState } from "../../store";

interface IUser {
  email: string;
  username: string;
}
export const GamerInfo: React.FC = () => {
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
    <GamerInfoWrapper>
      <GamerAvatar>
        <img
          src="/images/userdashboard/GamerAvatar_big.png"
          alt="avatarImage"
        />
      </GamerAvatar>
      <InfoSection>
        <GamerMainInfo>
          <h1>{username}</h1>
          <p>{email}</p>
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
    </GamerInfoWrapper>
  );
};
