<template>
  <div>
    <v-card :class="cardClass">
      <v-card-text :class="demoItem">
        <v-card>
          <v-card-text>
            <v-btn elevation="6" color="info">Modern Button</v-btn>
          </v-card-text>
        </v-card>
      </v-card-text>
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="12" class="d-flex justify-center">
            <CodeEditor :languages="[['html', 'HTML']]" :read_only="true" :value="valueOne" class="codeEditor" />
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
      valueOne: `<v-btn elevation="6" color="info">Modern Button</v-btn>`,
    };
  },
  computed: {
    demoItem() {
      return `d-flex align-center justify-space-around demo-card-text`;
    },
    cardClass() {
      return `ma-4 elevation-6`;
    },
  },
  methods: {
    log() {
      console.log("ACTION");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>