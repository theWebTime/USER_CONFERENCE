<template>
  <div>
    <HeaderThree />
    <Hero :site="site" />
    <Categories :conferenceType="conferenceType" />
    <FAQ />
    <EventSectionOne :conference="conference" extraClass="event-area-2" />
    <!-- <ContactInfo /> -->
    <!-- <Blog /> -->
    <CTAOne addClassName="online-academy-cta-wrapper" />
    <FooterOne />
    <ScrollToTop />
  </div>
</template>

<script lang="ts">
import CTAOne from "../cta/CTAOne.vue";
import EventSectionOne from "../event/EventSectionOne.vue";
import FooterOne from "../footer/FooterOne.vue";
import HeaderThree from "../header/HeaderThree.vue";
// import Blog from "./Blog.vue";
import Categories from "./Categories.vue";
import ContactInfo from "./ContactInfo.vue";
import FAQ from "./FAQ.vue";
import Hero from "./Hero.vue";
import ScrollToTop from "../footer/ScrollToTop.vue";

export default {
  name: "app",
  components: {
    FooterOne,
    Hero,
    Categories,
    FAQ,
    // Blog,
    CTAOne,
    EventSectionOne,
    ContactInfo,
    HeaderThree,
    ScrollToTop,
  },
  props: ["site", "conferenceType", "conference"],
};
</script>

<style scoped></style>
