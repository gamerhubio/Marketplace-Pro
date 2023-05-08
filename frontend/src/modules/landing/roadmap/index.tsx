import React from "react";
import {
  RoadmapDate,
  RoadmapDescription,
  RoadmapItemWrapper,
  RoadmapSectionWrapper,
  RoadmapWrapper,
} from "./styles";
import { roadmapData } from "../data";

export const RoadmapSection: React.FC = () => {
  return (
    <RoadmapSectionWrapper id="roadmap">
      <h1>Roadmap</h1>
      <RoadmapWrapper>
        {roadmapData.map((item, key) => (
          <RoadmapItemWrapper key={key} active={[key, roadmapData.length - 1]}>
            {key % 2 !== 0 ? (
              <RoadmapDescription className="none" />
            ) : (
              <RoadmapDescription>
                {item.desc.map((ditem, dkey) => (
                  <p key={dkey}>{ditem}</p>
                ))}
              </RoadmapDescription>
            )}
            <RoadmapDate active={key}>
              <div>
                <span>{item.month}</span> {item.year}
              </div>
            </RoadmapDate>
            {key % 2 === 0 ? (
              <RoadmapDescription className="none" />
            ) : (
              <RoadmapDescription>
                {item.desc.map((ditem, dkey) => (
                  <p key={dkey}>{ditem}</p>
                ))}
              </RoadmapDescription>
            )}
          </RoadmapItemWrapper>
        ))}
      </RoadmapWrapper>
    </RoadmapSectionWrapper>
  );
};
