import React, { useEffect, useState } from "react";
import { ScrollTopWrapper } from "./styles";
import { IconScrollTop } from "../SVGs";

export const ScrollTop: React.FC = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setVisible(window.scrollY > 100);
  };

  const handleClick = () => {
    document.documentElement.scrollTop = 0;
  };

  return (
    // @ts-ignore
    <ScrollTopWrapper visible={visible} onClick={handleClick}>
      <IconScrollTop />
    </ScrollTopWrapper>
  );
};
