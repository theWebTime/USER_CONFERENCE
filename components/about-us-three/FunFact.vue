<template>
  <div class="counterup-area-9">
    <div class="container edublink-animated-shape">
      <div class="row g-5">
        <div class="col-lg-3 col-sm-6">
          <div class="edu-counterup counterup-style-4">
            <div class="icon primary-color">
              <i class="icon-48"></i>
            </div>
            <h2 class="counter-item count-number">
              <span>{{ countData.previousConference }}</span>
            </h2>
            <h6 class="title">Previous Conference</h6>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="edu-counterup counterup-style-4">
            <div class="icon primary-color">
              <i class="icon-48"></i>
            </div>
            <h2 class="counter-item count-number">
              <span>{{ countData.upcomingConference }}</span>
            </h2>
            <h6 class="title">Upcoming Conference</h6>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="edu-counterup counterup-style-4">
            <div class="icon primary-color">
              <i class="icon-48"></i>
            </div>
            <h2 class="counter-item count-number">
              <span>{{ countData.conferenceTag }}</span>
            </h2>
            <h6 class="title">Conference Tag</h6>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="edu-counterup counterup-style-4">
            <div class="icon primary-color">
              <i class="icon-48"></i>
            </div>
            <h2 class="counter-item count-number">
              <span>{{ countData.conferenceType }}</span>
            </h2>
            <h6 class="title">Conference Type</h6>
          </div>
        </div>
      </div>

      <ul class="shape-group">
        <MouseMove
          addClassName="shape-1"
          dataDepth="-1.8"
          imgSrc="/images/others/shape-27.png"
          data-aos-delay="500"
          data-aos="fade"
          data-aos-duration="200"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import MouseMove from "../animation/MouseMove.vue";

export default {
  components: {
    MouseMove,
  },
  data() {
    return {
      /*  funFacts: [
                {
                    number: 29.3,
                    decimal: 1,
                    iconClass: 'icon-48',
                    class: 'primary-color',
                    title: 'STUDENT ENROLLED',
                    suffix: 'K'
                },
                {
                    number: 32.4,
                    decimal: 1,
                    iconClass: 'icon-47',
                    class: 'secondary-color',
                    title: 'CLASS COMPLETED',
                    suffix: 'K'
                },
                {
                    number: 100,
                    decimal: null,
                    iconClass: 'icon-49',
                    class: 'extra08-color',
                    title: 'SATISFACTION RATE',
                    suffix: '%'
                },
                {
                    number: 354,
                    decimal: null,
                    iconClass: 'icon-50',
                    class: 'extra05-color',
                    title: 'TOP INSTRUCTORS',
                    suffix: '+'
                }
            ] */
    };
  },
  props: ["countData"],
};
</script>
