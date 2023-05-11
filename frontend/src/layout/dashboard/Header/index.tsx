import React, { useEffect, useState } from "react";
import {
  AlarmWrapper,
  DashboardHeaderWrapper,
  HeaderActionsWrapper,
  HeaderRightSection,
  MLogo,
  MMenu,
  SearchInputWrapper,
  TaskWrapper,
  WalletButtonWrapper,
} from "./styles";
import {
  AppButton,
  IconAdd,
  IconAlarm,
  IconDropdown,
  IconMenu,
  IconWalletConnect,
  ProfileAvatar,
} from "../../../components";
import { getFormatWalletAddress } from "../../../utils";
import { DailyTaskModal } from "../DailyTaskModal";

type HeaderProps = {
  onSidebar: () => void;
};

export const Header: React.FC<HeaderProps> = ({ onSidebar }) => {
  const walletAddress = "0x8396Cf380b556fFA3B4025530bB03aaf09bd5C2F";
  const [screenWidth, setScreenWidth] = useState(0);
  const [searchShow, setSearchShow] = useState(false);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = visible ? "hidden" : "auto";
    document.documentElement.scrollTop = 0;
  }, [visible]);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  return (
    <React.Fragment>
      <DashboardHeaderWrapper>
        <div onClick={onSidebar}>
          <MMenu>
            <IconMenu />
          </MMenu>
          <MLogo>
            <img src="/images/userdashboard/text-logo.png" alt="" />
          </MLogo>
        </div>
        <HeaderRightSection>
          <SearchInputWrapper
            onMouseEnter={() => setSearchShow(true)}
            onMouseLeave={() => setSearchShow(false)}
            show={searchShow}
          >
            <input type="text" placeholder="Search.." />
            <img src="/images/userdashboard/btn_search.png" alt="" />
          </SearchInputWrapper>
          <HeaderActionsWrapper>
            <TaskWrapper onClick={() => setVisible(true)}>
              <img src="/images/userdashboard/credit.png" alt="" />
              <span>10K</span>
              <IconAdd />
            </TaskWrapper>
            <AlarmWrapper>
              <IconAlarm />
            </AlarmWrapper>
            <WalletButtonWrapper>
              <AppButton
                onClick={() => {}}
                className={screenWidth > 1240 ? "" : "mobile"}
              >
                <IconWalletConnect />
                {screenWidth > 1240 && (
                  <span>{getFormatWalletAddress(walletAddress)}</span>
                )}
                {screenWidth > 1240 && <IconDropdown />}
              </AppButton>
            </WalletButtonWrapper>
            <ProfileAvatar />
          </HeaderActionsWrapper>
        </HeaderRightSection>
      </DashboardHeaderWrapper>
      <DailyTaskModal visible={visible} onClose={() => setVisible(false)} />
    </React.Fragment>
  );
};
