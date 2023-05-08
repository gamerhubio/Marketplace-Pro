import React, { useEffect, useState } from "react";
import {
  DashboardHeaderWrapper,
  HeaderActionsWrapper,
  MLogo,
  MMenu,
  SearchInputWrapper,
} from "./styles";
import {
  AppButton,
  IconDropdown,
  IconMenu,
  IconWalletConnect,
  ProfileAvatar,
} from "../../../components";
import { getFormatWalletAddress } from "../../../utils";

type HeaderProps = {
  onSidebar: () => void;
};

export const Header: React.FC<HeaderProps> = ({ onSidebar }) => {
  const walletAddress = "0x8396Cf380b556fFA3B4025530bB03aaf09bd5C2F";
  const [screenWidth, setScreenWidth] = useState(0);
  const [searchShow, setSearchShow] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  return (
    <DashboardHeaderWrapper>
      <div onClick={onSidebar}>
        <MMenu>
          <IconMenu />
        </MMenu>
        <MLogo>
          <img src="/images/userdashboard/text-logo.png" alt="" />
        </MLogo>
      </div>
      <SearchInputWrapper
        onMouseEnter={() => setSearchShow(true)}
        onMouseLeave={() => setSearchShow(false)}
        show={searchShow}
      >
        <input type="text" placeholder="Search.." />
        <img src="/images/userdashboard/btn_search.png" alt="" />
      </SearchInputWrapper>
      <HeaderActionsWrapper>
        <div>
          <ProfileAvatar />
        </div>
        <AppButton
          onClick={() => {}}
          className={screenWidth > 650 ? "" : "mobile"}
        >
          <IconWalletConnect />
          {screenWidth > 650 && (
            <span>{getFormatWalletAddress(walletAddress)}</span>
          )}
          {screenWidth > 650 && <IconDropdown />}
        </AppButton>
      </HeaderActionsWrapper>
    </DashboardHeaderWrapper>
  );
};
