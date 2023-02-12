import { FiClock, FiHeart, FiPhone, FiTrendingUp } from "react-icons/fi";
import { IconType } from "react-icons";

interface LinkItemProps {
    name: string;
    icon: IconType;
}

export const LinkItems: Array<LinkItemProps> = [
    { name: "Latest News", icon: FiTrendingUp },
    { name: "About & contact", icon: FiPhone },
    { name: "Donators", icon: FiHeart },
    { name: "Loot split", icon: FiPhone },
    { name: "Boss timers", icon: FiClock },
    { name: "Hunting places", icon: FiClock },
    { name: "Bestiary References", icon: FiClock },
    { name: "Youtube videos & guides", icon: FiClock },
    { name: "Exercise weapons calculator", icon: FiClock },
    { name: "Imbue calculator", icon: FiClock },
    { name: "Exp share calculator", icon: FiClock },
    { name: "Stamina calculator", icon: FiClock },
    { name: "Leveling calculator", icon: FiClock },
    { name: "Training calculator", icon: FiClock },
    { name: "Leech calculator", icon: FiClock },
];