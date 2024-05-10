<template>
  <Loader />
  <NuxtPage></NuxtPage>
</template>

<script setup>
import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
  AOS.init();
});
</script>
<script>
import Loader from "~~/components/common/Loader.vue";

export default {
  components: {
    Loader,
  },
};
</script>
