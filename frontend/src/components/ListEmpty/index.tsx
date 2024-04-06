import React from "react";
import { ExploreGameBtn, ListEmptyContainer, ListEmptyWrapper } from "./styles";

export const ListEmptyComponent: React.FC = () => {
  return (
    <ListEmptyContainer>
      <ListEmptyWrapper>
        <img src="/images/userdashboard/images/gamelistempty.png" alt="" />
        <h4>You don’t have any games saved</h4>
        <ExploreGameBtn>
          <span>Explore games</span>
        </ExploreGameBtn>
      </ListEmptyWrapper>
    </ListEmptyContainer>
  );
};
