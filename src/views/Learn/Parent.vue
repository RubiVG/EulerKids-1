<template>
  <v-container grid-list-lg fluid>
    <v-layout wrap>
      <bread-crumb
        :bread-items="breadItems"
        :bread-color="breadColor"
        :subject="subject"
        :btns="btns"
        :btns-color="btnsColor"
      >
      </bread-crumb>
      <server-error
        v-if="isThereError500"
        :errorMsgGetter="exerciseErrorMsgGetter"
        :errorsGetter="exerciseErrorsGetter"
      />
      <router-view
        v-show="!isThereError500"
        :isThereError500="isThereError500"
        :helpers="helpers"
        :get="get"
        :subject="subject"
        :grade="grade"
        :skill="skill"
        :lesson="lesson"
        :skillsList="skillsList"
        :imgCard="imgCard"
        :skillsImg="skillsImg"
        :imgLessons="imgLessons"
        :gradient="gradient"
        :getImgCard="getImgCard"
        :lessonsList="lessonsList"
        :lessons="lessons"
        :exercise="exercise"
        :exerciseName="exerciseName"
        :skillName="skillName"
        :subjectName="subjectName"
        :isAuthenticated="isAuthenticated"
      />
    </v-layout>
  </v-container>
</template>

<script>
import get from "lodash.get";
import { helpers } from "../../methods/helpers";
import BreadCrumb from "../../components/BreadCrumbs/BreadCrumbsBtns";
import SeverError from "../../components/Cards/CardErrors";
import { mapGetters } from "vuex";

export default {
  name: "Parent",
  components: {
    "bread-crumb": BreadCrumb,
    "server-error": SeverError
  },
  data() {
    return {
      helpers,
      get,
      btns: [
        {
          subject: "math",
          subjectName: "Math",
          to: "/learn/math"
        },
        {
          subject: "science",
          subjectName: "Science",
          to: "/learn/science"
        },
        {
          subject: "language",
          subjectName: "Language",
          to: "/learn/language"
        }
      ]
    };
  },
  methods: {
    breadColor(subject) {
      const subjects = {
        math: "blue--text text--darken-1",
        science: "light-green--text text--accent-4",
        language: "pink--text"
      };

      return subjects[subject];
    },
    btnsColor(subject, btnSubject) {
      if (subject === "math" && btnSubject === "math") {
        return "blue darken-1";
      }
      if (subject === "science" && btnSubject === "science") {
        return "light-green accent-4";
      }
      if (subject === "language" && btnSubject === "language") {
        return "pink";
      }
      return "";
    },
    gradient(subject) {
      if (subject === "math") {
        return "grad2";
      }
      if (subject === "language") {
        return "grad3";
      }
      if (subject === "science") {
        return "grad7";
      }
    },
    skillsImg(img) {
      return require(`@/assets/Skills/${this.grade}/${this.subject}/${img}`);
    },
    imgCard(getImagen) {
      return require(`@/assets/Lessons/${this.grade}/${
        this.subject
      }/cards/${getImagen}`);
    },
    imgLessons(getImgLeccion) {
      return require(`@/assets/Lessons/${getImgLeccion}`);
    }
  },
  computed: {
    ...mapGetters({
      isAuthenticated: "isAuthenticated",
      subjectName: "Learn/subjectName",
      isThereError500: "isThereError500",
      exerciseErrorMsgGetter: "Learn/exerciseErrorMsgGetter",
      exerciseErrorsGetter: "Learn/exerciseErrorsGetter"
    }),
    urlName() {
      this.$store.commit("getUrlName", this.$route.name);

      return this.$store.state.urlName;
    },
    subject() {
      this.$store.commit("Learn/getSubject", this.$route.params.subject);

      return this.$store.state.Learn.subject;
    },
    grade() {
      this.$store.commit("Learn/getGrade", this.$route.params.grade);

      return this.$store.state.Learn.grade;
    },
    skills() {
      return this.$store.state.skills;
    },
    skill() {
      this.$store.commit("Learn/getSkill", this.$route.params.skill);

      return this.$store.state.Learn.skill;
    },
    skillsList() {
      return get(this.skills, `${this.grade}.${this.subject}`, []);
    },
    lessons() {
      return this.$store.state.lessons;
    },
    lesson() {
      this.$store.commit("Learn/getLesson", this.$route.params.lesson);

      return this.$store.state.Learn.lesson;
    },
    exercise() {
      this.$store.commit("Learn/getExerciseUrl", this.$route.params.exercise);

      return this.$store.state.Learn.exerciseUrl;
    },
    skillName() {
      const skillName = this.get(
        this.lessons,
        `${this.grade}.${this.subject}.${this.skill}.skillName`,
        ""
      );
      this.$store.commit("Learn/getSkillName", skillName);

      return this.$store.state.Learn.skillName;
    },
    exerciseName() {
      const exerciseName = this.get(
        this.lessons,
        `${this.grade}.${this.subject}.${this.skill}.lessons`,
        []
      )
        .filter(a => a.page === this.lesson)
        .reduce((a, b) => {
          return b.exercises;
        }, [])
        .filter(a => a.exercise === this.exercise)
        .reduce((a, b) => {
          return b.exerciseName;
        }, ":(");

      this.$store.commit("Learn/getExerciseName", exerciseName);

      return this.$store.state.Learn.exerciseName;
    },
    lessonsList() {
      return get(
        this.lessons,
        `${this.grade}.${this.subject}.${this.skill}.lessons`,
        []
      );
    },
    breadItems() {
      if (this.urlName === "grades") {
        return [
          {
            text: "Grades",
            disabled: true,
            to: ""
          }
        ];
      }

      if (this.urlName === "skills") {
        return [
          {
            text: "Grades",
            disabled: false,
            to: this.breadGrades
          },
          {
            text: "Skills",
            disabled: true,
            to: ""
          }
        ];
      }

      if (this.urlName === "lessons") {
        return [
          {
            text: "Grades",
            disabled: false,
            to: this.breadGrades
          },
          {
            text: "Skills",
            disabled: false,
            to: this.breadTopics
          },
          {
            text: "Lessons",
            disabled: true,
            to: ""
          }
        ];
      }

      if (this.urlName === "lesson") {
        return [
          {
            text: "Grades",
            disabled: false,
            to: this.breadGrades
          },
          {
            text: "Skills",
            disabled: false,
            to: this.breadTopics
          },
          {
            text: "Lessons",
            disabled: false,
            to: this.breadLessons
          },
          {
            text: "Lesson",
            disabled: true,
            to: ""
          }
        ];
      }

      if (this.urlName === "exercise") {
        return [
          {
            text: "Grades",
            disabled: false,
            to: this.breadGrades
          },
          {
            text: "Skills",
            disabled: false,
            to: this.breadTopics
          },
          {
            text: "Lessons",
            disabled: false,
            to: this.breadLessons
          },
          {
            text: "Lesson",
            disabled: false,
            to: this.breadLesson
          },
          {
            text: "Exercise",
            disabled: true,
            to: ""
          }
        ];
      }
    },
    getImgCard() {
      return get(
        this.lessons,
        `${this.grade}.${this.subject}.${this.skill}.img`,
        ""
      );
    },
    breadGrades() {
      return `/learn/${this.subject}`;
    },
    breadTopics() {
      return `/learn/${this.subject}/${this.grade}`;
    },
    breadLessons() {
      return `/learn/${this.subject}/${this.grade}/${this.skill}`;
    },
    breadLesson() {
      return `/learn/${this.subject}/${this.grade}/${this.skill}/${
        this.lesson
      }`;
    }
  }
};
</script>
