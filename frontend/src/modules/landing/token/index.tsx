import React from "react";
import {
    TokenButton,
    TokenButtonGroup,
    TokenSectionWrapper,
    TokenomicsCardGroupWrapper,
    TokenomicsItem,
    TokenomicsWrapper,
} from "./styles";
import { Button, TokenomicsCard } from "../../../components";
import { tokenomicsCardData, tokenomicsData } from "../data";

export const TokenSection: React.FC = () => {
    return (
        <TokenSectionWrapper id="tokenomics">
            <h1 data-aos="fade-up">
                <strong> GHT </strong> TOKEN{" "}
                <img src="/images/landing/ght-token.png" alt="" />
            </h1>
            <p data-aos="fade-up">
                The GHTtoken is a Multichain token that has been created on the everscale blockchain 
                and can be bridged on bsc and other evms, to give the whole gaming
                ecosystem an easy access to participate in the gaming revolution
            </p>
            <TokenButtonGroup data-aos="fade-up">
                <a href="https://etherscan.io/address/0xYOUR_CONTRACT_ADDRESS"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button width={231}>View Contract Address</Button>
</a>
                {/ <TokenButton>
          <span>Copy Contract Address</span>
        </TokenButton> }
            </TokenButtonGroup>
            <h3 data-aos="fade-up">TOKENOMICS</h3>
            <TokenomicsWrapper>
                {tokenomicsData.map((item, key) => (
                    <TokenomicsItem key={key}>
                        <h4>{item.title}</h4>
                        <span>{item.value}</span>
                    </TokenomicsItem>
                ))}
            </TokenomicsWrapper>
            <TokenomicsCardGroupWrapper>
                {tokenomicsCardData.map((item, key) => (
                    <TokenomicsCard key={key} {...item} />
                ))}
            </TokenomicsCardGroupWrapper>
        </TokenSectionWrapper>
    );
};
