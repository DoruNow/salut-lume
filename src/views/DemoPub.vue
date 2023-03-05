<template>
  <div class="sl-tabs">
    <v-app-bar dense class="elevation-12">
      <v-spacer></v-spacer>
      <span class="info--text text-h6">HTML CSS JS</span>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-app>
      <v-navigation-drawer v-model="drawer" app class="d-flex justify-center align-center" color="grey lighten-3" mini-variant>
        <div class="pt-4 d-flex flex-column justify-space-around" style="height: 100%">
          <v-btn small elevation="0" color="white" @click="selected = 0" fab class="my-1">
            <v-icon color="info"> mdi-format-text </v-icon>
          </v-btn>
          <v-btn small elevation="0" color="white" @click="selected = 1" fab class="my-1 pointer-icon">
            <v-icon color="info"> mdi-button-pointer </v-icon>
          </v-btn>
          <v-btn small elevation="0" color="white" @click="selected = 2" fab class="my-1">
            <v-icon color="info"> mdi-account-check </v-icon>
          </v-btn>
          <v-btn small elevation="0" color="white" @click="selected = 3" fab class="my-1">
            <v-icon color="info"> mdi-language-javascript </v-icon>
          </v-btn>
        </div>
      </v-navigation-drawer>

      <v-main class="d-flex align-center px-0">
        <component :is="tabs[selected].tabComponent" class="my-4 mx-14 elevation-4" />
      </v-main>
    </v-app>
  </div>
</template>

<script>
import DemoButton from "@/components/demo/components/DemoButton.vue";
import DemoText from "@/components/demo/components/DemoText.vue";
import DemoInputs from "@/components/demo/components/DemoInputs.vue";
import DemoJS from "@/components/demo/components/DemoJS.vue";

export default {
  components: {
    DemoButton,
    DemoText,
    DemoInputs,
    DemoJS,
  },
  data() {
    return {
      selected: 3,
      drawer: true,
      menu: [{ name: "", icon: "mdi-home" }],
      tabs: [
        {
          tabName: "Buttons",
          tabComponent: DemoText,
        },
        {
          tabName: "Buttons",
          tabComponent: DemoButton,
        },
        {
          tabName: "Buttons",
          tabComponent: DemoInputs,
        },
        {
          tabName: "Javascript",
          tabComponent: DemoJS,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.sl-tabs {
  width: 100%;
}
.pointer-icon {
  padding-top: 6px !important;
}
</style>
