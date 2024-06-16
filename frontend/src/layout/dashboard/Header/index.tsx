import React, { useEffect, useState } from "react";
import {
  AlarmWrapper,
  CreditWrapper,
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
import { BASE_URL, getFormatWalletAddress } from "../../../utils";
import { DailyTaskModal } from "../DailyTaskModal";
import { getUserData } from "../../../scripts/user";
import { ConnectButton, useAccount } from "@particle-network/connect-react-ui";
import useAuthState from "../../../hooks/useAuthState";
import { useDispatch, useSelector } from "react-redux";
import { getNewAcct, setCredit, setLastRewardTime } from "../../../store/slices/authSlice";

type HeaderProps = {
  onSidebar: () => void;
};

export const Header: React.FC<HeaderProps> = ({ onSidebar }) => {
  const [walletAddress, setWalletAddress] = useState("");
  const [screenWidth, setScreenWidth] = useState(0);
  const [searchShow, setSearchShow] = useState(false);
  const [visible, setVisible] = useState(false);
  const address = useAccount();
  const [showModal, setShowModal] = useState(false)
  const { userData, lastRewardTime, credit, authRequest } = useAuthState()
  const isNewAcct = useSelector(getNewAcct)
  const dispatch = useDispatch()

  useEffect(() => {
    if (address) setWalletAddress(address);
  }, [address]);

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
      <div style={{ display: "none" }}>
        <ConnectButton />
      </div>
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
            show={searchShow}>
            <input type="text" placeholder="Search.." />
            <img src="/images/userdashboard/btn_search.png" alt="" />
          </SearchInputWrapper>

          <HeaderActionsWrapper>

          { userData &&
            <CreditWrapper>
              <img src="/images/games/credit.png" width={24} height={24} />
              <p>{credit}GC</p>
              <button onClick={() => setVisible(true)}>
              <img src="/images/games/add.png" width={24} height={24} />
              </button>
            </CreditWrapper>
          }
  
          {/* <TaskWrapper onClick={() => setVisible(true)}>
              <img src="/images/userdashboard/credit.png" alt="" />
              <span>{data.credit}</span>
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
            </WalletButtonWrapper> */}
            <ProfileAvatar />
          </HeaderActionsWrapper>
        </HeaderRightSection>
      </DashboardHeaderWrapper>
      <DailyTaskModal visible={visible} onClose={() => setVisible(false)} />
    </React.Fragment>
  );
};
