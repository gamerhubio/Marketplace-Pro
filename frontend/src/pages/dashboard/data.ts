type NA = "NA"
type Chain = "Polygon" | "BNB Chain" | "Mainnet" | "Caduceus" | NA

const imgPath = "/images/games/"

const generateImage = (image: string) => {
  return imgPath + "images/" + image
}

const generateBanner = (image: string) => {
  return imgPath + "banners/" + image
}

const generateSC = (game: string, image: string) => {
  return imgPath + "screenshots/"  + game + "/" + image
}
export interface ISocials {
  twitter?: string | NA;
  discord?: string | NA;
  telegram?:string | NA; 
  linkdIn?: string | NA;
  youtube?: string | NA;
}

export interface IGameData {
  name: string | NA | NA;
  title: string | NA;
  description: string | NA;
  status: "Live" | "Demo" | NA;
  demoVideo: string | NA;
  youtubeId: string | NA;
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
  blurHash: string;
}



export const gameList : IGameData[] = [
  {
    name: "Metashooter",
    title: "Breathtaking play to earn hunting metaverse",
    description: "MetaShooter is a real-world simulation-based FPS hunting game. It brings together millions of gamers from all over the world to form a community in which they may engage in realistic hunting in open world environments.",
    status: "Live",
    demoVideo: "https://youtu.be/L1g57sjRqp4",
    youtubeId: "L1g57sjRqp4",
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
      telegram: "https://t.me/METASHOOTER_GG",
      twitter: "https://x.com/Metashooter_",
      linkdIn: "https://www.linkedin.com/company/metashooter/mycompany/",
      youtube: "https://www.youtube.com/channel/UC82FpbcY_C05XqQYaJobFyQ"
    },
    image: generateImage("metashooter.png"),
    banner: generateBanner("metashooterbanner.png"),
    blurHash: "LvI=e$t7t8t6~pt6s;a#n-Rkoda#"
  },
  {
    name: "Axie Infinity",
    title: "Battle, Collect, Build, Freedom for gamers",
    description: "Axie Infinity is a universe filled with fierce, collectible creatures called Axies. Axie features a player-owned economy where players have complete ownership of their digital assets and can buy, sell, and trade them just like physical trading cards and collectibles. ",
    status: "NA",
    demoVideo: "https://youtu.be/X2z_YIeettE",
    youtubeId: "X2z_YIeettE",
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
      telegram: "https://welcome.skymavis.com/regional-servers",
      twitter: "https://twitter.com/AxieInfinity"
    },
    image: generateImage("axieinfinity.png"),
    banner: generateBanner("axieinfinity.png"),
    blurHash: "L5C?AFrE00PS01WC}utP00O=?qz="
  },
  {
    name: "The Sandbox",
    title: "Play together, create anything, and own virtual land. Let’s build a whole new world together.",
    description: "The Sandbox is a virtual world where players can build, own, and monetize their gaming experiences in the Ethereum blockchain using SAND, the platform's utility token.",
    status: "NA",
    demoVideo: "https://youtu.be/3-_qqQRuFiE",
    youtubeId: "3-_qqQRuFiE",
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
      twitter: "https://twitter.com/thesandboxgame",
      telegram: "https://t.me/sandboxgame",
      discord: "https://discord.gg/thesandboxgame"
    },
    image: generateImage("sand.png"),
    banner: generateBanner("sand.png"),
    blurHash: "L12i99j[00ayayfQj[fQ00ay~qj["
  },
  {
    name: "Decentraland",
    title: "Make new friends, explore diverse events, and spark your creativity in a virtual world built and owned by its community.",
    description: "Decentraland is a virtual social world, the first decentralized metaverse, and the only one that is open source. Within the Decentraland platform, which can run on a browser or desktop client, users can create, experience, and monetize content and applications as well as socialize and attend a wide range of daily, community-driven events.",
    status: "NA",
    demoVideo: "NA",
    youtubeId: "NA",
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
      twitter: "https://twitter.com/decentraland",
      discord: "https://dcl.gg/discord"
    },
    image: generateImage("decentraland.png"),
    banner: generateBanner("decentraland.png"),
    blurHash: "L39Pg7}H531r=%$ntPOR00Fz.8^7"
  },
  {
    name: "Meta Apes",
    title: "Become part of the strongest Clan",
    description: "Meta Apes is a free-to-play, play-and-earn MMO strategy game. It is set in a post-apocalyptic world, in which humanity has ended and a new era ruled by Apes has begun. Next on the agenda is space domination. Each pri-mate (yes, you) will have to work closely with their Gang to become the strongest Clan and win the ultimate race to space.",
    status: "NA",
    demoVideo: "NA",
    youtubeId: "NA",
    inGamePictures: [],
    demoLive: "NA",
    developers: "Meta Ape",
    language: "English",
    gameToken: "Meta Ape token",
    tokenTicker: "PEEL",
    blockchains: ["BNB Chain"],
    contractAddress: "0x734548a9e43d2D564600b1B2ed5bE9C2b911c6aB",
    tokenPrice: 0.17,
    website: "https://metaapesgame.com/",
    socials: {
      twitter: "https://twitter.com/MetaApesGame",
      discord: "https://discord.com/invite/metaapesgame"
    },
    image: generateImage("metaapes.png"),
    banner: generateBanner("metaapes.png"),
    blurHash: "L9DI%6nn4=Io050V-,^|8|~MWX4_"
  },
  {
    name: "Prospector",
    title: "Massive Multiplayer Online Real Time Economic Strategy",
    description: "Prospectors is the first of its kind MMO dapp, economic strategy, and crypto game, where you can find own way and reach your goals. This blockchain dapp will let you try yourself in business development during the Gold Rush Epoque and building your social network.",
    status: "NA",
    demoVideo: "https://youtu.be/sZKLUxQtj7A?si=Tq_oz2wfKEdKu6bS",
    youtubeId: "Tq_oz2wfKEdKu6bS",
    inGamePictures: [],
    demoLive: "NA",
    developers: "Prospector",
    language: "English",
    gameToken: "Prospectors Gold",
    tokenTicker: "PGL",
    blockchains: ["NA"],
    contractAddress: "NA",
    tokenPrice: 0.17,
    website: "https://prospectors.io/",
    socials: {
      twitter: "https://twitter.com/prospectorsgame",
      telegram: "https://t.me/prospectors",
      discord: "https://discordapp.com/invite/3HdcTRA"
    },
    image: generateImage("prospectors.png"),
    banner: generateBanner("prospectors.png"),
    blurHash: "L86Q*Caz0Poet5fQRljt0Pj@~8WC"
  },
  {
    name: "Arc8",
    title: "NA",
    description: "Arc8 is a top mobile gaming platform created by GAMEE, a subsidiary of Animoca Brands. It features a variety of thrilling games, including three newly introduced Moca-themed games: 8 Ball Moca, Moca Mania and Into the Mocaverse, alongside sports games, card games, action games and puzzles.",
    status: "NA",
    demoVideo: "NA",
    youtubeId: "NA",
    inGamePictures: [],
    demoLive: "https://www.arc8.com/",
    developers: "Arc8",
    language: "English",
    gameToken: "NA",
    tokenTicker: "GMEE",
    blockchains: ["BNB Chain"],
    contractAddress: "0x84e9a6f9d240fdd33801f7135908bfa16866939a",
    tokenPrice: 0.17,
    website: "https://www.arc8.com/",
    socials: {
      twitter: "https://x.com/arc8app",
      discord: "https://arc8game.com/discord"
    },
    image: generateImage("arc.png"),
    banner: generateBanner("arc.png"),
    blurHash: "LHE3cW*p02-X=%wQt8w~00pb~oNM"
  },
  {
    name: "Alien Worlds",
    title: "REDEFINING STORYTELLING IN LIGHTNINGWORKS' ALIEN WORLDS COMIC",
    description: "NA",
    status: "NA",
    demoVideo: "NA",
    youtubeId: "NA",
    inGamePictures: [],
    demoLive: "NA",
    developers: "Alien Worlds",
    language: "English",
    gameToken: "NA",
    tokenTicker: "NA",
    blockchains: ["NA"],
    contractAddress: "NA",
    tokenPrice: 0.17,
    website: "https://alienworlds.io/",
    socials: {
      twitter: "https://twitter.com/alienworlds",
      discord: "https://t.me/AlienWorldsOffical",
      telegram: "https://t.me/AlienWorldsOffical"
    },
    image: generateImage("alien.png"),
    banner: generateBanner(null),
    blurHash: "LCB4X#00pfj{t0p1j4W9G1Md-?j{"
  },
  {
    name: "Tap Fantasy",
    title: "BUILDING NEW STABLE PROFITS OF GAME ASSETS",
    description: "Tap Fantasy is a MMORPG blockchain game. Players can interact with Tap Fantasy directly on the web page or wallet, and they can start playing immediately.",
    status: "NA",
    demoVideo: "https://youtu.be/PV8FCkfjp4s",
    youtubeId: "PV8FCkfjp4s",
    inGamePictures: [],
    demoLive: "NA",
    developers: "Tap Fantasy",
    language: "English",
    gameToken: "NA",
    tokenTicker: "NA",
    blockchains: ["NA"],
    contractAddress: "NA",
    tokenPrice: 0.17,
    website: "https://tapfantasy.io/",
    socials: {
      twitter: "https://twitter.com/tapfantasy2021",
      telegram: "https://t.me/tap_fantasy",
      discord: "https://discord.gg/tapfantasy"
    },
    image: generateImage("tap.png"),
    banner: generateBanner(null),
    blurHash: "LBL:7%9c00Ri{.%35$M{00ozT?-o"
  },

  {
    name: "Illuvium",
    title: "NA",
    description: "Illuvium is an enthralling series of fully decentralised RPG and collection games set in a fragmented world of beauty and wonder. Explore the vast landscape, hunt dangerous creatures, and capture them for battles in the Arenas or trade on the exchange. The interconnected games allow your assets to be utilised in various ways across the series. \n Illuvium is built as a fully decentralised protocol and offers players a triple-A blockchain gaming experience. Stakers can vote on various aspects of the game and its tokenomics, giving them the power to shape the project's future. Additionally, they receive regular yields and distributions of the game’s revenue.",
    status: "NA",
    demoVideo: "NA",
    youtubeId: "NA",
    inGamePictures: [],
    demoLive: "NA",
    developers: "Illuvium",
    language: "English",
    gameToken: "Illuvium Token",
    tokenTicker: "ILV",
    blockchains: ["Mainnet"],
    contractAddress: "0x767fe9edc9e0df98e07454847909b5e959d7ca0e",
    tokenPrice: 0.17,
    website: "https://illuvium.io/",
    socials: {

    },
    image: generateImage("ilv.png"),
    banner: generateBanner("ilv.png"),
    blurHash: "L47A-{rz0hkptBoNWAWU00S[};rY"
  },
  {
    name: "Seven Seas",
    title: "A Web3 treasure hunt Game-Fi adventure",
    description: "Seven Seas is a Web3 treasure hunt Game-Fi adventure involving Move-and-Earn mechanics. Players buy pirates NFTs to build their crew and go hunting for treasures of Pirate Gold tokens (PGLD) located all arround them.",
    status: "Live",
    demoVideo: "NA",
    youtubeId: "NA",
    inGamePictures: [],
    demoLive: "NA",
    developers: "NA",
    language: "English",
    gameToken: "PGLD Token",
    tokenTicker: "PGLD",
    blockchains: ["NA"],
    contractAddress: "NA",
    tokenPrice: 0.17,
    website: "https://www.yieldguild.io/",
    socials: {
      twitter: "https://twitter.com/7seasquest",
      telegram: "https://t.me/+2GqpD95xA_k2NmM0",
      discord: "https://discord.gg/2Hz62BVA6J"
    },
    image: generateImage("seven.png"),
    banner: generateBanner("seven.png"),
    blurHash: "L38hdy%U00Izu7+[R0Fy?_a915R}"
  },

  {
    name: "Yield Guild Games",
    title: "Build Guilds, Forge Friendships and win with YGG",
    description: "NA",
    status: "NA",
    demoVideo: "NA",
    youtubeId: "NA",
    inGamePictures: [],
    demoLive: "NA",
    developers: "Yield Guild Games",
    language: "English",
    gameToken: "NA",
    tokenTicker: "NA",
    blockchains: ["NA"],
    contractAddress: "NA",
    tokenPrice: 0.17,
    website: "https://www.yieldguild.io/",
    socials: {
      twitter: "https://twitter.com/yieldguild",
      discord: "https://discord.gg/ygg"
    },
    image: generateImage("yield.png"),
    banner: generateBanner("yield.png"),
    blurHash: "L58EVbt700M{~Xoz00M{Tfs:DiNG"
  },
  {
    name: "Pixels",
    title: "Make your home in a world of unlimited adventure.",
    description: "Pixels is a captivating, open-ended world of farming and exploration, built one pixel at a time. Gathering resources, advancing skills, and building relationships while exploring the story and quests woven throughout the Pixels Universe, you’ll be submerged in a mesmerizing blend of managing, creating, and exploring in a world that marries blockchain ownership with your progression and accomplishments.",
    status: "NA",
    demoVideo: "NA",
    youtubeId: "NA",
    inGamePictures: [],
    demoLive: "NA",
    developers: "Pixels",
    language: "English",
    gameToken: "Pixel Token",
    tokenTicker: "PIXEL",
    blockchains: ["Mainnet"],
    contractAddress: "0x3429d03c6F7521AeC737a0BBF2E5ddcef2C3Ae31",
    tokenPrice: 0.17,
    website: "https://www.pixels.xyz/",
    socials: {
      discord: "https://discord.com/invite/pixels",
    },
    image: generateImage("pixel.png"),
    banner: generateBanner("pixel.png"),
    blurHash: "L77BJ}bJIhJ.xga$aSj[00jF%Awb"
  },
  {
    name: "NetBorn official",
    title: "The Revolutionary New AI Game That’s Set to Change Gaming Forever",
    description: "Seven Seas is a Web3 treasure hunt Game-Fi adventure involving Move-and-Earn mechanics. Players buy pirates NFTs to build their crew and go hunting for treasures of Pirate Gold tokens (PGLD) located all arround them.",
    status: "Demo",
    demoVideo: "https://www.youtube.com/watch?v=OHrhGrwGCeg&t=1s&ab_channel=NetBorn",
    youtubeId: "OHrhGrwGCeg",
    inGamePictures: [
      generateSC("netborn", "IMG_6168.jpeg"),
      generateSC("netborn", "IMG_6169.jpeg"),
      generateSC("netborn", "IMG_6171.jpeg"),
      generateSC("netborn", "IMG_6172.jpeg"),
      generateSC("netborn", "IMG_6173.jpeg"),
    ],
    demoLive: "https://www.netborn.city/update/NETBORN_Installer.exe?2",
    developers: "Konstantinos...",
    language: "English",
    gameToken: "BORN, NET",
    tokenTicker: "NET",
    blockchains: ["Mainnet"],
    contractAddress: "0xCe660459085E83Df4ba75C3E32a73344473343D9",
    tokenPrice: 0.17,
    website: "https://netborn.city/",
    socials: {
      twitter: "https://twitter.com/NetBornGaming",
      telegram: "https://t.me/netbornofficialTG",
      discord: "https://discord.com/invite/NZFsSjh8Tp",
    },
    image: generateImage("netborn.png"),
    banner: generateBanner("netborn.png"),
    blurHash: "LB7^[eX700nlxEaeNGkC0Jn,?dW-"
  },
  {
    name: "Haunted Space",
    title: " BRIDGING WEB2 AND WEB3 IN A GLOBAL GAMING ECOSYSTEM",
    description: "HAUNTED SPACE IS A TOP-TIER AAA GAME, BUILT ON UNREAL ENGINE 5 FOR UNMATCHED SINGLE-PLAYER AND MULTIPLAYER EXPERIENCES. ",
    status: "Demo",
    demoVideo: "https://youtu.be/uSUWRsU0ixE",
    youtubeId: "uSUWRsU0ixE",
    inGamePictures: [
      generateSC("haunted", "1.jpeg"),
      generateSC("haunted", "2.jpeg"),
      generateSC("haunted", "3.jpeg"),
      generateSC("haunted", "4.jpeg"),
    ],
    demoLive: "https://hauntedspace.io/",
    developers: "Haunted Space",
    language: "English",
    gameToken: "",
    tokenTicker: "HG",
    blockchains: ["NA"],
    contractAddress: "NA",
    tokenPrice: 0.17,
    website: "https://hauntedspace.io/",
    socials: {
      twitter: "https://twitter.com/HauntedSpace_",
      telegram: "https://t.me/hauntedspace",
      discord: "https://discord.gg/hauntedspace",
    },
    image: generateImage("haunted.png"),
    banner: generateBanner("hauted.png"),
    blurHash: "L3A0UT5;0KF{_%9axuO?00xCwJoy"
  },
  {
    name: "BattleWorld",
    title: "Play. Watch. Fight",
    description: "Introducing Battleworld, the premier digital collectible fighting game poised to revolutionize the metaverse. Battleworld offers an immersive social platform where players can dive into free-to-play action and compete in live events for prizes. Have complete ownership of valuable in-game assets so you can buy, sell, trade",
    status: "Live",
    demoVideo: "NA",
    youtubeId: "NA",
    inGamePictures: [],
    demoLive: "https://www.playtaunt.io/",
    developers: "Industry Veterans from Amazon, EA and Unity.",
    language: "English",
    gameToken: "NA",
    tokenTicker: "NA",
    blockchains: ["Caduceus"],
    contractAddress: "NA",
    tokenPrice: 0.17,
    website: "http://www.playtaunt.io/",
    socials: {
      twitter: "https://twitter.com/playtaunt",
      telegram: "https://t.me/TauntBattleworld",
    },
    image: generateImage("battleworld.png"),
    banner: generateBanner("battleworld.png"),
    blurHash: "L58EVbt700M{~Xoz00M{Tfs:DiNG",
  },
  {
    name: "Nunu Spirits",
    title: "THE GREENEST NFT - PLANT TREES IN THE REAL WORLD BY PLAYING A GAME",
    description: "Nunu Spirits merges the joy of casual gaming with the earning capacity of blockchain and turns it into an ecological action. Collect super cute nature spirits, each completely unique and play with them in a brand new world filled with party games, like parkour racing, capture the flag and floor is lava. Every NFT is linked to the planting of a real tree in the real world.",
    status: "Demo",
    demoVideo: "https://www.youtube.com/watch?v=k-OxVB90tCM",
    youtubeId: "k-OxVB90tCM",
    inGamePictures: [
      generateSC("nunu", "1.png"),
      generateSC("nunu", "2.png"),
      generateSC("nunu", "3.png"),
      generateSC("nunu", "4.png"),
      generateSC("nunu", "5.png"),
    ],
    demoLive: "https://nunuspirits.io/game/",
    developers: "Tater Games S.R.O",
    language: "English",
    gameToken: "NuNu Token",
    tokenTicker: "NNT",
    blockchains: ["BNB Chain"],
    contractAddress: "0x3a2927e68749dd6ad0a568d7c05b587863c0bc1",
    tokenPrice: 0.17,
    website: "https://nunuspirits.io/",
    socials: {
      telegram: "https://t.me/joinchat/Go1jazDeVH8wN2Fk/",
      discord: "https://discord.gg/Qm7hUV9FXB",
      twitter: "https://twitter.com/nunuspiritsnft"
    },
    image: generateImage("nunu.png"),
    banner: generateBanner("nunu.png"),
    blurHash: "L36au5Mc00.T$+aKR*bv00yE_NDO"
  },
  {
    name: "MetaRace",
    title: "MetaRace is a play-to-earn game combining real-world horse racing with the power of the blockchain. Players buy, breed & race NFT horses to compete for rewards.",
    description: "MetaRace is a play-to-earn game combining real-world horse racing with the power of the blockchain. Players buy, breed and race NFT horses to compete for rewards in multiple tournament formats. MetaRace Horse Racing is built on Caduceus Metaverse Protocol - the world’s first blockchain dedicated to metaverse development - with decentralized edge rendering technology for powerful performance, higher capacity, improved efficiency and greater computing capability.",
    status: "NA",
    demoVideo: "https://youtu.be/gQXZvkECmUU",
    youtubeId: "gQXZvkECmUU",
    inGamePictures: [],
    demoLive: "NA",
    developers: "MetaRacer",
    language: "English",
    gameToken: "META",
    tokenTicker: "META",
    blockchains: ["Caduceus"],
    contractAddress: "0xb7d2ea9b4dbeb599ffa2dcbb0093ccd8512fcc0d",
    tokenPrice: 0.17,
    website: "https://metarace.io/",
    socials: {
      twitter: "https://twitter.com/metarace_io",
    },
    image: generateImage("metarace.png"),
    banner: generateBanner("metarace.jpg"),
    blurHash: "LUG6vajq#eak:{bWsrsF$;X4Npnn"
  },
  {
    name: "Twilight",
    title: "A game with stable income not affected by token price.",
    description: "Our game was inspired by the movie \"Twilight\". Out of respect, we named the game after \"TWILIGHT\". Twilight Game is a blockchain-based Play to Earn game that runs on the Binance Smart Chain, which has a native BEP-20 token called TWI for the entire internal economy.",
    status: "Live",
    demoVideo: "https://youtu.be/3-_qqQRuFiE",
    youtubeId: "3-_qqQRuFiE",
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
    banner: generateBanner("twilightbanner.png"),
    blurHash: "LE8hCHyFOFtRO_x_xto}4:bbx[oh"
  },
  {
    name: "Abeats",
    title: "Community-Driven game distribution platform with GameFi and SocialFi at its core.",
    description: "AbeatsHero is a gaming world where heroes grow and fight.  The player's goal is to fight, breed, collect, train and build their own clan for their heroes. Players can enjoy the fun of the game and work towards the goal of earning more income while obtaining the real monetary value of the economic system through the play-to-earn mechanism.",
    status: "Live",
    demoVideo: "https://youtu.be/cm7lMYf87z4",
    youtubeId: "cm7lMYf87z4",
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
    banner: generateBanner("abeatbanner.png"),
    blurHash: "L6C$gD5g00w0*P9qKk^+vuNCxvn#"
  }
]



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
