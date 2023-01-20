<template>
  <div class="sl-tabs">
    <v-app-bar dense>
      <v-spacer></v-spacer>
      <span class="green--text text-h6">HTML CSS JS</span>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-app>
      <v-navigation-drawer
        v-model="drawer"
        app
        class="d-flex justify-center align-center"
        color="grey lighten-3"
        mini-variant
      >
        <div class="pt-4 d-flex flex-column">
          <v-btn small elevation="19" @click="selected = 0" fab class="my-1">
            <v-icon color="green"> mdi-format-text </v-icon>
          </v-btn>
          <v-btn small elevation="19" @click="selected = 1" fab class="my-1">
            <v-icon color="green"> mdi-format-text </v-icon>
          </v-btn>
        </div>
      </v-navigation-drawer>

      <v-main class="d-flex align-center px-0">
        <component
          :is="tabs[selected].tabComponent"
          class="my-4 mx-14 elevation-18"
        />
      </v-main>
    </v-app>
  </div>
</template>

<script>
import DemoButton from "@/components/demo/DemoButton.vue";

export default {
  components: {
    DemoButton,
  },
  data() {
    return {
      selected: 0,
      drawer: true,
      menu: [{ name: "", icon: "mdi-home" }],
      tabs: [
        {
          tabName: "Buttons",
          tabComponent: DemoButton,
        },
        {
          tabName: "Buttons",
          tabComponent: "",
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
</style>
