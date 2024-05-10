<template>
  <div class="edu-event-area" :class="extraClass">
    <div class="container edublink-animated-shape">
      <SectionTitle
        preTitle="Conference"
        title="Popular Events & News"
        alignment="section-center"
      />
      <div class="row g-5" v-if="conference">
        <div
          class="col-lg-4 col-md-6"
          data-aos-delay="100"
          data-aos="fade-up"
          data-aos-duration="800"
          v-for="(conference, key) in conference.slice(0, 6)"
          :key="key"
        >
          <EventOne :conference="conference" />
        </div>
      </div>
      <div
        class="event-view-all-btn"
        data-aos-delay="150"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <h6 class="view-text">
          The Latest Events from EduBlink.
          <NuxtLink to="/event/event-grid" class="btn-transparent"
            >View All <i class="icon-4"></i
          ></NuxtLink>
        </h6>
      </div>

      <ul class="shape-group">
        <li
          class="shape-1"
          data-aos-delay="500"
          data-aos="fade"
          data-aos-duration="200"
        >
          <img class="rotateit" src="/images/about/shape-13.png" alt="Shape" />
        </li>
        <MouseMove
          addClassName="shape-2"
          dataDepth=".9"
          data-aos-delay="500"
          data-aos="fade"
          data-aos-duration="200"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import eventMixin from "../../mixins/eventMixin";
import MouseMove from "../animation/MouseMove.vue";
import SectionTitle from "../common/SectionTitle.vue";
import EventOne from "./EventOne.vue";
export default {
  props: ["extraClass"],
  mixins: [eventMixin],
  components: {
    MouseMove,
    SectionTitle,
    EventOne,
  },
  props: ["conference"],
};
</script>
