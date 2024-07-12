import React from "react";
import { useNavigate } from "react-router-dom";
import { FeatureSectionContainer, FeatureSectionWrapper } from "./styles";
import FeatureCard from "./FeatureCard";

export const FeatureSection: React.FC = () => {
  return (
    <FeatureSectionWrapper id="feature">

      <FeatureSectionContainer>
        
        <FeatureCard 
          dataAos="fade-right"
          keynote="Streamlined" 
          title="AI Integration Process" 
          description="GamerHub provides a user-friendly AI integration platform tailored specifically to the gaming industry's needs. " />

        <FeatureCard 
          dataAos="fade-left"
          keynote="Maximizing" end={true}
          title="AI's Potential for Immersive Experiences" 
          description="GamerHub's AI infrastructure platform enables developers to fully leverage AI to create immersive gaming experiences. " />

        <FeatureCard 
          dataAos="fade-right"
          keynote="Accessible" 
          title="AI Tools for Smaller Studios" 
          description="GamerHub democratizes access to AI technology by providing smaller studios with accessible AI tools and resources tailored specifically to their needs." />

        <FeatureCard 
          dataAos="fade-left"
          keynote="Enabling" end={true}
          title="Adaptive Gameplay Experiences" 
          description="GamerHub's AI infrastructure platform enables developers to create adaptive gameplay experiences that resonate with players on a deeper level. " />

        <FeatureCard 
          dataAos="fade-right"
          keynote="Enhancing" 
          title="Player Retention Through Engaging Experiences" 
          description="GamerHub enables developers to create deeply engaging gaming experiences that captivate players and drive long-term retention." />

        <FeatureCard 
          dataAos="fade-left"
          keynote="Dedicated" end={true}
          title="AI Infrastructure for Meeting Deadlines" 
          description="GamerHub provides developers with dedicated AI infrastructure and support systems to ensure project deadlines are met." />

      </FeatureSectionContainer>

    </FeatureSectionWrapper>
  );
};
