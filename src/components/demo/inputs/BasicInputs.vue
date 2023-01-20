<template>
  <div>
    <v-card :class="cardClass">
      <v-card-text
        class="
          demo-card-simple-text
          d-flex
          flex-column
          justify-start
          align-start
        "
      >
        <div>
          <span class="pr-2">button:</span><input type="button" value="Click" />
        </div>
        <div><span class="pr-2">checkbox:</span><input type="checkbox" /></div>
        <div><span class="pr-2">color:</span><input type="color" /></div>
        <div><span class="pr-2">date:</span><input type="date" /></div>
        <div>
          <span class="pr-2">datetime:</span><input type="datetime-local" />
        </div>
        <div><span class="pr-2">email:</span><input type="email" /></div>
        <div><span class="pr-2">file:</span><input type="file" /></div>
        <div><span class="pr-2">month:</span><input type="month" /></div>
        <div><span class="pr-2">number:</span><input type="number" /></div>
        <div>
          <span class="pr-2">number:</span
          ><input type="number" min="0" max="100" step="10" value="30" />
        </div>
        <div><span class="pr-2">password:</span><input type="password" /></div>
        <div><span class="pr-2">radio:</span><input type="radio" /></div>
        <div><span class="pr-2">range:</span><input type="range" /></div>
        <div><span class="pr-2">reset:</span><input type="reset" /></div>
        <div><span class="pr-2">search:</span><input type="search" /></div>
        <div><span class="pr-2">submit:</span><input type="submit" /></div>
        <div><span class="pr-2">tel:</span><input type="tel" /></div>
        <div><span class="pr-2">text:</span><input type="text" /></div>
        <div><span class="pr-2">time:</span><input type="time" /></div>
        <div><span class="pr-2">url:</span><input type="url" /></div>
        <div><span class="pr-2">week:</span><input type="week" /></div>
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
      valueHTMLOne: `<input type="button" value="Click" />
<input type="checkbox" />
<input type="color" />
<input type="date" />
<input type="datetime-local" />
<input type="email" />
<input type="file" />
<input type="month" />
<input type="number" />
<input type="number" min="0" max="100" step="10" value="30" />
<input type="password" />
<input type="radio" />
<input type="range" />
<input type="reset" />
<input type="search" />
<input type="submit" />
<input type="tel" />
<input type="text" />
<input type="time" />
<input type="url" />
<input type="week" />`,
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