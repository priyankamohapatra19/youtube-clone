import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import {
  MdLocalFireDepartment,
  MdLiveTv,
  MdOutlineQueuePlayNext,
  MdOutlineBlock,
  MdRemoveCircleOutline
} from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";
import { MdOutlineWatchLater } from "react-icons/md";
import { CgPlayList } from "react-icons/cg";
import { HiDownload } from "react-icons/hi";
import { BiShare } from "react-icons/bi";

export const categories = [
  { name: "New", icon: <AiFillHome />, type: "home" },
  { name: "Trending", icon: <MdLocalFireDepartment />, type: "category" },
  { name: "Music", icon: <CgMusicNote />, type: "category" },
  { name: "Films", icon: <FiFilm />, type: "category" },
  { name: "Live", icon: <MdLiveTv />, type: "category" },
  { name: "Gaming", icon: <IoGameControllerSharp />, type: "category" },
  { name: "News", icon: <ImNewspaper />, type: "category" },
  { name: "Sports", icon: <GiDiamondTrophy />, type: "category" },
  { name: "Learning", icon: <RiLightbulbLine />, type: "category" },
  {
    name: "Fashion & beauty",
    icon: <GiEclipse />,
    type: "category",
    divider: true
  }
];
export const leftNavData = [
  { name: "Settings", icon: <FiSettings />, type: "menu" },
  { name: "Report History", icon: <AiOutlineFlag />, type: "menu" },
  { name: "Help", icon: <FiHelpCircle />, type: "menu" },
  { name: "Send feedback", icon: <RiFeedbackLine />, type: "menu" }
];

export const popular = [
  { name: "New", url: "latest" },
  { name: "Music", url: "music" },
  { name: "Satsang", url: "satsang" },
  { name: "Mixes", url: "latestMixes" },
  { name: "Kapil Sharma", url: "kapilsharma2023" },
  { name: "Live", url: "live" },
  { name: "Comedy Clubs", url: "comedyclubs" },
  { name: "Akshay Saini", url: "akshaysaini" },
  { name: "React", url: "reactjs" },
  { name: "Namaste Javascript", url: "namastejs" },
  { name: "Bollywood Music", url: "latestBollywoodmusic" },
  { name: "Mixes", url: "Mixes" },
  { name: "Selene Gomez", url: "SeleneGomez" },
  { name: "Taylor Swift", url: "TaylorSwift" },
  { name: "Cold Play", url: "ColdPlay" },
  { name: "Charlie Puth", url: "CharliePuth" },
  { name: "Shawn Mendes", url: "ShawnMendes" },
  { name: "Taarak Mehta", url: "TaarakMehta" },
  { name: "Nicki Minaj", url: "NickiMinaj" },
  { name: "Rihanna", url: "Rihanna" },
  { name: "MH370", url: "MH370" }
];

export const dropDown = [
  { title: "Add to queue", icon: <MdOutlineQueuePlayNext /> },
  { title: "Save to Watch later", icon: <MdOutlineWatchLater /> },
  { title: "Save to playlist", icon: <CgPlayList /> },
  { title: "Download", icon: <HiDownload /> },
  { title: "Share", icon: <BiShare /> }
];

export const dropDownNotRequired = [
  { title: "Not interested", icon: <MdOutlineBlock /> },
  { title: "Don’t recommend channel", icon: <MdRemoveCircleOutline /> },
  { title: "Report History", icon: <AiOutlineFlag /> }
];

export const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c9f4d2850amshb9dfa4b5ccd2a36p114befjsnc2c56da7a633",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com"
  }
};
