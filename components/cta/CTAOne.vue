<template>
  <div class="edu-cta-banner-area bg-image" :class="addClassName">
    <div class="container">
      <div class="edu-cta-banner">
        <div class="row justify-content-center">
          <div class="col-lg-7">
            <div
              class="section-title section-center"
              data-aos-delay="150"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <h2 class="title" v-html="title"></h2>
              <NuxtLink :to="buttonLink" class="edu-btn" :class="btnClass"
                >{{ buttonText }} <i class="icon-4"></i
              ></NuxtLink>
            </div>
          </div>
        </div>
        <ul class="shape-group">
          <MouseMove
            addClassName="shape-01"
            dataDepth="2.5"
            imgSrc="/images/cta/shape-10.png"
          />
          <MouseMove
            addClassName="shape-02"
            dataDepth="-2.5"
            imgSrc="/images/cta/shape-09.png"
          />
          <MouseMove
            addClassName="shape-03"
            dataDepth="-2"
            imgSrc="/images/cta/shape-08.png"
          />
          <MouseMove
            addClassName="shape-04"
            dataDepth="2"
            imgSrc="/images/about/shape-13.png"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import MouseMove from "../animation/MouseMove.vue";

export default {
  props: {
    title: {
      type: String,
      default:
        'Get Your Quality Skills <span class="color-secondary">Certificate</span> Through EduBlink',
    },
    buttonText: {
      type: String,
      default: "Get started now",
    },
    buttonLink: {
      type: String,
      default: "/contact-us",
    },
    addClassName: {
      type: String,
      default: "home-one-cta-wrapper",
    },
    btnClass: {
      type: String,
    },
  },
  components: {
    MouseMove,
  },
};
</script>
