<template>
  <div>
    <HeaderThree />

    <BreadCrumbTwo title="About Us" />

    <AboutThree :about="about" />

    <FunFact :countData="countData" />

    <WhyChoose />

    <ContactInfo :site="site" />

    <!-- <Instructor /> -->

    <!-- <Testimonial /> -->

    <FooterOne />

    <ScrollToTop />
  </div>
</template>

<script>
import FooterOne from "../footer/FooterOne.vue";
import BreadCrumbTwo from "../common/BreadCrumbTwo.vue";
import HeaderThree from "../header/HeaderThree.vue";
import ContactInfo from "./ContactInfo.vue";
import WhyChoose from "./WhyChoose.vue";
import FunFact from "./FunFact.vue";
import Instructor from "./Instructor.vue";
import AboutThree from "./AboutThree.vue";
import Testimonial from "./Testimonial.vue";
import ScrollToTop from "../footer/ScrollToTop.vue";

export default {
  components: {
    HeaderThree,
    BreadCrumbTwo,
    FooterOne,
    ContactInfo,
    FunFact,
    WhyChoose,
    Instructor,
    Testimonial,
    AboutThree,
    ScrollToTop,
  },
  head() {
    return {
      title: "About Us",
    };
  },
  props: ["about", "countData", "site"],
};
</script>
<style>
.video-area-1 .video-play-btn {
  cursor: pointer;
}
</style>
