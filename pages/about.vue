<template>
  <div id="main-wrapper" class="main-wrapper">
    <AboutUsThreeMain :about="about" :countData="countData" :site="site" />
  </div>
</template>
<script>
import AboutUsThreeMain from "~~/components/about-us-three/AboutUsThreeMain.vue";

export default {
  name: "about",
  components: {
    AboutUsThreeMain,
  },
  data() {
    return {
      about: "",
      countData: "",
      site: "",
    };
  },
  created() {
    this.fetchDataAboutUs();
    this.fetchDataCountData();
    this.fetchDataSiteSetting();
  },
  methods: {
    fetchDataAboutUs() {
      api()
        .get("user-side/about-us-show")
        .then((res) => {
          if (res.data.success) {
            this.about = res.data.data;
          }
        });
    },
    fetchDataCountData() {
      api()
        .get("user-side/count")
        .then((res) => {
          if (res.data.success) {
            this.countData = res.data.data;
          }
        });
    },
    fetchDataSiteSetting() {
      api()
        .get("user-side/site-setting-show")
        .then((res) => {
          if (res.data.success) {
            this.site = res.data.data;
          }
        });
    },
  },
};
</script>
<style scoped></style>
