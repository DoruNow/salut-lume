<template>
  <div>Id: {{ id }}</div>
</template>

<script>
export default {
  props: ["id"],
  created() {
    console.log("1");
  },
};
</script>