import Landing from "@/landing/views/Landing";
import About from "@/landing/views/About";
import Vacancies from "@/landing/views/Vacancies";
import Cv from "@/landing/views/CV/index.vue";
import Employer from "@/landing/views/CV/indexEmployer.vue";
import Success from "@/landing/views/SuccessScreen/success.vue";

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
  },
  {
    path: "/new_cv",
    name: "cv",
    component: Cv
  },
  {
    path: "/new_employer",
    name: "employer",
    component: Employer
  },
  {
    path: "/success",
    name: "success",
    component: Success
  }
];
