<template>
  <div id="main-wrapper" class="main-wrapper">
    <OnlineAcademyMain
      :site="site"
      :conferenceType="conferenceType"
      :conference="conference"
    />
  </div>
</template>

<script>
import OnlineAcademyMain from "~~/components/home-online-academy/OnlineAcademyMain.vue";

export default {
  name: "home",
  components: {
    OnlineAcademyMain,
  },
  data() {
    return {
      site: "",
      conferenceType: "",
      conference: "",
    };
  },
  created() {
    this.fetchDataSiteSetting();
    this.fetchDataConferenceType();
    this.fetchDataConference();
  },
  methods: {
    fetchDataSiteSetting() {
      api()
        .get("user-side/site-setting-show")
        .then((res) => {
          if (res.data.success) {
            this.site = res.data.data;
          }
        });
    },
    fetchDataConferenceType() {
      api()
        .get("user-side/conference-type-listing")
        .then((res) => {
          if (res.data.success) {
            this.conferenceType = res.data.data;
          }
        });
    },
    fetchDataConference() {
      api()
        .get("user-side/conference-listing?total=true")
        .then((res) => {
          if (res.data.success) {
            this.conference = res.data.data;
          }
        });
    },
  },
};
</script>

<style scoped></style>
