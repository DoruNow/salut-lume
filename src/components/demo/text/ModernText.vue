<template>
  <div>
    <v-card :class="cardClass">
      <v-card-text class="demo-card-simple-text">
        <p class="font-weight-black">Black text.</p>
        <p class="font-weight-bold">Bold text.</p>
        <p class="font-weight-medium">Medium weight text.</p>
        <p class="font-weight-regular">Normal weight text.</p>
        <p class="font-weight-light">Light weight text.</p>
        <p class="font-weight-thin">Thin weight text.</p>
        <p class="font-italic">Italic text.</p>
      </v-card-text>

      <v-card-text class="demo-card-simple-text">
        <p class="text-left">Left aligned text on all viewport sizes.</p>
        <p class="text-center">Center aligned text on all viewport sizes.</p>
        <p class="text-right">Right aligned text on all viewport sizes.</p>
      </v-card-text>

      <v-card-text class="demo-card-simple-text">
        <a href="#" class="text-decoration-none">Non-underlined link</a>
        <div class="text-decoration-line-through">Line-through text</div>
        <div class="text-decoration-overline">Overline text</div>
        <div class="text-decoration-underline">Underline text</div>
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

    <v-card :class="cardClass">
      <v-card-text class="demo-card-simple-text">
        <p class="font-weight-black">Black text.</p>
        <p class="font-weight-bold">Bold text.</p>
        <p class="font-weight-medium">Medium weight text.</p>
        <p class="font-weight-regular">Normal weight text.</p>
        <p class="font-weight-light">Light weight text.</p>
        <p class="font-weight-thin">Thin weight text.</p>
        <p class="font-italic">Italic text.</p>
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
      valueHTMLOne: `<p class="font-weight-black">Black text.</p>
<p class="font-weight-bold">Bold text.</p>
<p class="font-weight-medium">Medium weight text.</p>
<p class="font-weight-regular">Normal weight text.</p>
<p class="font-weight-light">Light weight text.</p>
<p class="font-weight-thin">Thin weight text.</p>
<p class="font-italic">Italic text.</p>


<p class="text-left">Left aligned text on all viewport sizes.</p>
<p class="text-center">Center aligned text on all viewport sizes.</p>
<p class="text-right">Right aligned text on all viewport sizes.</p>


<a href="#" class="text-decoration-none">Non-underlined link</a>
<div class="text-decoration-line-through">Line-through text</div>
<div class="text-decoration-overline">Overline text</div>
<div class="text-decoration-underline">Underline text</div>
`,
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
  border-bottom: 1px solid rgb(146, 146, 146);
}
</style>