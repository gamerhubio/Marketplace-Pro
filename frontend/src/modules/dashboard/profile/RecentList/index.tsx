import React from "react";
import {
  RecentListContainer,
  RecentListHeader,
  RecentListInfoWrapper,
} from "./styles";

import { RecentListInfo } from "./data";
import { RecentInfoItem } from "../../../../components/RecentInfoItem";

export type RecentListProps = {
  type: string;
};

export const RecentListComponent: React.FC<RecentListProps> = ({ type }) => {
  return (
    <RecentListContainer>
      <RecentListHeader>Recent {type}s</RecentListHeader>
      <RecentListInfoWrapper>
        {RecentListInfo.filter((item) =>
          type === "NFT" ? item.type === "NFT" : item.type !== "NFT"
        ).map((item, key) => (
          <RecentInfoItem
            key={key}
            image={item.image}
            name={item.name}
            type={item.type}
          />
        ))}
      </RecentListInfoWrapper>
    </RecentListContainer>
  );
};
