<template>
  <slot-exercises>
    <div slot="instruction">
      Count the objects in each box:
    </div>
    <div slot="operation">
      Choose the group that has <b><span class="blue--text darken--1--text">{{ question.has }}</span></b>
      {{ question.subject }}
    </div>
    <div slot="interaction">
      <v-container fluid>
        <v-layout row
                  wrap>
          <question-card
                  v-for="question in questions"
                  :key="question.img"
                  :colorToggle="helpers.colorToggleEjer"
                  :subject="subject"
                  :btn="exerciseMethods.buttons(question.key)"
                  :active="question.active"
                  :answerData="question.answerData"
                  :img="question.img">
          </question-card>
        </v-layout>
      </v-container>
    </div>
    <div slot="yourAnswer">
      <your-answer
              :helpers="helpers"
              :img="img"
              :question="question">
      </your-answer>
    </div>
    <div slot="solution">
      <div>
        Notice that the first image shows <span class="katex blue--text text--darken-1" v-katex="questions[0].quantity"></span>
        {{questions[0].object}} and the second one shows
        <span class="katex blue--text text--darken-1" v-katex="questions[1].quantity"></span> {{questions[1].object}}.
      </div>
      <div class="images-2">
        <div>
          <img v-for="question in questions"
               :src="img(question.folder, question.answer)"
               height="150"
               class="responsive">
        </div>
      </div>
      <div v-if="menosOMas(question.has)">
        <div class="mt-3">
          If we compare our numbers on the number line, we can see that
          <span class="katex blue--text text--darken-1" v-katex="behind(questions[0].quantity, questions[1].quantity)"></span>
          is less than
          <span class="katex blue--text text--darken-1" v-katex="forward(questions[0].quantity, questions[1].quantity)"></span>.
        </div>
        <div>
          <img :src="img(question.folder2, question.numberLine1)"
               height="150"
               class="responsive">
        </div>
        <div>
          <img :src="img(question.folder2, question.numberLine2)"
               height="150"
               class="responsive">
        </div>
      </div>
      <!--Tiene mas-->
      <div v-else>
        <div class="mt-3">
          If we compare our numbers on the number line, we can see that
          <span class="katex blue--text text--darken-1" v-katex="forward(questions[0].quantity, questions[1].quantity)"></span>
          is more than
          <span class="katex blue--text text--darken-1" v-katex="behind(questions[0].quantity, questions[1].quantity)"></span>.
        </div>
        <div>
          <img :src="img(question.folder2, question.numberLine1)"
               height="150"
               class="responsive">
        </div>
        <div>
          <img :src="img(question.folder2, question.numberLine2)"
               height="150"
               class="responsive">
        </div>
      </div>
    </div>
    <div slot="correctAnswer">
      <div class="mt-2">
        <img :src="img(question.folder, question.correct)"
             height="150"
             class="responsive">
      </div>
    </div>
  </slot-exercises>
</template>

<script>
import SlotExercises from "../../../../../slots/EjercicioSlot";
import Card from "../../../../../../../components/Cards/CardPreguntaEjer";
import Answer from "../../../../../../../components/Textos/Respuesta2";
import { shuffleFisher } from "../../../../../../../methods/exercises/util";

export default {
  name: "Dynamic",
  props: ["helpers", "subject", "exerciseMethods", "img"],
  components: {
    "question-card": Card,
    "your-answer": Answer,
    "slot-exercises": SlotExercises
  },
  methods: {
    forward(a, b) {
      if (Number(a) < Number(b)) {
        return b;
      }

      if (Number(b) < Number(a)) {
        return a;
      }
    },
    behind(a, b) {
      if (Number(a) > Number(b)) {
        return b;
      }

      if (Number(b) > Number(a)) {
        return a;
      }
    },
    menosOMas(less) {
      return less === "less";
    }
  },
  computed: {
    questions() {
      const questions = [
        {
          key: "1",
          folder: this.question.folder,
          folder2: this.question.folder2,
          active: this.exerciseMethods.active1,
          img: this.img(this.question.folder, this.question.correct),
          quantity: this.question.quantity1,
          object: this.question.object1,
          answer: this.question.answer1,
          answerData: this.question.correct
        },
        {
          key: "2",
          folder: this.question.folder,
          folder2: this.question.folder2,
          active: this.exerciseMethods.active2,
          img: this.img(this.question.folder, this.question.incorrect),
          quantity: this.question.quantity2,
          object: this.question.object2,
          answer: this.question.answer2,
          answerData: this.question.incorrect
        }
      ];

      return shuffleFisher(questions);
    },
    question() {
      return this.$store.state.Learn.question;
    }
  }
};
</script>
