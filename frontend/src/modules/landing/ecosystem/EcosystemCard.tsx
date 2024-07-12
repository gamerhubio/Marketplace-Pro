import { ReactNode } from "react";
import { EcosystemCardWrapper } from "./styles";

interface IProps {
  title: string;
  description: string;
  children: ReactNode;
}

const EcosystemCard = ({ title,  description, children } : IProps) => {
  return (
    <EcosystemCardWrapper  data-aos="fade-up">
      <h2>{title}</h2>
      <p>{description}</p>
      <div> {children} </div>
    </EcosystemCardWrapper>
  );
};


export default EcosystemCard