<template>
  <div id="main-wrapper" class="main-wrapper">
    <HeaderThree />

    <BreadCrumbTwo title="Conference" />

    <div class="edu-course-area course-area-1 section-gap-equal">
      <div class="container">
        <div class="row g-5">
          <div class="col-lg-3">
            <div class="edu-course-sidebar">
              <div class="edu-course-widget widget-category">
                <div class="inner">
                  <h5 class="widget-title">Filter by Dates</h5>
                  <br />
                  <select
                    class="edu-select"
                    v-model="date"
                    @change="fetchDataConference()"
                  >
                    <option value="">Select Conference Date</option>
                    <option value="previousDate">
                      Previous Date Conference
                    </option>
                    <option value="upcomingDate">
                      Upcoming Date Conference
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-9 col-pl--35">
            <div class="edu-sorting-area">
              <div class="sorting-left">
                <h6 class="showing-text">
                  We found <span>{{ conference.length }}</span> Conference
                  available for you
                </h6>
              </div>
              <!-- <div class="sorting-right">
                <div class="layout-switcher">
                  <label>Grid</label>
                  <ul class="switcher-btn">
                    <li>
                      <NuxtLink to="/course/course-one"
                        ><i class="icon-53"></i
                      ></NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/course/course-four" class="active"
                        ><i class="icon-54"></i>
                      </NuxtLink>
                    </li>
                  </ul>
                </div>
                <div class="edu-sorting">
                  <div class="icon"><i class="icon-55"></i></div>
                  <select class="edu-select">
                    <option>Filters</option>
                    <option>Low To High</option>
                    <option>High Low To</option>
                    <option>Last Viewed</option>
                  </select>
                </div>
              </div> -->
            </div>

            <div
              class="edu-course-six-each-item"
              v-for="(conference, key) in conference"
              :key="key"
            >
              <div
                class="edu-course course-style-4 course-style-8"
                :class="extraClass"
              >
                <div class="inner">
                  <div class="thumbnail">
                    <NuxtLink v-if="conference.logo">
                      <img
                        :src="conference.logo"
                        height="400"
                        width="300"
                        :alt="conference.alt"
                      />
                    </NuxtLink>
                    <div class="time-top" v-if="conference.date">
                      <span class="duration"
                        ><i class="icon-61"></i>{{ conference.date }}</span
                      >
                    </div>
                  </div>
                  <div class="content">
                    <div class="course-price" v-if="conference.domain">
                      {{ conference.domain }}
                    </div>
                    <h6 class="title" v-if="conference.title">
                      <NuxtLink to="">{{ conference.title }}</NuxtLink>
                    </h6>
                    <div class="course-rating" v-if="conference.address">
                      <span class="rating-count"
                        ><IconMapPin></IconMapPin>{{ conference.address }}</span
                      >
                    </div>
                    <!--
                        <div class="rating">
                          <i class="icon-23"></i>
                          <i class="icon-23"></i>
                          <i class="icon-23"></i>
                          <i class="icon-23"></i>
                          <i class="icon-23"></i>
                        </div>
                      </div> -->
                    <!-- <p>{{ course.excerpt2 }}</p> -->
                    <ul class="course-meta">
                      <li v-if="conference.contact_number1">
                        <IconPhone></IconPhone>{{ conference.contact_number1 }}
                      </li>
                      <li v-if="conference.email">
                        <IconMail></IconMail>{{ conference.email }}
                      </li>
                    </ul>
                    <ul class="course-meta">
                      <li v-if="conference.country_name">
                        <span>Country:</span>{{ conference.country_name }}
                      </li>
                      <li v-if="conference.state_name">
                        <span>State:</span>{{ conference.state_name }}
                      </li>
                      <li v-if="conference.city_name">
                        <span>City:</span>{{ conference.city_name }}
                      </li>
                    </ul>
                  </div>
                </div>
                <!--  <div class="hover-content-aside">
                    <div class="content">
                      <span class="course-level">{{ course.category }}</span>
                      <h5 class="title">
                        <NuxtLink to="/course/course-details">{{
                          course.title
                        }}</NuxtLink>
                      </h5>
                      <div class="course-rating">
                        <div class="rating">
                          <i class="icon-23"></i>
                          <i class="icon-23"></i>
                          <i class="icon-23"></i>
                          <i class="icon-23"></i>
                          <i class="icon-23"></i>
                        </div>
                        <span class="rating-count"
                          >({{ course.ratingAvarage }})</span
                        >
                      </div>
                      <ul class="course-meta">
                        <li>
                          {{ course.lessons }}
                          {{ course.lessons > 1 ? "Lessons" : "Lesson" }}
                        </li>
                        <li>{{ course.duration }}</li>
                        <li>{{ course.level }}</li>
                      </ul>
                      <div class="course-feature">
                        <h6 class="title">What You’ll Learn?</h6>
                        <ul>
                          <li
                            v-for="(feature, key) in course.features.slice(0, 3)"
                            :key="key"
                          >
                            {{ feature }}
                          </li>
                        </ul>
                      </div>
                      <div class="button-group">
                        <a href="#" class="edu-btn btn-medium">Add to Cart</a>
                        <a href="#" class="wishlist-btn btn-outline-dark"
                          ><i class="icon-22"></i
                        ></a>
                      </div>
                    </div>
                  </div> -->
              </div>
            </div>

            <!--   <div v-if="getPaginateCount > 1">
              <div class="edublink-vue-pagination">
                <pagination
                  v-model="currentPage"
                  :per-page="perPage"
                  :records="courseItems.length"
                  @paginate="paginateClickCallback"
                  :options="paginationOptions"
                />
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>

    <FooterOne />
    <ScrollToTop />
  </div>
</template>

<script>
import BreadCrumbTwo from "~~/components/common/BreadCrumbTwo.vue";
import HeaderThree from "~~/components/header/HeaderThree.vue";
import FooterOne from "~~/components/footer/FooterOne.vue";
import CourseTypeSix from "~~/components/course/CourseTypeSix.vue";
import CourseSidebarOne from "~~/components/sidebar/CourseSidebarOne.vue";
import ScrollToTop from "~~/components/footer/ScrollToTop.vue";

import courseItemsMixin from "../mixins/courseItemsMixin";
import Pagination from "v-pagination-3";
import { IconMail, IconPhone, IconMapPin } from "@tabler/icons-vue";
import { NuxtLink } from "~~/.nuxt/components";

export default {
  mixins: [courseItemsMixin],
  components: {
    HeaderThree,
    BreadCrumbTwo,
    CourseSidebarOne,
    CourseTypeSix,
    FooterOne,
    ScrollToTop,
    Pagination,
    IconMail,
    IconPhone,
    IconMapPin,
    NuxtLink,
  },
  data() {
    return {
      // fetchDate: "",
      date: "upcomingDate",
      conference: "",
      currentPage: 1,
      perPage: "25",
      paginationOptions: {
        texts: {
          nextPage: "",
          prevPage: "",
        },
      },
    };
  },
  created() {
    this.fetchDataConference();
  },
  computed: {
    getItems() {
      let start = (this.currentPage - 1) * this.perPage;
      let end = this.currentPage * this.perPage;
      return this.courseItems.slice(start, end);
    },
    getPaginateCount() {
      return Math.ceil(this.courseItems.length / this.perPage);
    },
  },
  methods: {
    fetchDataConference() {
      this.$store.commit("loaderStatus");
      api()
        .get("user-side/filter-conference-listing?date=" + this.date)
        .then((res) => {
          if (res.data.success) {
            this.conference = res.data.data;
          }
          this.$store.commit("loaderStatus");
        })
        .catch((err) => {
          console.log(err);
          this.$store.commit("loaderStatus");
        });
    },
  },
  head() {
    return {};
  },
};
</script>
