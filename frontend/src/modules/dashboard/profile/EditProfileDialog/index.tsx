import React, { FormEvent, useEffect, useState } from "react";
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
import { updateUser } from "../../../../scripts/user";
import useAuthState from "../../../../hooks/useAuthState";

interface iEditModal {
  visible?: boolean;
  handleModalVisible?: Function | undefined;
}

export const EditProfileDialog: React.FC<iEditModal> = ({
  visible,
  handleModalVisible,
}) => {

  const { userData } = useAuthState() 

  const [email, setEmail] = useState<string>(userData?.email);
  const [username, setUsername] = useState<string>(userData?.username);

  useEffect(() => {
    document.documentElement.style.overflow = visible ? "hidden" : "auto";
  }, [visible]);

  const handleBgVisible = () => {
    if (typeof handleModalVisible === "function") {
      handleModalVisible();
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const data = {
      email,
      username,
    };

    updateUser(data)
      .then((data) => {
        //@ts-ignore
        if (!data.error && data) {
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
          <SaveBtn onClick={handleSubmit}>Save</SaveBtn>
        </EditProfileHeader>
        <ProfileAvatar>
          <img src="/images/userdashboard/editprofile/editavatar.png" alt="" />
          <p>Change avatar</p>
        </ProfileAvatar>
        <ProfileForm>
          <ProfileName>
            <p>Profile Name</p>
            <Input
              placeholder="Gamer 1"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </ProfileName>
          <ProfileEmail>
            <p>Email Address</p>
            <Input
              placeholder="Femi@gamer-hub.io"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </ProfileEmail>
          <ResetData
            onClick={() => {
              setEmail("");
              setUsername("");
            }}
          >
            <p>Reset Data</p>
            <img src="/images/userdashboard/editprofile/reset.png" alt="" />
          </ResetData>
        </ProfileForm>
      </EditProfileWrapper>
    </React.Fragment>
  );
};
