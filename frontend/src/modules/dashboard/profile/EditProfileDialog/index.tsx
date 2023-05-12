import React from "react";
import {
  EditProfileDialogContainer,
  EditProfileHeader,
  EditProfileTitle,
  EditProfileWrapper,
  ProfileAvatar,
  ProfileEmail,
  ProfileForm,
  ProfileName,
  ResetData,
  SaveBtn,
} from "./styles";
import { Input } from "../../../../components";

interface iEditModal {
  visible?: boolean;
  handleModalVisible?: Function | undefined;
}

const EditProfileDialogComponent: React.FC<iEditModal> = ({
  visible,
  handleModalVisible,
}) => {
  const handleBgVisible = () => {
    if (typeof handleModalVisible === "function") {
      handleModalVisible();
    }
  };
  return (
    <>
      {visible && (
        <>
          <EditProfileDialogContainer onClick={handleBgVisible} />
          <EditProfileWrapper>
            <EditProfileHeader>
              <EditProfileTitle>
                <img
                  src="/images/userdashboard/editprofile/cancel.png"
                  alt=""
                  onClick={handleBgVisible}
                />
                <p>Edit Profile</p>
              </EditProfileTitle>
              <SaveBtn>Save</SaveBtn>
            </EditProfileHeader>
            <ProfileAvatar>
              <img
                src="/images/userdashboard/editprofile/editavatar.png"
                alt=""
              />
              <p>Change avatar</p>
            </ProfileAvatar>
            <ProfileForm>
              <ProfileName>
                <p>Profile Name</p>
                <Input placeholder="Gamer 1" />
              </ProfileName>
              <ProfileEmail>
                <p>Email Address</p>
                <Input placeholder="Femi@gamer-hub.io" />
              </ProfileEmail>
              <ResetData>
                <p>Reset Data</p>
                <img src="/images/userdashboard/editprofile/reset.png" alt="" />
              </ResetData>
            </ProfileForm>
          </EditProfileWrapper>
        </>
      )}
    </>
  );
};

export default EditProfileDialogComponent;
