<template>
  <div class="hero-banner hero-style-4 bg-image bg-image--18">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="banner-content">
            <h1 class="title">Global Innovators Conference 2024</h1>
            <p>
              Join leading experts and innovators from around the world at the
              Global Innovators Conference 2024. Engage in insightful
              discussions, explore cutting-edge technologies, and network with
              industry leaders to shape the future of innovation.
            </p>
            <div class="banner-btn">
              <NuxtLink to="/conference" class="edu-btn"
                >View Conference <i class="icon-4"></i
              ></NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="banner-gallery">
      <div
        class="thumbnail thumbnail-1"
        data-aos-delay="500"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <img
          src="/images/banner/Conference.jpg"
          style="height: 350px; width: 350px"
          alt="Girl Image"
        />
      </div>
      <div
        class="thumbnail thumbnail-2"
        data-aos-delay="500"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <img
          src="/images/banner/Conference_1.jpg"
          style="height: 300px; width: 250px"
          alt="Girl Image"
        />
      </div>
      <div
        class="thumbnail thumbnail-3"
        data-aos-delay="500"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <img
          src="/images/banner/Conference_2.jpg"
          style="height: 200px; width: 150px"
          alt="Girl Image"
        />
      </div>
      <div
        class="online-support"
        data-aos-delay="600"
        data-aos="fade-right"
        data-aos-duration="1000"
        v-if="site.phone_number2"
      >
        <div class="inner">
          <div class="icon">
            <i class="icon-29"></i>
          </div>
          <div class="content">
            <span class="subtitle">Online Support </span>
            <h4 class="title">
              <a :href="'tel:' + site.phone_number2">
                {{ site.phone_number2 }}</a
              >
            </h4>
          </div>
        </div>
      </div>
    </div>
    <div class="scroll-down-btn">
      <a class="scroll-btn" href="#categories"><i class="icon-41"></i></a>
    </div>
    <ul class="shape-group">
      <MouseMove
        addClassName="shape-1"
        dataDepth="2"
        data-aos-delay="1000"
        data-aos="fade"
        data-aos-duration="1000"
        imgSrc="/images/others/shape-17.png"
      />
      <MouseMove
        addClassName="shape-2"
        dataDepth="-2"
        data-aos-delay="1000"
        data-aos="fade"
        data-aos-duration="1000"
        imgSrc="/images/banner/shape-03.png"
      />
      <MouseMove
        addClassName="shape-3"
        dataDepth="2"
        data-aos-delay="1000"
        data-aos="fade"
        data-aos-duration="1000"
        imgSrc="/images/faq/shape-09.png"
      />
      <MouseMove
        addClassName="shape-4"
        dataDepth="-2"
        data-aos-delay="1000"
        data-aos="fade"
        data-aos-duration="1000"
        imgSrc="/images/others/shape-15.png"
      />
      <MouseMove
        addClassName="shape-5"
        dataDepth="-2"
        data-aos-delay="1000"
        data-aos="fade"
        data-aos-duration="1000"
        imgSrc="/images/others/shape-16.png"
      />
      <MouseMove
        addClassName="shape-6"
        dataDepth="2"
        data-aos-delay="1000"
        data-aos="fade"
        data-aos-duration="1000"
        imgSrc="/images/faq/shape-12.png"
      />
      <MouseMove
        addClassName="shape-7"
        dataDepth="-2"
        data-aos-delay="1000"
        data-aos="fade"
        data-aos-duration="1000"
        imgSrc="/images/others/shape-17.png"
      />
      <li
        class="shape-8"
        data-aos-delay="1000"
        data-aos="fade"
        data-aos-duration="1000"
      >
        <span></span>
      </li>
    </ul>
  </div>
</template>

<script>
import MouseMove from "../animation/MouseMove.vue";

export default {
  name: "app",
  components: {
    MouseMove,
  },
  props: ["site"],
};
</script>
