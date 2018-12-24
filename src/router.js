import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

const LearnParent = () => import("./views/Learn/Parent");
const Grades = () => import("./views/Learn/01Grades/Grades");
const Skills = () => import("./views/Learn/02Skills/Skills");
const Lessons = () => import("./views/Learn/03Lessons/Lessons");
const Lesson = () => import("./views/Learn/04Lesson/Lesson");
const Exercise = () => import("./views/Learn/05Exercise/Exercise");

const SettingsParent = () => import("./views/Settings/Parent");
const SettingsMenu = () => import("./views/Settings/SettingsMenu");
const Setting = () => import("./views/Settings/Setting/Setting");

const Love = () => import("./views/Love/Love");
const AboutUs = () => import("./views/AboutUs/AboutUs");
const Donate = () => import("./views/Donate/Donate");
const Help = () => import("./views/Help/Help");
const Privacy = () => import("./views/Privacy/Privacy");
const Terms = () => import("./views/Terms/Terms");

const ResetPassword = () => import("./views/ResetPassword/ResetPassword");

Vue.use(Router);

export default new Router({
  mode: 'history',
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
      path: "/love",
      name: "love",
      component: Love
    },
    {
      path: "/about-us",
      name: "aboutUs",
      component: AboutUs
    },
    {
      path: "/donate",
      name: "donate",
      component: Donate
    },
    {
      path: "/help",
      name: "help",
      component: Help
    },
    {
      path: "/privacy-policy",
      name: "privacyPolicy",
      component: Privacy
    },
    {
      path: "/terms-of-service",
      name: "termsOfService",
      component: Terms
    },
    {
      path: "/reset/:token",
      name: "reset",
      component: ResetPassword
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});
