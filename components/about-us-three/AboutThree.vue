<template>
  <div class="edu-section-gap edu-about-area about-style-8">
    <div class="container">
      <div class="row g-5">
        <div class="col-lg-6">
          <div class="about-content">
            <SectionTitle
              preTitle="About Us"
              :title="about.title"
              :subTitle="about.description"
              alignment="section-left"
            />

            <div class="about-mission">
              <div
                class="single-item"
                data-aos-delay="150"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <div class="icon color-extra02"><i class="icon-51"></i></div>
                <div class="content">
                  <h4 class="title">Our Mission</h4>
                  <p v-html="about.our_mission"></p>
                </div>
              </div>
              <div
                class="single-item"
                data-aos-delay="150"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <div class="icon color-extra06"><i class="icon-52"></i></div>
                <div class="content">
                  <h4 class="title">Our Vision</h4>
                  <p v-html="about.our_vision"></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="about-image-gallery">
            <div class="row g-5">
              <div class="col-6 masonry-item">
                <div
                  class="thumbnail thumbnail-1 mb--30"
                  data-aos-delay="50"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                >
                  <img src="/images/about/about-13.webp" alt="About Images" />
                </div>
                <div
                  class="thumbnail thumbnail-4"
                  data-aos-delay="50"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <img src="/images/about/about-15.webp" alt="About Images" />
                </div>
              </div>
              <div class="col-6 masonry-item">
                <div
                  class="thumbnail thumbnail-2 mb--30"
                  alt="About Images"
                  data-aos-delay="50"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                >
                  <img src="/images/about/about-14.webp" />
                </div>
                <div
                  class="thumbnail thumbnail-4"
                  alt="About Images"
                  data-aos-delay="50"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <img src="/images/about/about-16.webp" alt="About Images" />
                </div>
              </div>
            </div>

            <ul class="shape-group">
              <MouseMove
                addClassName="shape-1"
                dataDepth="2"
                imgSrc="/images/about/shape-33.png"
                data-aos-delay="500"
                data-aos="fade"
                data-aos-duration="200"
              />
              <MouseMove
                addClassName="shape-2"
                dataDepth="-2"
                imgSrc="/images/about/shape-25.png"
                data-aos-delay="500"
                data-aos="fade"
                data-aos-duration="200"
              />
              <MouseMove
                addClassName="shape-3"
                dataDepth="-2"
                imgSrc="/images/about/shape-13.png"
                data-aos-delay="500"
                data-aos="fade"
                data-aos-duration="200"
              />
              <MouseMove
                addClassName="shape-4"
                dataDepth=".8"
                data-aos-delay="500"
                data-aos="fade"
                data-aos-duration="200"
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from "../common/SectionTitle.vue";
import MouseMove from "../animation/MouseMove.vue";

export default {
  components: {
    MouseMove,
    SectionTitle,
  },
  props: ["about"],
};
</script>
