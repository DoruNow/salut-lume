<template>
  <v-card>
    <v-tabs v-model="tab" fixed-tabs elevation="6">
      <v-tab dark>Simple HTML</v-tab>
      <v-tab dark>Positioning a Button</v-tab>
      <v-tab dark>better css</v-tab>
      <v-tab dark>Modern Buttons</v-tab>
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

      <v-tab-item>
        <ModernButtons />
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>
<script>
import SimpleHTML from "../button/SimpleHTML.vue";
import CenteredButton from "../button/CenteredButton.vue";
import AdvancedStyling from "../button/AdvancedStyling.vue";
import ModernButtons from "../button/ModernButtons.vue";

export default {
  components: {
    SimpleHTML,
    CenteredButton,
    AdvancedStyling,
    ModernButtons,
  },
  data() {
    return {
      tab: 0,
    };
  },
};
</script>

<style lang="scss">
.demo-card-text {
  height: 30vh;
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
