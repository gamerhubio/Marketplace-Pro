import React, { useEffect, useState } from "react";
import {
  DailyTaskModalBG,
  DailyTaskModalContent,
  DailyTaskModalHeader,
  DailyTaskModalWrapper,
  ModalTabList,
  ModalTitle,
  TabButton,
} from "./styles";
import { DailyTaskCard, IconScrollTop } from "../../../components";
import { taskDailyData, taskmodalTab } from "../data";
import { setCredit, setLastRewardTime } from "../../../store/slices/authSlice";
import { BASE_URL } from "../../../utils";
import useAuthState from "../../../hooks/useAuthState";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import ModalWrapper from "../../../components/AuthModals/ModalWrapper";
import Reward from "../../../components/AuthModals/Reward";

type ModalProps = {
  visible: boolean;
  onClose: () => void;
};

export const DailyTaskModal: React.FC<ModalProps> = ({ visible, onClose }) => {

  const [tab, setTab] = useState("daily");
  const [screenWidth, setScreenWidth] = useState(0);
  const [showModal, setShowModal] = useState(false)
  const { credit, lastRewardTime, userData, authRequest } = useAuthState()
  const  [loading, setLoading] = useState(false)


  const dispatch = useDispatch()

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };


  const canClaimLogin = () => {
    const DAY = 24 * 3600 * 1000
    const currentTime = Date.now()
    if (lastRewardTime + DAY <= currentTime && userData) return true
    return false
  }

  const claimTokens = async() =>  {
    const DAY = 24 * 3600 * 1000
    const currentTime = Date.now()
    if (lastRewardTime + DAY <= currentTime && userData) {
      try {
        setLoading(true)
        await authRequest().patch(BASE_URL + "/users/reward/" + userData?.id)
        setShowModal(true)
        dispatch(setLastRewardTime())
        dispatch(setCredit(credit + 10))
      } catch (e) {
        toast.error(e.response.data.msg)
        if (e.response.data.msg === "User already rewarded") {
          dispatch(setLastRewardTime())
        }
      }
      setLoading(false)
    } else {
      
    }
  }
  return (
    <React.Fragment>
      <DailyTaskModalBG
        onClick={screenWidth > 600 ? onClose : () => {}}
        visible={visible}
      />
      <DailyTaskModalWrapper visible={visible}>
        <img
          src="/images/userdashboard/close-btn.png"
          className="close-btn"
          onClick={onClose}
          alt=""
        />
        <DailyTaskModalHeader>
          <ModalTitle onClick={screenWidth <= 600 ? onClose : () => {}}>
            <div>
              <IconScrollTop />
            </div>
            <span>EARN GAMERHUB CREDITS</span>
          </ModalTitle>
          <ModalTabList>
            {taskmodalTab.map((item, key) => (
              <TabButton
                key={key}
                active={item.key === tab}
                onClick={() => setTab(item.key)}
              >
                {item.label}
              </TabButton>
            ))}
          </ModalTabList>
        </DailyTaskModalHeader>
        <DailyTaskModalContent>

          <DailyTaskCard claimed={true} title="Sign Up" amount = "1/1" credit={20} isOdd={true} handleClick={() => console.log("nothing")} />
          <DailyTaskCard claimed={!canClaimLogin()} loading={loading} title="Login Daily" amount = "1/inifinity" credit={10} isOdd={true} handleClick={claimTokens} />

        </DailyTaskModalContent>
      </DailyTaskModalWrapper>
      <ModalWrapper open={showModal} setOpen={setShowModal}>
        <Reward tokens={10} close={() => setShowModal(false)} />
      </ModalWrapper>
    </React.Fragment>
  );
};
