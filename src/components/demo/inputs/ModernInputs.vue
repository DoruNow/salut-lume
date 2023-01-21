<template>
  <div>
    <v-card :class="cardClass">
      <v-card-text class="demo-card-simple-text">
        <v-row>
          <v-col cols="12">
            <v-text-field label="Regular"></v-text-field>
            <v-text-field label="Place" placeholder="Placeholder"></v-text-field>
            <v-text-field label="Counter" placeholder="Placeholder" counter></v-text-field>
            <v-text-field label="Max 10 char" placeholder="Placeholder" counter maxlength="10"></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-text>
        <v-row>
          <v-col cols="12" class="d-flex justify-center">
            <CodeEditor :languages="[['HTML', 'HTML']]" :read_only="true" :value="valueHTMLOne" class="codeEditor" />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <v-card :class="cardClass">
      <v-card-text class="demo-card-simple-text">
        <v-row>
          <v-col cols="12">
            <v-text-field label="Outlined" outlined></v-text-field>
            <v-text-field label="Dense" dense outlined></v-text-field>
            <v-text-field label="Your product or service" value="Grocery delivery" hint="For example, flowers or used cars"></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-text>
        <v-row>
          <v-col cols="12" class="d-flex justify-center">
            <CodeEditor :languages="[['HTML', 'HTML']]" :read_only="true" :value="valueHTMLTwo" class="codeEditor" />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <v-card :class="cardClass">
      <v-card-text class="demo-card-simple-text">
        <v-row>
          <v-col cols="12">
            <v-text-field solo label="Prepend" prepend-icon="mdi-map-marker"></v-text-field>
            <v-text-field solo label="Prepend inner" prepend-inner-icon="mdi-map-marker"></v-text-field>
            <v-text-field solo label="Append" append-icon="mdi-map-marker"></v-text-field>
            <v-text-field solo label="Append outer" append-outer-icon="mdi-map-marker"></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-text>
        <v-row>
          <v-col cols="12" class="d-flex justify-center">
            <CodeEditor :languages="[['HTML', 'HTML']]" :read_only="true" :value="valueHTMLThree" class="codeEditor" />
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
      valueHTMLOne: `<v-text-field label="Regular"></v-text-field>
<v-text-field label="Place" placeholder="Placeholder"></v-text-field>
<v-text-field label="Counter" placeholder="Placeholder"></v-text-field>
<v-text-field label="Max 10 char" placeholder="Placeholder" counter maxlength="10"></v-text-field>`,
      valueHTMLTwo: `<v-text-field label="Outlined" outlined></v-text-field>
<v-text-field label="Dense" dense outlined></v-text-field>
<v-text-field label="Your product or service" value="Grocery delivery" hint="For example, flowers or used cars"></v-text-field>`,
      valueHTMLThree: `<v-text-field solo label="Prepend" prepend-icon="mdi-map-marker"></v-text-field>
<v-text-field solo label="Prepend inner" prepend-inner-icon="mdi-map-marker"></v-text-field>
<v-text-field solo label="Append" append-icon="mdi-map-marker"></v-text-field>
<v-text-field solo label="Append outer" append-outer-icon="mdi-map-marker"></v-text-field>`,
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