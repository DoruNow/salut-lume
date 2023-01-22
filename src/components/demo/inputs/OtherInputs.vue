<template>
  <div>
    <v-card :class="cardClass">
      <v-card-text class="demo-card-simple-text d-flex flex-column justify-start align-start">
        <v-row style="width: 100%">
          <v-col cols="12" sm="3">
            <v-radio-group>
              <v-radio label="Radio 1" value="1"></v-radio>
              <v-radio label="Radio 2" value="2"></v-radio>
              <v-radio label="Radio 3" value="3"></v-radio>
            </v-radio-group>
          </v-col>
          <v-col cols="12" sm="3">
            <v-select :items="['First', 'Final']" menu-props="auto" label="Frontiers" prepend-icon="mdi-map" single-line></v-select>
          </v-col>
          <v-col cols="12" sm="3">
            <v-switch label="red" color="red" value="red"></v-switch>
            <v-switch label="red darken-3" color="red darken-3" value="red darken-3"></v-switch>
          </v-col>
          <v-col cols="12" sm="3">
            <v-checkbox label="success" color="success" value="success"></v-checkbox>
            <v-checkbox label="info" color="info" value="info"></v-checkbox>
          </v-col>
        </v-row>
      </v-card-text>
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
      valueHTMLOne: `<v-radio-group>
    <v-radio :label="Radio 1" :value="1"></v-radio>
    <v-radio :label="Radio 2" :value="2"></v-radio>
    <v-radio :label="Radio 3" :value="3"></v-radio>
</v-radio-group>

<v-select :items="['First', 'Final']" menu-props="auto" label="Frontiers" prepend-icon="mdi-map" single-line></v-select>

<v-switch label="red" color="red" value="red"></v-switch>
<v-switch label="red darken-3" color="red darken-3" value="red darken-3"></v-switch>
          
<v-checkbox label="success" color="success" value="success"></v-checkbox>
<v-checkbox label="info" color="info" value="info"></v-checkbox>`,
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