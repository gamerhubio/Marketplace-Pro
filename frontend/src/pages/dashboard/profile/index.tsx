import React, { useState } from "react";
import { DashboardLayout } from "../../../layout";

import {
  DashboardWrapper,
  EditProfileSection,
  FavoriteMark,
  GameListWrapper,
  GamerProfileWrapper,
  MainContentContainer,
  RightSideBarContainer,
} from "./styles";
import {
  EditProfileDialog,
  FavoriteList,
  GamerList,
  RecentList,
} from "../../../modules/dashboard";
import { GamerInfo } from "../../../components";

export const DashboardProfilePage: React.FC = () => {
  const [showEditProfile, setShowEditProfile] = useState<boolean>(false);

  const handleModalVisible = () => {
    setShowEditProfile(false);
  };
  return (
    <DashboardLayout>
      <DashboardWrapper>
        <MainContentContainer>
          <GamerProfileWrapper>
            <GamerInfo />
            <EditProfileSection
              onClick={() => {
                setShowEditProfile(true);
              }}
            >
              <p>Edit Profile</p>
              <img
                src="/images/userdashboard/fluent_edit-16-filled.png"
                alt="right arrow"
              />
            </EditProfileSection>
          </GamerProfileWrapper>
          <GameListWrapper>
            <FavoriteMark>
              <span>Favorites</span>
              <img src="/images/userdashboard/dropdown.png" alt="" />
            </FavoriteMark>
            <FavoriteList />
          </GameListWrapper>
        </MainContentContainer>
        <RightSideBarContainer>
          <GamerList />
          <RecentList type="NFT" />
          <RecentList type="game" />
        </RightSideBarContainer>
      </DashboardWrapper>
      <EditProfileDialog
        visible={showEditProfile}
        handleModalVisible={handleModalVisible}
      />
    </DashboardLayout>
  );
};
