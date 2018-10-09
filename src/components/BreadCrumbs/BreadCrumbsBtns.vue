<template>
  <v-flex xs12>
    <v-toolbar>
      <v-breadcrumbs class="hidden-xs-only">
        <v-icon slot="divider">chevron_right</v-icon>
        <v-breadcrumbs-item
                v-for="(item, i) in breadItems"
                :key="i"
                :disabled="item.disabled">
          <router-link :to="item.to"
                       tag="div">
            <div v-if="!item.disabled">
              <div :class="breadColor(subject)">
                {{ item.text }}
              </div>
            </div>
            <div v-if="item.disabled">
              {{ item.text }}
            </div>
          </router-link>
        </v-breadcrumbs-item>
      </v-breadcrumbs>
      <v-menu bottom
              class="hidden-sm-and-up">
        <v-btn icon
               slot="activator" >
          <v-icon>list</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile v-for="(item, i) in breadItems"
                       :key="i"
                       :to="item.to"
                       :disabled="item.disabled"
                       :active-class="breadColor(subject)">
            <v-list-tile-title>{{ item.text }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-spacer/>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="btn in btns"
               :key="btn.subject"
               :to="btn.to"
               :color="btnsColor(subject, btn.subject)"
               flat>
          {{ btn.subjectName }}
        </v-btn>
      </v-toolbar-items>
      <v-menu bottom
              class="hidden-md-and-up">
        <v-btn icon
               slot="activator" >
          <v-icon>more_horiz</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile v-for="(btn, i) in btns"
                       :key="i"
                       :to="btn.to"
                       :active-class="breadColor(subject)">
            <v-list-tile-title>{{ btn.subjectName }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
  </v-flex>
</template>

<script>
export default {
  name: "BreadCrumbsBtns",
  props: ["breadItems", "breadColor", "subject", "btns", "btnsColor"]
};
</script>
