import React from "react";
import {
  AllViewButton,
  GameListGridWrapper,
  GridHeaderWraper,
  ImageGrid,
} from "./styles";
import { useNavigate } from "react-router-dom";

export type GameListGridProps = {
  title?: string;
  list?: Array<GameListProps>;
};

export type GameListProps = {
  image: string;
};

export const GameListGrid: React.FC<GameListGridProps> = ({ title, list }) => {
  const router = useNavigate();
  return (
    <GameListGridWrapper>
      <GridHeaderWraper>
        <h1>{title}</h1>
        <AllViewButton>
          View all <img src="/images/userdashboard/view-all.png" alt="" />
        </AllViewButton>
      </GridHeaderWraper>
      <ImageGrid>
        {list?.map((item, key) => (
          <img
            src={item.image}
            alt=""
            key={key}
            onClick={() => router("/dashboard/game")}
          />
        ))}
      </ImageGrid>
    </GameListGridWrapper>
  );
};
