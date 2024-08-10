import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import {
  FaSkiing,
  FaPumpSoap,
  FaShower,
  FaFireExtinguisher,
  FaUmbrellaBeach,
  FaKey,
} from "react-icons/fa";
import { FaHouseUser, FaPeopleRoof, FaKitchenSet } from "react-icons/fa6";
import {
  BiSolidWasher,
  BiSolidDryer,
  BiSolidFirstAid,
  BiWifi,
  BiSolidFridge,
  BiWorld,
} from "react-icons/bi";
import { BsSnow, BsFillDoorOpenFill, BsPersonWorkspace } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineVilla, MdMicrowave, MdBalcony, MdYard, MdPets } from "react-icons/md";
import {
  PiBathtubFill,
  PiCoatHangerFill,
  PiTelevisionFill,
} from "react-icons/pi";
import { TbIroning3 } from "react-icons/tb";
import {
  GiHeatHaze,
  GiCctvCamera,
  GiBarbecue,
  GiToaster,
  GiCampfire,
} from "react-icons/gi";
import { AiFillCar } from "react-icons/ai";

export const categories = [
  {
    label: "Voir toutes les catégories",
    icon: <BiWorld />,
  },
  {
    img: "assets/beach_cat.jpg",
    label: "Face à la Mer",
    icon: <TbBeach />,
    description: "Cette propriété est proche de la plage !",
  },
  {
    img: "assets/windmill_cat.webp",
    label: "Moulins à vent",
    icon: <GiWindmill />,
    description: "Cette propriété a des moulins à vent !",
  },
  {
    img: "assets/modern_cat.webp",
    label: "Villes emblématiques",
    icon: <MdOutlineVilla />,
    description: "Cette propriété est moderne !",
  },
  {
    img: "assets/countryside_cat.webp",
    label: "Campagne",
    icon: <TbMountain />,
    description: "Cette propriété est à la campagne !",
  },
  {
    img: "assets/pool_cat.jpg",
    label: "Les plus belles piscines",
    icon: <TbPool />,
    description: "Cette propriété dispose d'une belle piscine !",
  },
  {
    img: "assets/island_cat.webp",
    label: "îles",
    icon: <GiIsland />,
    description: "Cette propriété est sur une île !",
  },
  {
    img: "assets/lake_cat.webp",
    label: "Bord du lac",
    icon: <GiBoatFishing />,
    description: "Cette propriété est à proximité d'un lac !",
  },
  {
    img: "assets/skiing_cat.jpg",
    label: "Accès aux pistes de ski",
    icon: <FaSkiing />,
    description: "Cette propriété propose des activités de ski !",
  },
  {
    img: "assets/castle_cat.webp",
    label: "Châteaux",
    icon: <GiCastle />,
    description: "Cette propriété est un ancien château !",
  },
  {
    img: "assets/cave_cat.jpg",
    label: "Grottes",
    icon: <GiCaveEntrance />,
    description: "Cette propriété est dans une grotte !",
  },
  {
    img: "assets/camping_cat.jpg",
    label: "Camping",
    icon: <GiForestCamp />,
    description: "Cette propriété propose des activités de camping !",
  },
  {
    img: "assets/arctic_cat.webp",
    label: "Arctique",
    icon: <BsSnow />,
    description: "Cette propriété est dans un environnement arctique !",
  },
  {
    img: "assets/desert_cat.webp",
    label: "Desert",
    icon: <GiCactus />,
    description: "Cette propriété est dans le désert !",
  },
  {
    img: "assets/barn_cat.jpg",
    label: "Granges",
    icon: <GiBarn />,
    description: "Cette propriété est dans une grange !",
  },
  {
    img: "assets/lux_cat.jpg",
    label: "Luxe",
    icon: <IoDiamond />,
    description: "Cette propriété est toute neuve et luxueuse !",
  },
];

export const types = [
  {
    name: "Espace personnel",
    description: "Les clients ont tout le logement pour eux seuls", 
    icon: <FaHouseUser />,
  },
  {
    name: "Pièce(s) de vie privée",
    description:  "Les clients disposent de leur propre chambre dans une maison et d'un accès aux lieux partagés",
    icon: <BsFillDoorOpenFill />,
  },
  {
    name: "Une chambre partagée",
    description: "Les clients dorment dans une chambre ou un espace commun qui peut être partagé d'autres personnes.",
    icon: <FaPeopleRoof />,
  },
];

export const facilities = [
  {
    name: "Baignoire",
    icon: <PiBathtubFill />,
  },
  {
    name: "Produits de soins",
    icon: <FaPumpSoap />,
  },
  {
    name: "Douche extérieure",
    icon: <FaShower />,
  },
  {
    name: "Machine à laver",
    icon: <BiSolidWasher />,
  },
  {
    name: "Séchoir",
    icon: <BiSolidDryer />,
  },
  {
    name: "Cintres",
    icon: <PiCoatHangerFill />,
  },
  {
    name: "Fer",
    icon: <TbIroning3 />,
  },
  {
    name: "TV",
    icon: <PiTelevisionFill />,
  },
  {
    name: "Espace de travail dédié",
    icon: <BsPersonWorkspace />
  },
  {
    name: "Climatisation",
    icon: <BsSnow />,
  },
  {
    name: "Chauffage",
    icon: <GiHeatHaze />,
  },
  {
    name: "Des caméras de sécurité",
    icon: <GiCctvCamera />,
  },
  {
    name: "Extincteur d'incendie",
    icon: <FaFireExtinguisher />,
  },
  {
    name: "Premiers secours",
    icon: <BiSolidFirstAid />,
  },
  {
    name: "Wifi",
    icon: <BiWifi />,
  },
  {
    name: "Ensemble de cuisine",
    icon: <FaKitchenSet />,
  },
  {
    name: "Réfrigérateur",
    icon: <BiSolidFridge />,
  },
  {
    name: "Four micro onde",
    icon: <MdMicrowave />,
  },
  {
    name: "Poêle",
    icon: <GiToaster />,
  },
  {
    name: "Barbecue",
    icon: <GiBarbecue />,
  },
  {
    name: "coin repas extérieur",
    icon: <FaUmbrellaBeach />,
  },
  {
    name: "Patio ou balcon privé",
    icon: <MdBalcony />,
  },
  {
    name: "Feu de camp",
    icon: <GiCampfire />,
  },
  {
    name: "Jardin",
    icon: <MdYard />,
  },
  {
    name: "Parking gratuit",
    icon: <AiFillCar />,
  },
  {
    name: "Enregistrement automatique",
    icon: <FaKey />
  },
  {
    name: "Animaux acceptés",
    icon: <MdPets />
  }
];