<template>
  <container>
    <div class="battery mt-4">
      <div class="liquid"></div>
    </div>
  </container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
// Settings
$size: 1.5rem;
$speed: 2.25s;

// Container Settings
$batteryHeight: $size;
$batteryRadius: $size * 0.02;
$batteryColor: #425c77;
$batteryBackground: white;
$batteryHighlight: rgba($batteryBackground, 0.325);

// Liquid Settings
$liquidSize: $size / 4;
$liquidOffset: $liquidSize / -2.25;
$liquidColor: #71fb85;

// Loading Keyframes
@keyframes load {
  0% {
    top: $size;
  }
  70% {
    top: $size * 0.25;
  }
  90% {
    top: 0;
  }
  95% {
    top: 0;
  }
  100% {
    top: 0;
  }
}

// Wave Keyframes
@keyframes liquid-1 {
  0% {
    height: 0;
    opacity: 0;
    top: $liquidOffset;
  }
  22% {
    height: $liquidSize * 0.25;
    top: $liquidOffset * -0.75;
    opacity: 1;
  }
  25% {
    top: $liquidOffset * 0.5;
  }
  35% {
    height: $liquidSize * 1;
    top: $liquidOffset * 1;
  }
  55% {
    height: $liquidSize * 0.25;
    top: $liquidOffset * 0.25;
  }
  60% {
    height: $liquidSize * 0.55;
    opacity: 1;
    top: $liquidOffset * 0.55;
  }
  96% {
    height: $liquidSize * 0.75;
    opacity: 0;
    top: $liquidOffset * -1;
  }
  100% {
    height: 0;
    opacity: 0;
  }
}

@keyframes liquid-2 {
  0% {
    height: 0;
    opacity: 0;
    top: $liquidOffset;
  }
  17.5% {
    height: $liquidSize * 0.25;
    top: $liquidOffset * -0.4;
    opacity: 1;
  }
  20% {
    top: $liquidOffset * 0.5;
  }
  25% {
    height: $liquidSize * 1.25;
    top: $liquidOffset * 1.25;
  }
  45% {
    height: $liquidSize * 0.25;
    top: $liquidOffset * 0.25;
  }
  60% {
    height: $liquidSize * 1.25;
    opacity: 1;
    top: $liquidOffset;
  }
  96% {
    height: $liquidSize * 0.75;
    opacity: 0;
    top: $liquidOffset * -1;
  }
  100% {
    height: 0;
    opacity: 0;
  }
}

// Styles for battery, terminal, and highlight
.battery {
  display: inline-block;
  position: relative;
  width: $size / 2;
  height: $size;
  box-shadow: 0 0 0 0.03rem $batteryColor;
  background: $batteryBackground;
  border-radius: $batteryRadius;

  // Terminal
  &:before {
    content: "";
    position: absolute;
    left: $size / 8;
    right: $size / 8;
    top: $size * -0.075;
    height: $size * 0.075;
    width: $size / 4;
    background: $batteryColor;
    border-radius: $batteryRadius * 66;
  }

  // Highlight
  &:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-right: ($size * 0.5) solid transparent;
    border-bottom: ($size - 0.45) solid $batteryHighlight;
  }
}

// Styles for liquid
.liquid {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: $size / 2;
  background: $liquidColor;
  animation: load $speed 1;

  // Bubbles
  &:after,
  &:before {
    content: "";
    position: absolute;
    top: $liquidOffset;
    height: $liquidSize;
    width: $liquidSize * 1.3;
    background: $liquidColor;
    border-radius: 50%;
    opacity: 0;
  }

  &:after {
    right: 0;
    animation: liquid-1 $speed 1;
  }

  &:before {
    left: 0;
    animation: liquid-2 $speed 1;
  }
}

// Boring Stuff
body {
  padding-top: 30vh;
  background: #efefef;
  text-align: center;
}

@keyframes power {
  0% {
    color: #bcbcbc;
  }
  75% {
    color: #bcbcbc;
    text-shadow: none;
  }
  90% {
    color: darken($liquidColor, 5%);
    text-shadow: 0 0 0.8em $liquidColor;
  }
  100% {
    color: #bcbcbc;
    text-shadow: none;
  }
}

h5 {
  font-family: Lato, sans-serif;
  font-weight: 300;
  letter-spacing: 0.025rem;
  text-transform: uppercase;
  color: #bcbcbc;
  animation: power $speed 1;
}
</style>
