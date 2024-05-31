type NA = "NA"
type Chain = "Polygon" | "BNB Chain" | NA

const imgPath = "/images/games/"

const generateImage = (image: string) => {
  return imgPath + "images/" + image
}

const generateBanner = (image: string) => {
  return  imgPath + "banners/" + image
}

const generateSC = (game: string, image: string) => {
  return imgPath + "screenshots/"  + game + "/" + image
}
export interface ISocials {
  twitter?: string | NA 
}

export interface IGameData {
  name: string | NA | NA;
  title: string | NA;
  description: string | NA;
  status: "Live" | NA;
  demoVideo: string | NA;
  inGamePictures: string[];
  demoLive: string | NA;
  developers: string | NA;
  language: "English" | NA;
  gameToken: string | NA;
  tokenTicker: string | NA;
  contractAddress: `0x${string}` | NA;
  blockchains: Chain[];
  tokenPrice: number | NA;
  website: string | NA;
  image: string | NA;
  banner: string | NA;
  socials: ISocials;
}



export const gameList : IGameData[] = [
  {
    name: "Metashooter",
    title: "Breathtaking play to earn hunting metaverse",
    description: "MetaShooter is a real-world simulation-based FPS hunting game. It brings together millions of gamers from all over the world to form a community in which they may engage in realistic hunting in open world environments.",
    status: "Live",
    demoVideo: "https://youtu.be/L1g57sjRqp4",
    inGamePictures: [
      generateSC("metashooter", "Gameplay 2.jpg"),
      generateSC("metashooter", "Gameplay 3.jpg"),
      generateSC("metashooter", "Gameplay 4.jpg"),
      generateSC("metashooter", "Gameplay 5.jpg"),
      generateSC("metashooter", "Gameplay 6.jpg"),
    ],
    demoLive: "https://store.steampowered.com/app/2073990/MetaShooter/",
    developers: "MG Labs Ltd",
    language: "English",
    gameToken: "Metashooter Token",
    tokenTicker: "MHunt",
    blockchains: ["Polygon"],
    contractAddress: "0x2C717059b366714d267039aF8F59125CAdce6D8c",
    tokenPrice: 0.17,
    website: "https://metashooter.gg/",
    socials: {

    },
    image: generateImage("metashooter.png"),
    banner: generateBanner("metashooterbanner.png")
  },
  {
    name: "Twilight",
    title: "A game with stable income not affected by token price.",
    description: "Our game was inspired by the movie \"Twilight\". Out of respect, we named the game after \"TWILIGHT\". Twilight Game is a blockchain-based Play to Earn game that runs on the Binance Smart Chain, which has a native BEP-20 token called TWI for the entire internal economy.",
    status: "Live",
    demoVideo: "https://youtu.be/3-_qqQRuFiE",
    inGamePictures: [
      generateSC("twilight", "IMG_2465.JPG"),
      generateSC("twilight", "IMG_2467.JPG"),
      generateSC("twilight", "IMG_2468.JPG"),
      generateSC("twilight", "IMG_2470.PNG"),
    ],
    demoLive: "NA",
    developers: "Twilight",
    language: "English",
    gameToken: "Metashooter Token",
    tokenTicker: "TWI",
    blockchains: ["BNB Chain"],
    contractAddress: "0x5936480923dB2183f8A9cCf609A133f432b0dD48",
    tokenPrice: 0.17,
    website: "https://twilightgame.io/",
    socials: {

    },
    image: generateImage("twilight.png"),
    banner: generateBanner("twilightbanner.png")
  },
  {
    name: "Abeats",
    title: "Community-Driven game distribution platform with GameFi and SocialFi at its core.",
    description: "AbeatsHero is a gaming world where heroes grow and fight.  The player's goal is to fight, breed, collect, train and build their own clan for their heroes. Players can enjoy the fun of the game and work towards the goal of earning more income while obtaining the real monetary value of the economic system through the play-to-earn mechanism.",
    status: "Live",
    demoVideo: "https://youtu.be/cm7lMYf87z4",
    inGamePictures: [
      generateSC("abeat", "IMG_2450.JPG"),
      generateSC("abeat", "IMG_2451.JPG"),
      generateSC("abeat", "IMG_2452.JPG"),
      generateSC("abeat", "IMG_2453.PNG"),
      generateSC("abeat", "IMG_2454.PNG"),
    ],
    demoLive: "NA",
    developers: "NA",
    language: "English",
    gameToken: "Abeat Tokens",
    tokenTicker: "ABTS",
    blockchains: ["BNB Chain"],
    contractAddress: "0x88f81e253bAB12B71B50bE76C6fDeefFdF95a284",
    tokenPrice: 0.17,
    website: "https://abeats.com/hero",
    socials: {

    },
    image: generateImage("abeats.png"),
    banner: generateBanner("abeatbanner.png")
  },
  {
    name: "Axie Infinity",
    title: "Battle, Collect, Build, Freedom for gamers",
    description: "Axie Infinity is a universe filled with fierce, collectible creatures called Axies. Axie features a player-owned economy where players have complete ownership of their digital assets and can buy, sell, and trade them just like physical trading cards and collectibles. ",
    status: "NA",
    demoVideo: "https://youtu.be/X2z_YIeettE",
    inGamePictures: [],
    demoLive: "NA",
    developers: "Axie Infinity",
    language: "English",
    gameToken: "Axie Infinity Shards(AXS)",
    tokenTicker: "$AXS",
    blockchains: ["BNB Chain"],
    contractAddress: "NA",
    tokenPrice: 0.17,
    website: "https://axieinfinity.com/",
    socials: {

    },
    image: generateImage("axieinfinity.png"),
    banner: generateBanner("axieinfinity.png")
  },
  {
    name: "The Sandbox",
    title: "Play together, create anything, and own virtual land. Let’s build a whole new world together.",
    description: "The Sandbox is a virtual world where players can build, own, and monetize their gaming experiences in the Ethereum blockchain using SAND, the platform's utility token.",
    status: "NA",
    demoVideo: "https://youtu.be/3-_qqQRuFiE",
    inGamePictures: [],
    demoLive: "NA",
    developers: "Sandbox",
    language: "English",
    gameToken: "NA",
    tokenTicker: "SAND",
    blockchains: ["NA"],
    contractAddress: "NA",
    tokenPrice: "NA",
    website: "https://www.sandbox.game/en/",
    socials: {

    },
    image: generateImage("sand.png"),
    banner: generateBanner("sand.png")
  },
  {
    name: "Decentrland",
    title: "Make new friends, explore diverse events, and spark your creativity in a virtual world built and owned by its community.",
    description: "Decentraland is a virtual social world, the first decentralized metaverse, and the only one that is open source. Within the Decentraland platform, which can run on a browser or desktop client, users can create, experience, and monetize content and applications as well as socialize and attend a wide range of daily, community-driven events.",
    status: "NA",
    demoVideo: "NA",
    inGamePictures: [],
    demoLive: "NA",
    developers: "Decentraland",
    language: "English",
    gameToken: "NA",
    tokenTicker: "NA",
    blockchains: ["NA"],
    contractAddress: "NA",
    tokenPrice: 0.17,
    website: "https://decentraland.org/",
    socials: {

    },
    image: generateImage("twilight.png"),
    banner: generateBanner("twilightbanner.png")
  },
  {
    name: "Twilight",
    title: "A game with stable income not affected by token price.",
    description: "Our game was inspired by the movie \"Twilight\". Out of respect, we named the game after \"TWILIGHT\". Twilight Game is a blockchain-based Play to Earn game that runs on the Binance Smart Chain, which has a native BEP-20 token called TWI for the entire internal economy.",
    status: "Live",
    demoVideo: "https://youtu.be/3-_qqQRuFiE",
    inGamePictures: [
      generateSC("twilight", "IMG_2465.JPG"),
      generateSC("twilight", "IMG_2467.JPG"),
      generateSC("twilight", "IMG_2468.JPG"),
      generateSC("twilight", "IMG_2470.PNG"),
    ],
    demoLive: "NA",
    developers: "Twilight",
    language: "English",
    gameToken: "Metashooter Token",
    tokenTicker: "TWI",
    blockchains: ["BNB Chain"],
    contractAddress: "0x5936480923dB2183f8A9cCf609A133f432b0dD48",
    tokenPrice: 0.17,
    website: "https://twilightgame.io/",
    socials: {

    },
    image: generateImage("twilight.png"),
    banner: generateBanner("twilightbanner.png")
  },
  {
    name: "Twilight",
    title: "A game with stable income not affected by token price.",
    description: "Our game was inspired by the movie \"Twilight\". Out of respect, we named the game after \"TWILIGHT\". Twilight Game is a blockchain-based Play to Earn game that runs on the Binance Smart Chain, which has a native BEP-20 token called TWI for the entire internal economy.",
    status: "Live",
    demoVideo: "https://youtu.be/3-_qqQRuFiE",
    inGamePictures: [
      generateSC("twilight", "IMG_2465.JPG"),
      generateSC("twilight", "IMG_2467.JPG"),
      generateSC("twilight", "IMG_2468.JPG"),
      generateSC("twilight", "IMG_2470.PNG"),
    ],
    demoLive: "NA",
    developers: "Twilight",
    language: "English",
    gameToken: "Metashooter Token",
    tokenTicker: "TWI",
    blockchains: ["BNB Chain"],
    contractAddress: "0x5936480923dB2183f8A9cCf609A133f432b0dD48",
    tokenPrice: 0.17,
    website: "https://twilightgame.io/",
    socials: {

    },
    image: generateImage("twilight.png"),
    banner: generateBanner("twilightbanner.png")
  },
  {
    name: "Twilight",
    title: "A game with stable income not affected by token price.",
    description: "Our game was inspired by the movie \"Twilight\". Out of respect, we named the game after \"TWILIGHT\". Twilight Game is a blockchain-based Play to Earn game that runs on the Binance Smart Chain, which has a native BEP-20 token called TWI for the entire internal economy.",
    status: "Live",
    demoVideo: "https://youtu.be/3-_qqQRuFiE",
    inGamePictures: [
      generateSC("twilight", "IMG_2465.JPG"),
      generateSC("twilight", "IMG_2467.JPG"),
      generateSC("twilight", "IMG_2468.JPG"),
      generateSC("twilight", "IMG_2470.PNG"),
    ],
    demoLive: "NA",
    developers: "Twilight",
    language: "English",
    gameToken: "Metashooter Token",
    tokenTicker: "TWI",
    blockchains: ["BNB Chain"],
    contractAddress: "0x5936480923dB2183f8A9cCf609A133f432b0dD48",
    tokenPrice: 0.17,
    website: "https://twilightgame.io/",
    socials: {

    },
    image: generateImage("twilight.png"),
    banner: generateBanner("twilightbanner.png")
  },
  {
    name: "Twilight",
    title: "A game with stable income not affected by token price.",
    description: "Our game was inspired by the movie \"Twilight\". Out of respect, we named the game after \"TWILIGHT\". Twilight Game is a blockchain-based Play to Earn game that runs on the Binance Smart Chain, which has a native BEP-20 token called TWI for the entire internal economy.",
    status: "Live",
    demoVideo: "https://youtu.be/3-_qqQRuFiE",
    inGamePictures: [
      generateSC("twilight", "IMG_2465.JPG"),
      generateSC("twilight", "IMG_2467.JPG"),
      generateSC("twilight", "IMG_2468.JPG"),
      generateSC("twilight", "IMG_2470.PNG"),
    ],
    demoLive: "NA",
    developers: "Twilight",
    language: "English",
    gameToken: "Metashooter Token",
    tokenTicker: "TWI",
    blockchains: ["BNB Chain"],
    contractAddress: "0x5936480923dB2183f8A9cCf609A133f432b0dD48",
    tokenPrice: 0.17,
    website: "https://twilightgame.io/",
    socials: {

    },
    image: generateImage("twilight.png"),
    banner: generateBanner("twilightbanner.png")
  },
  {
    name: "Twilight",
    title: "A game with stable income not affected by token price.",
    description: "Our game was inspired by the movie \"Twilight\". Out of respect, we named the game after \"TWILIGHT\". Twilight Game is a blockchain-based Play to Earn game that runs on the Binance Smart Chain, which has a native BEP-20 token called TWI for the entire internal economy.",
    status: "Live",
    demoVideo: "https://youtu.be/3-_qqQRuFiE",
    inGamePictures: [
      generateSC("twilight", "IMG_2465.JPG"),
      generateSC("twilight", "IMG_2467.JPG"),
      generateSC("twilight", "IMG_2468.JPG"),
      generateSC("twilight", "IMG_2470.PNG"),
    ],
    demoLive: "NA",
    developers: "Twilight",
    language: "English",
    gameToken: "Metashooter Token",
    tokenTicker: "TWI",
    blockchains: ["BNB Chain"],
    contractAddress: "0x5936480923dB2183f8A9cCf609A133f432b0dD48",
    tokenPrice: 0.17,
    website: "https://twilightgame.io/",
    socials: {

    },
    image: generateImage("twilight.png"),
    banner: generateBanner("twilightbanner.png")
  },
]

//




export const allGameList = [
  {
    image: "/images/userdashboard/images/metashooter.png",
  },
  {
    image: "/images/userdashboard/images/twighligh.png",
  },
  {
    image: "/images/userdashboard/images/metamoba.png",
  },
  {
    image: "/images/userdashboard/images/unkown.png",
  },
  {
    image: "/images/userdashboard/images/swift.png",
  },
  {
    image: "/images/userdashboard/images/pirates.png",
  },
  {
    image: "/images/userdashboard/images/warhands.png",
  },
  {
    image: "/images/userdashboard/images/revoland.png",
  },
];

export const metaverseList = [
  {
    image: "/images/userdashboard/images/horizonland.png",
  },
  {
    image: "/images/userdashboard/images/cyberpop.png",
  },
];

export const nftList = [
  {
    image: "/images/userdashboard/images/Haunted Space Complete.png",
  },
  {
    image: "/images/userdashboard/images/Haunted Space Complete.png",
  },
  {
    image: "/images/userdashboard/images/Haunted Space Complete.png",
  },
  {
    image: "/images/userdashboard/images/Haunted Space Complete.png",
  },
];
