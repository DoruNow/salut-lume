<template>
  <div>
    <div v-html="button"></div>
    <CodeEditor v-model="button" />
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
      button: "<button>Some coded button</button>",
    };
  },
};
</script>

<style lang="scss" scoped></style>
