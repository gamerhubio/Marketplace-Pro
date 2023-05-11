import React, { useEffect } from "react";
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

export const EditProfileDialog: React.FC<iEditModal> = ({
  visible,
  handleModalVisible,
}) => {
  useEffect(() => {
    document.documentElement.style.overflow = visible ? "hidden" : "auto";
  }, [visible]);

  const handleBgVisible = () => {
    if (typeof handleModalVisible === "function") {
      handleModalVisible();
    }
  };
  return (
    <React.Fragment>
      <EditProfileDialogContainer onClick={handleBgVisible} visible={visible} />
      <EditProfileWrapper visible={visible}>
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
          <img src="/images/userdashboard/editprofile/editavatar.png" alt="" />
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
    </React.Fragment>
  );
};
