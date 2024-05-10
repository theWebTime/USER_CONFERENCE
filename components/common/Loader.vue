<template>
  <div v-if="$store.state.loader" class="global-loader">
    <img src="/images/custom/loader.gif" alt="Loading..." />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.global-loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999999;
}

/* Additional styles for the loader image if needed */
.global-loader img {
  max-width: 100%;
  max-height: 100%;
}
</style>
