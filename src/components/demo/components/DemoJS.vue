<template>
  <v-card>
    <v-tabs v-model="tab" fixed-tabs elevation="6">
      <v-tab dark>Vanilla JS</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item>
        <VanillaJS />
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>
<script>
import VanillaJS from "../javascript/VanillaJS.vue";

export default {
  components: {
    VanillaJS,
  },
  data() {
    return {
      tab: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
.demo-card-text {
  min-height: 30vh;
  width: 100%;
  background-color: rgb(156, 209, 255);
}

.hljs {
  border-radius: 12px !important;
  padding-top: 5px !important;
  padding-bottom: 5px !important;
  width: 100% !important;
}
</style>
