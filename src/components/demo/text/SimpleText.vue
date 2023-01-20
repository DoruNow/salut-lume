<template>
  <div>
    <v-card :class="cardClass">
      <v-card-text class="demo-card-simple-text">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
        <p>Hello, I am a paragraph element.</p>
        <p><b>This text is bold</b></p>
        <p><i>This text is italic</i></p>
        <p>This is<sub> subscript</sub> and <sup>superscript</sup></p>
        <a href="https://www.google.com/" target="_blank"
          >I am a link to Google</a
        >
      </v-card-text>
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="12" class="d-flex justify-center">
            <CodeEditor
              :languages="[['HTML', 'HTML']]"
              :read_only="true"
              :value="valueHTMLOne"
              class="codeEditor"
            />
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
      valueHTMLOne: `<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
<p>Hello, I am a paragraph element.</p>
<p><b>This text is bold</b></p>
<p><i>This text is italic</i></p>
<p>This is<sub> subscript</sub> and <sup>superscript</sup></p>
<a href="https://www.google.com/" target="_blank">I am a link to Google</a>`,
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