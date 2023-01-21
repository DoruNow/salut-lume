<template>
  <div>
    <v-card :class="cardClass">
      <v-card-text class="demo-card-simple-text d-flex flex-column justify-start align-start"> </v-card-text>
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="12" class="d-flex justify-center">
            <CodeEditor :languages="[['HTML', 'HTML']]" :read_only="true" :value="valueHTMLOne" class="codeEditor" />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import CodeEditor from "simple-code-editor";
export default {
  components: {
    CodeEditor,
  },
  data() {
    return {
      valueHTMLOne: ``,
    };
  },
  computed: {
    demoItem() {
      return `d-flex flex-column align-center justify-center demo-card-text`;
    },
    cardClass() {
      return `ma-4 elevation-10`;
    },
  },
};
</script>

<style lang="scss" scoped>
.demo-card-simple-text {
  width: 100%;
  background-color: rgb(156, 209, 255);
}
</style>