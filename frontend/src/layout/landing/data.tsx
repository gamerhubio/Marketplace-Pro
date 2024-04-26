import {
  IconDiscord,
  IconMedium,
  IconTelegram,
  IconTwitter,
} from "../../components";
import { FaLinkedin } from "react-icons/fa6";


export const navLinkData = [
  {
    label: "Home",
    to: "#home",
  },
  {
    label: "About",
    to: "#about",
  },
  {
    label: "Tokenomics",
    to: "#tokenomics",
  },
  // {
  //   label: "Roadmap",
  //   to: "#roadmap",
  // },
  {
    label: "Whitepaper",
    to: "https://gamerhub-2.gitbook.io/gamerhub-whitepaper-v1/",
  },
];

export const socialLinks = [
  {
    icon: <IconTelegram />,
    link: "https://t.me/GamerHub_Ann",
  },
  {
    icon: <IconDiscord />,
    link: "https://discord.gg/WPrVFFXgjX",
  },
  {
    icon: <IconTwitter />,
    link: "https://twitter.com/gamer_hub_io",
  },
  {
    icon: <IconMedium />,
    link: "https://medium.com/@gamerhub_io",
  },
  {
    icon: <FaLinkedin size={20} />,
    link: "https://www.linkedin.com/company/gamerhub/",
  },
];
