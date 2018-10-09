<template>
  <v-card>
    <v-img :src="img"
           height="200px">
    </v-img>
    <v-list two-line>
      <v-list-tile v-for="(lesson, i) in lessonsList"
                   :key="i"
                   :to="lesson.to">
        <v-list-tile-avatar>
          <img :src="imgLessons(lesson.img)"/>
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>{{ lesson.lesson }} </v-list-tile-title>
        </v-list-tile-content>
        <v-list-tile-action v-if="isAuthenticated">
          <v-progress-circular v-if="$store.state.Learn.spinner"
                               indeterminate
                               :size="40"
                               :width="2"
                               color="blue darken-1">
          </v-progress-circular>
          <v-list-tile-avatar
                  v-if="!$store.state.Learn.spinner">
            <img :src="becomeEuler(
                 listData(lessonsList,
                 lessonsText,
                 lessonName,
                 rating)[i],
                 max)"/>
          </v-list-tile-avatar>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "lessons-card",
  props: [
    "img",
    "lessonsList",
    "listData",
    "becomeEuler",
    "max",
    "imgLessons",
    "lessonsText",
    "lessonName",
    "rating",
    "isAuthenticated"
  ]
};
</script>
