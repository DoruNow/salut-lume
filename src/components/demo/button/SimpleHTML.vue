<template>
  <v-card class="cardClass">
    <v-card-text class="demo-card-text">
      <button>Basic HTML button</button>
    </v-card-text>
    <v-card-text>
      <v-row>
        <v-col cols="12" sm="12" class="d-flex justify-center">
          <CodeEditor
            :languages="[['HTML', 'HTML']]"
            :read_only="true"
            value="<button>Basic HTML button</button>"
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
  computed: {
    demoItem() {
      return `d-flex flex-column align-center justify-center demo-card-text`;
    },
    cardClass() {
      return `d-flex flex-column align-center justify-space-around elevation-10`;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>