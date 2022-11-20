<template>
  <div>
    <focFriend v-for="n in 3" :key="n" :id="id" />
  </div>
</template>

<script>
import focFriend from "@/grupe/friendsOfCode/components/focFriend.vue";

export default {
  props: ["id"],
  components: {
    focFriend,
  },
  created() {
    this.$axios
      .get({
        method: "get",
        url: "https://http.cat/200",
      })
      .then((result) => console.log(result));
  },
};
</script>

<style lang="scss" scoped>
</style>