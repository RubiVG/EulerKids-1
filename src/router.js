import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

const LearnParent = () => import("./views/Learn/Parent");
const Grades = () => import("./views/Learn/01Grades/Grades");
const Skills = () => import("./views/Learn/02Skills/Skills");
const Lessons = () => import("./views/Learn/03Lessons/Lessons");
const Lesson = () => import("./views/Learn/04Lesson/Lesson");
const Exercise = () => import("./views/Learn/05Ejercicio/Ejercicio");

const SettingsParent = () => import("./views/Settings/Parent");
const SettingsMenu = () => import("./views/Settings/SettingsMenu");
const Setting = () => import("./views/Settings/Setting/Setting");

const ResetPassword = () => import("./views/ResetPassword/ResetPassword");

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/learn",
      component: LearnParent,
      children: [
        {
          path: ":subject",
          name: "grades",
          component: Grades
        },
        {
          path: ":subject/:grade",
          name: "skills",
          component: Skills
        },
        {
          path: ":subject/:grade/:skill",
          name: "lessons",
          component: Lessons
        },
        {
          path: ":subject/:grade/:skill/:lesson",
          name: "lesson",
          component: Lesson
        },
        {
          path: ":subject/:grade/:skill/:lesson/:exercise",
          name: "exercise",
          component: Exercise
        }
      ]
    },
    {
      path: "/settings",
      component: SettingsParent,
      children: [
        {
          path: "",
          name: "settings",
          component: SettingsMenu
        },
        {
          path: ":setting",
          name: "setting",
          component: Setting
        }
      ]
    },
    {
      path: "/reset/:token",
      name: "reset",
      component: ResetPassword
    }
  ]
});
