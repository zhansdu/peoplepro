import Landing from "@/views/Landing";
import About from "@/views/About";
import Vacancies from "@/views/Vacancies";

export default [
  {
    path: "/",
    name: "home",
    component: Landing
  },
  {
    path: "/vacancies",
    name: "vacancies",
    component: Vacancies
  },
  {
    path: "/about",
    name: "about",
    component: About
  }
];
