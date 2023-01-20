<template>
  <v-card>
    <v-tabs v-model="tab" fixed-tabs elevation="10">
      <v-tab dark>Simple HTML</v-tab>
      <v-tab dark>Centered Button</v-tab>
      <v-tab dark>better css</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item>
        <SimpleHTML />
      </v-tab-item>

      <v-tab-item>
        <CenteredButton />
      </v-tab-item>

      <v-tab-item>
        <AdvancedStyling />
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>
<script>
import SimpleHTML from "./button/SimpleHTML.vue";
import CenteredButton from "./button/CenteredButton.vue";
import AdvancedStyling from "./button/AdvancedStyling.vue";

export default {
  components: {
    SimpleHTML,
    CenteredButton,
    AdvancedStyling,
  },
  data() {
    return {
      tab: 2,
    };
  },
  computed: {
    demoItem() {
      return `d-flex flex-column align-center justify-center demo-card-text`;
    },
    cardClass() {
      return `d-flex flex-column align-center justify-space-around elevation-10`;
    },
    demoItemCode() {
      return "";
    },
  },
};
</script>

<style lang="scss">
.demo-card-text {
  height: 30vh;
  width: 100%;
  background-color: aliceblue;
}

.hljs {
  border-radius: 12px !important;
  padding-top: 5px !important;
  padding-bottom: 5px !important;
  width: 100% !important;
}
</style>
