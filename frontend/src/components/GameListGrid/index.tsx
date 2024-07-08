import React from "react";
import {
  AllViewButton,
  GameListGridWrapper,
  GridHeaderWraper,
  ImageGrid,
} from "./styles";
import { useNavigate } from "react-router-dom";
import OptimizedImage from "../../components/OptimizedImage"

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
          <div key={key} onClick={() => router("/dashboard/game/" + (Number(key) + 1))}>
            <OptimizedImage src={item?.image} width={200} height={200} alt={""} blurHash={""}/>
          </div>
        ))}
      </ImageGrid>
    </GameListGridWrapper>
  );
};
