<template>
  <div id="main-wrapper" class="main-wrapper">
    <HeaderThree />

    <BreadCrumbTwo pageTitle="Gallery" title="Gallery" />
    <div class="edu-gallery-area edu-section-gap">
      <div class="container">
        <div
          id="masonry-gallery"
          class="edublink-vue-gallery-masonry gallery-grid-wrap"
          v-for="(item, index) in gallery"
          :key="index"
        >
          <div class="edu-gallery-grid masonry-item items">
            <div class="thumbnail">
              <img
                :src="item.data"
                style="height: 350px; width: 350px"
                alt="Gallery Image"
              />
            </div>
          </div>
          <!-- <img :src="item.data" alt="Gallery Image" /> -->
          <!-- <masonry-wall v-for="(item, index) in gallery" :key="index">
            <template>
              <a class="edu-gallery-grid masonry-item items">
                <div class="thumbnail">
                  <img :src="item.data" alt="Gallery Image" />
                </div>
                <div class="zoom-icon" @click.prevent="handleImagePopup(index)">
                  <i class="icon-69"></i>
                </div>
              </a>
            </template>
          </masonry-wall> -->
        </div>
      </div>
    </div>

    <CTAOneAlter />

    <FooterOne />

    <!-- image popup start -->
    <image-popup ref="image_popup" :images="items" />
    <!-- image popup end -->

    <ScrollToTop />
  </div>
</template>

<script>
import BreadCrumbTwo from "~~/components/common/BreadCrumbTwo.vue";
import ImagePopup from "~~/components/common/ImagePopup.vue";
import CTAOneAlter from "~~/components/cta/CTAOneAlter.vue";
import HeaderThree from "~~/components/header/HeaderThree.vue";
import FooterOne from "~~/components/footer/FooterOne.vue";

import ScrollToTop from "~~/components/footer/ScrollToTop.vue";

export default {
  components: {
    HeaderThree,
    BreadCrumbTwo,
    CTAOneAlter,
    FooterOne,
    ImagePopup,
    ScrollToTop,
  },
  data() {
    return {
      gallery: "",
      /* items: [
        {
          thumb: "/images/gallery/gallery-10.jpg",
          src: "/images/gallery/gallery-10.jpg",
        },
        {
          thumb: "/images/gallery/gallery-01.jpg",
          src: "/images/gallery/gallery-01.jpg",
        },
        {
          thumb: "/images/gallery/gallery-06.jpg",
          src: "/images/gallery/gallery-06.jpg",
        },
        {
          thumb: "/images/gallery/gallery-04.jpg",
          src: "/images/gallery/gallery-04.jpg",
        },
        {
          thumb: "/images/gallery/gallery-05.jpg",
          src: "/images/gallery/gallery-05.jpg",
        },
        {
          thumb: "/images/gallery/gallery-08.jpg",
          src: "/images/gallery/gallery-08.jpg",
        },
        {
          thumb: "/images/gallery/gallery-07.jpg",
          src: "/images/gallery/gallery-07.jpg",
        },
        {
          thumb: "/images/gallery/gallery-11.jpg",
          src: "/images/gallery/gallery-11.jpg",
        },
        {
          thumb: "/images/gallery/gallery-09.jpg",
          src: "/images/gallery/gallery-09.jpg",
        },
      ], */
    };
  },
  head() {
    return {
      title: "Gallery Masonry",
    };
  },
  created() {
    this.fetchDataGallery();
  },
  methods: {
    fetchDataGallery() {
      api()
        .get("user-side/show-all-gallery")
        .then((res) => {
          if (res.data.success) {
            this.gallery = res.data.data;
          }
        });
    },
    handleImagePopup(indexNum) {
      this.$refs.image_popup.showImg(indexNum);
    },
  },
};
</script>
