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

type ModalProps = {
  visible: boolean;
  onClose: () => void;
};

export const DailyTaskModal: React.FC<ModalProps> = ({ visible, onClose }) => {
  const [tab, setTab] = useState("daily");
  const [screenWidth, setScreenWidth] = useState(0);
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
            <span>EARN GAMERHUB COINS</span>
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
          {taskDailyData.map((item, key) => (
            <DailyTaskCard key={key} {...item} isOdd={key % 2 === 0} />
          ))}
        </DailyTaskModalContent>
      </DailyTaskModalWrapper>
    </React.Fragment>
  );
};
