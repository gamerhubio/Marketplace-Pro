import React from "react";
import { EcosystemSectionWrapper, EcosystemWrapper } from "./styles";
import warzone from "./assets/warzone.png"
import gameGPT from "./assets/game-gpt.png"
import ai from "./assets/ai.png"
import merch from "./assets/merch.png"
import credit from "./assets/credit.png"
import EcosystemCard from "./EcosystemCard";

export const EcosystemSection: React.FC = () => {
  return (
    <EcosystemSectionWrapper>
      <EcosystemWrapper>
        <h1 data-aos="fade-up"> <strong>The</strong> GamerHub Ecosystem </h1>
        <div>
          <EcosystemCard 
            title={"GamerHub Marketplace"}
            description={"The GamerHub marketplace is the place for Gamers. Gamers can explore and have access to play various games that are currently in the GamerHub ecosystem and can also get rewarded by playing these games."}>
            <img src={warzone} alt="warzone" width={"380px"} height={"auto"} />
          </EcosystemCard>

          <EcosystemCard 
            title={"Gamer GPT"}
            description={"Meet GameGPT, your AI-powered in-game companion! From offering helpful hints and tips to engaging in meaningful conversations, GameGPT brings virtual worlds to life with its adaptive and responsive capabilities."}>
              <img className="img-margin" src={gameGPT} alt="warzone" width={"380px"} height={"auto"} />
          </EcosystemCard>

          <EcosystemCard
            title={"AI anti-Cheat System"}
            description={"Leveraging advanced AI detection mechanisms, our anti-cheat system actively monitors gameplay for suspicious behavior and swiftly identifies and addresses cheating attempts."}>
              <img className="img-margin" src={ai} alt="warzone"  width={"360px"} height={"auto"}/>
          </EcosystemCard>
        </div>

        <div className="more">

          <EcosystemCard 
            title={"Gamer Credits"}
            description={"Our inbuilt reward system designed to ensure Gamers do not just play games, but they get rewarded by playing these games. You can earn rewards by completing various tasks and various levels."}>
              <img className="img-margin" src={credit} alt="warzone" width={"560px"} height={"auto"} />
          </EcosystemCard>

          <EcosystemCard
            title={"Gamer Merch"}
            description={"Express your love for your favorite games and gamers. Users can create custom merchandise inspired by their favorite gaming titles and personalities. Let your gaming passion shine with Gamer Merch."}>
              <img className="img-margin" src={merch} alt="warzone"  width={"460px"} height={"auto"}/>
          </EcosystemCard>

        </div>
        
      </EcosystemWrapper>
    </EcosystemSectionWrapper>
  );
};
