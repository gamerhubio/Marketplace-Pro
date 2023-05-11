import React from "react";
import {
  CloseBtn,
  EditProfileDialogContainer,
  EditProfileHeader,
  EditProfileWrapper,
  ProfileAvatar,
  ProfileEmail,
  ProfileForm,
  ProfileName,
  ResetData,
  SaveBtn,
} from "./styles";

export const EditProfileDialogComponent: React.FC = () => {
  return (
    <EditProfileDialogContainer>
      <EditProfileWrapper>
        <EditProfileHeader>
          <CloseBtn>*</CloseBtn>
          <p>Edit Profile</p>
          <SaveBtn>Save</SaveBtn>
        </EditProfileHeader>
        <ProfileAvatar>
          <img src="" alt="" />
          <p>Change avatar</p>
        </ProfileAvatar>
        <ProfileForm>
          <ProfileName>
            <p>Profile Name</p>
          </ProfileName>
          <ProfileEmail>
            <p>Email Address</p>
          </ProfileEmail>
          <ResetData>
            <p>Reset Data</p>
          </ResetData>
        </ProfileForm>
      </EditProfileWrapper>
    </EditProfileDialogContainer>
  );
};
