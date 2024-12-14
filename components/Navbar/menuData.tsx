import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Services",
    newTab: false,
    path: "/#services",
  },
  {
    id: 3,
    title: "Process",
    newTab: false,
    path: "/#process",
  },
  {
    id: 4,
    title: "Technologies",
    newTab: false,
    path: "/#technologies", // Add this path for Technologies
  },
  {
    id: 5,
    title: "About Us",
    newTab: false,
    path: "/#aboutus", // Add this path for Technologies
  },

  {
    id: 6,
    title: "FAQ",
    newTab: false,
    path: "/#faq",
  },

];

export default menuData;
