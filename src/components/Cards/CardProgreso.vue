<template>
  <v-flex xs12
          md6
          offset-md3>
    <v-card tile>
      <v-container fluid grid-list-lg>
        <v-layout>
          <v-flex>
            <v-img :src="imgLessons(src)"
                   height="100px"
                   contain
                   class="ma-2">
            </v-img>
            <div class="title grey--text text--darken-1 text-xs-center">
              {{ exerciseName }}
            </div>
          </v-flex>
        </v-layout>
        <spinner v-if="spinner"
                 :width="width"
                 :size="size">
        </spinner>
        <v-card v-if="!spinner"
                tile
                flat>
          <v-container fluid
                       grid-list-lg >
            <v-layout >
              <v-flex xs12>
                <div class="title grey--text text--darken-1 text-xs-center">
                  Correct
                  <p class="blue--text text--darken-1 text-xs-center mt-2">
                    {{ formatNumber(correct) }}/{{ formatNumber(total) }}
                  </p>
                </div>
              </v-flex>
              <v-flex xs12>
                <div class="title grey--text text--darken-1 text-xs-center">
                  Time
                  <p class="blue--text text--darken-1 text-xs-center mt-2">
                    {{ timeFormat(time) }}
                  </p>
                </div>
              </v-flex>
            </v-layout>
            <v-layout>
              <v-flex xs12>
                <div class="title grey--text text--darken-1 text-xs-center">
                  Current Level
                  <v-img :src="becomeEuler(rating, max)"
                         contain
                         height="100"
                         class="mt-2">
                  </v-img>
                </div>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
        <v-flex xs12>
          <div class="title grey--text text--darken-1 text-xs-center">
            Daily Practice
          </div>
        </v-flex>
        <div class="amCharts" ref="chartdiv">
        </div>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
import MixinLearn from "../../mixins/learn";
import Spinner from "../../components/Spinners/Spinner";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

export default {
  props: [
    "src",
    "imgLessons",
    "total",
    "correct",
    "time",
    "rating",
    "exerciseName",
    "spinner",
    "size",
    "width"
  ],
  name: "CardProgreso",
  mixins: [MixinLearn],
  components: {
    spinner: Spinner
  },
  methods: {
    formatNumber(number) {
      return new Intl.NumberFormat().format(number);
    },
    timeFormat(userSeconds) {
      var seconds = Math.floor(userSeconds),
        hours = Math.floor(seconds / 3600);
      seconds -= hours * 3600;
      var minutes = Math.floor(seconds / 60);
      seconds -= minutes * 60;

      if (hours < 10) {
        hours = "0" + hours;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      return hours + ":" + minutes + ":" + seconds;
    }
  },
  mounted() {
    let chart = am4core.create(this.$refs.chartdiv, am4charts.XYChart);

    chart.paddingRight = 20;

    let data = [];
    let visits = 10;
    for (let i = 1; i < 366; i++) {
      visits += Math.round((Math.random() < 0.5 ? 1 : 0) * Math.random() * 10);
      data.push({
        date: new Date(2018, 0, i),
        name: "name" + i,
        value: visits,
        time: visits + 100
      });
    }

    chart.data = data;
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;

    // DurationAxis instead of ValueAxis
    let valueAxis = chart.yAxes.push(new am4charts.DurationAxis());
    valueAxis.title.text = "[#757575]Time[/]";
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;
    valueAxis.baseUnit = "second";

    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "time";

    series.tooltipText =
      "Date: {date} \n Time: {time.formatDuration('hh:mm:ss')} \n Exercises: {valueY}";
    series.tooltip.getFillFromObject = false;
    series.tooltip.background.fill = am4core.color("#1E88E5");
    chart.cursor = new am4charts.XYCursor();

    let scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    chart.scrollbarX = scrollbarX;

    this.chart = chart;
  },

  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose();
    }
  }
};
</script>

<style scoped>
.amCharts {
  width: 100%;
  height: 500px;
}
</style>
