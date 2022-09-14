import Landing from "@/landing/views/Landing";
import About from "@/landing/views/About";
import Vacancies from "@/landing/views/Vacancies";

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
