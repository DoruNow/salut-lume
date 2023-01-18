<template>
  <div class="sl-tabs">
    <v-tabs vertical class="sl-tabs">
      <v-tab v-for="tab in tabs" :key="tab.tabName">
        {{ tab.tabName }}
      </v-tab>
      <v-tab-item v-for="tab in tabs" :key="tab.tabName">
        <component :is="tab.tabComponent" />
      </v-tab-item>
    </v-tabs>
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
      tabs: [
        {
          tabName: "Button",
          tabComponent: DemoButton,
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
