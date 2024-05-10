<template>
  <div
    class="edu-categorie-area categorie-area-3 edu-section-gap bg-image bg-image--4"
    id="categories"
  >
    <div class="container">
      <SectionTitle
        alignment="section-center"
        preTitle="CONFERENCE TYPES"
        preTitleClass="pre-textsecondary"
        title='Online <span class="color-primary">Classes</span> For Remote Learning.'
        subTitle="Consectetur adipiscing elit sed do eiusmod tempor."
      />

      <div
        class="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 g-4"
        v-if="conferenceType"
      >
        <div
          class="col"
          data-aos-delay="100"
          data-aos="fade-up"
          data-aos-duration="800"
          v-for="(item, index) in conferenceType"
          :key="index"
        >
          <div class="categorie-grid categorie-style-3">
            <!-- :class="category.colorClass" -->
            <!-- <div class="icon" :class="category.extraClass">
              <i :class="category.iconClass"></i>
            </div> -->
            <div class="content">
              <NuxtLink to="/course/course-one">
                <h5 class="title">{{ item.title }}</h5>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from "../common/SectionTitle.vue";

export default {
  components: {
    SectionTitle,
  },
  props: ["conferenceType"],
};
</script>
