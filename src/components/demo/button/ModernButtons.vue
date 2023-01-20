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
            <CodeEditor
              :languages="[['html', 'HTML']]"
              :read_only="true"
              :value="valueOne"
              class="codeEditor"
            />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <v-card :class="cardClass">
      <v-card-text :class="demoItem">
        <v-btn color="info">Modern Button</v-btn>
        <v-btn color="green darken-3">next</v-btn>
        <v-btn fab color="warning">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn color="error">Cancel</v-btn>
      </v-card-text>
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="12" class="d-flex justify-center">
            <CodeEditor
              :languages="[['html', 'HTML']]"
              :read_only="true"
              :value="valueTwo"
              class="codeEditor"
            />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <v-card :class="cardClass">
      <v-card-text :class="demoItem">
        <v-btn color="info" @click="log">1 2 3...</v-btn>
      </v-card-text>
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="6" class="d-flex justify-center">
            <CodeEditor
              :languages="[['html', 'HTML']]"
              :read_only="true"
              :value="valueThree"
              class="codeEditor"
            />
          </v-col>
          <v-col cols="12" sm="6" class="d-flex justify-center">
            <CodeEditor
              :languages="[['js', 'JavaScript']]"
              :read_only="true"
              :value="valueJSOne"
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
      valueOne: `<v-btn elevation="6" color="info">Modern Button</v-btn>`,
      valueTwo: `<v-btn color="info">Modern Button</v-btn>
<v-btn color="green darken-3">next</v-btn>
<v-btn color="warning" fab>
    <v-icon>mdi-pencil</v-icon>
</v-btn>
<v-btn color="error">Cancel</v-btn>`,
      valueThree: `<v-btn color="info" @click="log">1 2 3...</v-btn>`,
      valueJSOne: `log() {
    console.log("ACTION");
}`,
    };
  },
  computed: {
    demoItem() {
      return `d-flex align-center justify-space-around demo-card-text`;
    },
    cardClass() {
      return `ma-4 elevation-10`;
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