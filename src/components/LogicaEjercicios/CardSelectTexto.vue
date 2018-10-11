<template>
  <v-flex xs12
          sm4
          md3>
    <!--Card with click-->
        <v-card v-if="!$store.state.Learn.gotIt"
                hover
                ripple
                :color="helpers.colorToggleEjer(btn, subject)"
                @click.native="active(btn, message)">
          <v-container>
            <div class="text-xs-center"
                 :class="[darkText(btn), textSize]">{{ message }}
            </div>
          </v-container>
        </v-card>
    <!--Card without click-->
    <v-card v-if="$store.state.Learn.gotIt"
            :color="helpers.colorToggleEjer(btn, subject)">
      <v-container>
        <div class="text-xs-center"
             :class="[darkText(btn), textSize]">{{ message }}
        </div>
      </v-container>
    </v-card>
      </v-flex>
</template>

<script>
import { darkText } from "../../methods/exercises/util";

export default {
  name: "CardSelectTexto",
  props: ["helpers", "btn", "subject", "active", "message", "textSize"],
  data() {
    return {
      darkText
    };
  }
};
</script>
