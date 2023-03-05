<template>
  <div>
    <v-card :class="cardClass">
      <v-card-text class="demo-card-text">
        <div class="center">
          <button>Centered Button</button>
        </div>
      </v-card-text>
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="6" class="d-flex justify-center">
            <CodeEditor :languages="[['HTML', 'HTML']]" :read_only="true" :value="valueHTMLOne" class="codeEditor" />
          </v-col>
          <v-col cols="12" sm="6" class="d-flex justify-center">
            <CodeEditor :languages="[['CSS', 'CSS']]" :read_only="true" :value="valueCSSOne" class="codeEditor" />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <v-card :class="cardClass">
      <v-card-text class="demo-card-text">
        <div class="center">
          <button class="bordered">Centered Buttons</button>
          <button class="bordered">Centered Buttons</button>
        </div>
      </v-card-text>
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="6" class="d-flex justify-center">
            <CodeEditor :languages="[['HTML', 'HTML']]" :read_only="true" :value="valueHTMLTwo" class="codeEditor" />
          </v-col>
          <v-col cols="12" sm="6" class="d-flex justify-center">
            <CodeEditor :languages="[['CSS', 'CSS']]" :read_only="true" :value="valueCSSTwo" class="codeEditor" />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card :class="cardClass">
      <v-card-text class="demo-card-text">
        <div class="center">
          <button class="bordered padded">Padded Buttons</button>
          <button class="bordered padded">Padded Buttons</button>
        </div>
      </v-card-text>
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="6" class="d-flex justify-center">
            <CodeEditor :languages="[['HTML', 'HTML']]" :read_only="true" :value="valueHTMLThree" class="codeEditor" />
          </v-col>
          <v-col cols="12" sm="6" class="d-flex justify-center">
            <CodeEditor :languages="[['CSS', 'CSS']]" :read_only="true" :value="valueCSSThree" class="codeEditor" />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card :class="cardClass">
      <v-card-text class="demo-card-text">
        <div class="center">
          <button class="bordered padded margin">Buttons with margin</button>
          <button class="bordered padded margin">Buttons with margin</button>
        </div>
      </v-card-text>
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="6" class="d-flex justify-center">
            <CodeEditor :languages="[['HTML', 'HTML']]" :read_only="true" :value="valueHTMLFour" class="codeEditor" />
          </v-col>
          <v-col cols="12" sm="6" class="d-flex justify-center">
            <CodeEditor :languages="[['CSS', 'CSS']]" :read_only="true" :value="valueCSSFour" class="codeEditor" />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card :class="cardClass">
      <v-card-text class="demo-card-text">
        <div class="center">
          <button class="button">Refactored Buttons</button>
          <button class="button">Refactored Buttons</button>
        </div>
      </v-card-text>
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="6" class="d-flex justify-center">
            <CodeEditor :languages="[['HTML', 'HTML']]" :read_only="true" :value="valueHTMLFive" class="codeEditor" />
          </v-col>
          <v-col cols="12" sm="6" class="d-flex justify-center">
            <CodeEditor :languages="[['CSS', 'CSS']]" :read_only="true" :value="valueCSSFive" class="codeEditor" />
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
      valueHTMLOne: `<div class="center">
    <button>Centered Button</button>
</div>`,
      valueHTMLTwo: `<div class="center">
    <button>Centered Buttons</button>
    <button>Centered Buttons</button>
</div>`,
      valueHTMLThree: `<div class="center">
  <button class="bordered padded">Padded Buttons</button>
  <button class="bordered padded">Padded Buttons</button>
</div>`,
      valueHTMLFour: `<div class="center">
  <button class="bordered padded margin">Buttons with margin</button>
  <button class="bordered padded margin">Buttons with margin</button>
</div>`,
      valueHTMLFive: `<div class="center">
  <button class="button">Refactored Buttons</button>
  <button class="button">Refactored Buttons</button>
</div>`,
      valueCSSOne: `.center {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}`,
      valueCSSTwo: `.center {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bordered {
  border: 1px solid red;
}`,
      valueCSSThree: `.center {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bordered {
  border: 1px solid red;
}

.padded {
  padding: 10px;
}`,
      valueCSSFour: `.center {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bordered {
  border: 1px solid red;
}

.padded {
  padding: 10px;
}

.margin {
  margin: 0 10px;
}`,
      valueCSSFive: `
.center {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button {
  border: 1px solid red;
  padding: 10px;
  margin: 0 10px;
}`,
    };
  },
  computed: {
    demoItem() {
      return `d-flex flex-column align-center justify-center demo-card-text`;
    },
    cardClass() {
      return `ma-4 elevation-6`;
    },
  },
};
</script>

<style lang="scss" scoped>
.center {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bordered {
  border: 1px solid red;
}

.padded {
  padding: 10px;
}

.margin {
  margin: 0 10px;
}

.button {
  border: 1px solid red;
  padding: 10px;
  margin: 0 10px;
}
</style>