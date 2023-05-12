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
import { GamerInfoComponent } from "../../../components/GamerInfo";
import { GamerListComponent } from "../../../modules/dashboard/profile/GamerList";
import { RecentListComponent } from "../../../modules/dashboard/profile/RecentList";
import { FavoriteListComponent } from "../../../modules/dashboard/profile/FavoriteList";
import EditProfileDialogComponent from "../../../modules/dashboard/profile/EditProfileDialog";

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
            <GamerInfoComponent />
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
            <FavoriteListComponent />
          </GameListWrapper>
        </MainContentContainer>
        <RightSideBarContainer>
          <GamerListComponent />
          <RecentListComponent type="NFT" />
          <RecentListComponent type="game" />
        </RightSideBarContainer>
      </DashboardWrapper>
      <EditProfileDialogComponent
        visible={showEditProfile}
        handleModalVisible={handleModalVisible}
      />
    </DashboardLayout>
  );
};
