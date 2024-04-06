import React, { useEffect, useState } from "react";
import { TabItem, TabWrapper } from "./styles";

type TabProps = {
  data: Array<TabItemProps>;
  onTabChange: (v: string) => void;
};

type TabItemProps = {
  key: string;
  label: string;
};

export const TabList: React.FC<TabProps> = ({ data, onTabChange }) => {
  const [tab, setTab] = useState("");

  useEffect(() => {
    const slider: any = document.querySelector("#tab-wrapper");
    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    slider?.addEventListener("mousedown", function (e: any) {
      isDown = true;
      startX = e.pageX - slider?.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });

    slider?.addEventListener("mouseleave", function (e: any) {
      isDown = false;
    });

    slider.addEventListener("mouseup", function (e: any) {
      isDown = false;
    });

    slider.addEventListener("mousemove", function (e: any) {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = x - startX;
      slider.scrollLeft = scrollLeft - walk;
    });
  }, []);

  useEffect(() => {
    setTab(data[0].key);
  }, [data]);

  return (
    <TabWrapper id="tab-wrapper">
      {data.map((item, key) => (
        <TabItem
          key={key}
          onClick={() => {
            onTabChange(item.key);
            setTab(item.key);
          }}
          active={tab === item.key}
        >
          {item.label}
        </TabItem>
      ))}
    </TabWrapper>
  );
};
