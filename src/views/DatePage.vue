<template>
  <div>ye {{ date }}</div>
</template>

<script>
export default {
  data() {
    return {
      date: null,
    };
  },
  created() {
    this.axios.get().then((d) => {
      this.date = new Date(d.data);
    });
  },
};
</script>
