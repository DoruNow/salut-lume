<template>
  <v-card>
    <v-tabs v-model="tab" fixed-tabs elevation="6">
      <v-tab dark>Simple Text</v-tab>
      <v-tab dark>Modern Text</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item>
        <SimpleText />
      </v-tab-item>

      <v-tab-item>
        <ModernText />
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>
<script>
import SimpleText from "../text/SimpleText.vue";
import ModernText from "../text/ModernText.vue";

export default {
  components: {
    SimpleText,
    ModernText,
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
