<template>
  <v-card>
    <v-tabs v-model="tab" fixed-tabs elevation="10">
      <v-tab dark>Basic Inputs</v-tab>
      <v-tab dark>Modern Text Inputs</v-tab>
      <v-tab dark>Other Inputs</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item>
        <BasicInputs />
      </v-tab-item>

      <v-tab-item>
        <ModernInputs />
      </v-tab-item>

      <v-tab-item>
        <OtherInputs />
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>
<script>
import BasicInputs from "../inputs/BasicInputs.vue";
import ModernInputs from "../inputs/ModernInputs.vue";
import OtherInputs from "../inputs/OtherInputs.vue";

export default {
  components: {
    BasicInputs,
    ModernInputs,
    OtherInputs,
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
