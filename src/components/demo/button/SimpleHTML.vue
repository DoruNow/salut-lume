<template>
  <v-card :class="cardClass">
    <v-card-text class="demo-card-text">
      <input type="button" value="Basic HTML button" />
    </v-card-text>
    <v-card-text>
      <v-row>
        <v-col cols="12" sm="12" class="d-flex justify-center">
          <CodeEditor
            :languages="[['HTML', 'HTML']]"
            :read_only="true"
            :value="valueHTML"
            class="codeEditor"
          />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import CodeEditor from "simple-code-editor";
export default {
  components: {
    CodeEditor,
  },
  data() {
    return {
      valueHTML: `<input type="button" value="Basic HTML button">`,
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
</style>