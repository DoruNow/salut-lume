<template>
  <div class="pt-1 text-center px-6">
    <div v-if="!detailMode">
      <h1>Lorem ipsum</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
    <div v-if="detailMode">
      <h1>E o ratusca aici?</h1>
      <p>
        Ratustele sunt cele mai tari, mac! Aceasta pagina nu a fost scrisa de o
        ratusca ci de un om, mac mac!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["detailMode"],
};
</script>
