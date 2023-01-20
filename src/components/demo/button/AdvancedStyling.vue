<template>
  <div>
    <v-card class="cardClass">
      <v-card-text :class="demoItem">
        <button id="coolButton">I'm better</button>
      </v-card-text>
      <v-card-text :class="demoItemCode">
        <v-row>
          <v-col cols="12" sm="6" class="d-flex justify-center">
            <CodeEditor
              :languages="[['HTML', 'HTML']]"
              :read_only="true"
              :value="coolButton"
              class="codeEditor"
            />
          </v-col>
          <v-col cols="12" sm="6" class="d-flex justify-center">
            <CodeEditor
              :languages="[['css', 'CSS']]"
              :read_only="true"
              :value="coolButtonCss"
          /></v-col>
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
      coolButton: '<button id="coolButton">I\'m better</button>',
      coolButtonCss: `#coolButton {
  background-color: #fff;
  border-radius: 24px;
  color: #3c4043;
  font-weight: 500;
  height: 48px;
  letter-spacing: 0.25px;
  overflow: visible;
  padding: 2px 24px;
  border: 1px solid rgb(255, 115, 22);
}`,
    };
  },
  computed: {
    demoItem() {
      return `d-flex flex-column align-center justify-center demo-card-text`;
    },
    cardClass() {
      return `d-flex flex-column align-center justify-space-around elevation-10`;
    },
    demoItemCode() {
      return "";
    },
  },
};
</script>

<style lang="scss" scoped>
#coolButton {
  background-color: #fff;
  border-radius: 24px;
  color: #3c4043;
  font-weight: 500;
  height: 48px;
  letter-spacing: 0.25px;
  overflow: visible;
  padding: 2px 24px;
  border: 1px solid rgb(255, 115, 22);
}
</style>