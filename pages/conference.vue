<template>
  <div id="main-wrapper" class="main-wrapper">
    <HeaderThree />

    <BreadCrumbTwo title="Conference" />

    <div class="edu-course-area course-area-1 section-gap-equal">
      <div class="container">
        <div class="row g-5">
          <div class="col-lg-4">
            <div class="edu-course-sidebar">
              <div class="edu-course-widget widget-category">
                <div class="inner">
                  <div class="edu-sorting">
                    <h5 class="widget-title">Filter by Dates</h5>
                    <br />
                    <select
                      class="edu-select"
                      v-model="fetchConference"
                      @change="fetchDataConference()"
                    >
                      <option value="">All Conference Date</option>
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
              <div class="edu-course-widget widget-category">
                <div class="inner">
                  <div class="edu-sorting">
                    <h5 class="widget-title">Filter by Conference Tag</h5>
                    <br />
                    <select
                      class="edu-select"
                      v-model="filterConferenceTag"
                      @change="fetchDataConference()"
                    >
                      <option value="">All Conference Tag</option>
                      <option
                        v-for="(item, index) in data_fetch_conference_tag"
                        :key="index"
                        :value="item.id"
                      >
                        {{ item.title }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="edu-course-widget widget-category">
                <div class="inner">
                  <div class="edu-sorting">
                    <h5 class="widget-title">Filter by Conference Type</h5>
                    <br />
                    <select
                      class="edu-select"
                      v-model="filterConferenceType"
                      @change="fetchDataConference()"
                    >
                      <option value="">All Conference Tag</option>
                      <option
                        v-for="(item, index) in data_fetch_conference_type"
                        :key="index"
                        :value="item.id"
                      >
                        {{ item.title }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="edu-course-widget widget-category">
                <div class="inner">
                  <div class="edu-sorting">
                    <h5 class="widget-title">
                      Filter by Country, State & City
                    </h5>
                    <br />
                    <select
                      class="edu-select"
                      v-model="filterCountry"
                      @change="fetchState()"
                    >
                      <option value="">Select Country</option>
                      <option
                        v-for="(item, index) in data_fetch_countries"
                        :key="index"
                        :value="item.id"
                      >
                        {{ item.name }}
                      </option>
                    </select>
                    <select
                      class="edu-select"
                      v-model="filterState"
                      @change="fetchCity()"
                    >
                      <option value="">Select State</option>
                      <option
                        v-for="(item, index) in data_fetch_states"
                        :key="index"
                        :value="item.id"
                      >
                        {{ item.name }}
                      </option>
                    </select>
                    <select
                      class="edu-select"
                      v-model="filterCity"
                      @change="fetchDataConference()"
                    >
                      <option value="">Select City</option>
                      <option
                        v-for="(item, index) in data_fetch_cities"
                        :key="index"
                        :value="item.id"
                      >
                        {{ item.name }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-8 col-pl--35">
            <div class="edu-sorting-area">
              <div class="sorting-left">
                <h6 class="showing-text">
                  We found <span>{{ conference.length }}</span> Conference
                  available for you
                </h6>
              </div>
            </div>
            <template v-if="conference.length >= 1">
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
                      <nuxt-link
                        v-if="conference.logo"
                        :to="conference.domain"
                        target="_blank"
                      >
                        <img
                          :src="conference.logo"
                          height="400"
                          width="300"
                          :alt="conference.alt"
                        />
                      </nuxt-link>
                      <div class="time-top" v-if="conference.date">
                        <span class="duration"
                          ><i class="icon-61"></i>{{ conference.date }}</span
                        >
                      </div>
                    </div>
                    <div class="content">
                      <div class="course-price" v-if="conference.domain">
                        <nuxt-link :to="conference.domain" target="_blank">{{
                          conference.domain
                        }}</nuxt-link>
                      </div>
                      <h6 class="title" v-if="conference.conference_title">
                        <nuxt-link :to="conference.domain" target="_blank">{{
                          conference.conference_title
                        }}</nuxt-link>
                      </h6>
                      <div class="course-rating" v-if="conference.address">
                        <span class="rating-count"
                          ><IconMapPin></IconMapPin
                          >{{ conference.address }}</span
                        >
                      </div>
                      <ul class="course-meta">
                        <li v-if="conference.contact_number1">
                          <IconPhone></IconPhone
                          >{{ conference.contact_number1 }}
                        </li>
                        <li v-if="conference.email">
                          <IconMail></IconMail>{{ conference.email }}
                        </li>
                      </ul>
                      <ul class="course-meta">
                        <li v-if="conference.country_name">
                          <IconMap2 />{{ conference.country_name }}
                        </li>
                        <li v-if="conference.state_name">
                          <IconCurrentLocation />{{ conference.state_name }}
                        </li>
                        <li v-if="conference.city_name">
                          <IconBuildingSkyscraper />{{ conference.city_name }}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </template>
            <template v-else>
              <div>
                <img
                  src="/images/custom/no_data_found.png"
                  alt="No Data Found"
                />
              </div>
            </template>
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
import {
  IconMail,
  IconPhone,
  IconMapPin,
  IconMap2,
  IconCurrentLocation,
  IconBuildingSkyscraper,
} from "@tabler/icons-vue";
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
    IconMap2,
    IconCurrentLocation,
    IconBuildingSkyscraper,
  },
  data() {
    return {
      // fetchDate: "",
      filterCountry: "",
      filterState: "",
      filterCity: "",
      filterConferenceTag: "",
      filterConferenceType: "",
      fetchConference: "",
      date: "upcomingDate",
      conference: "",
      data_fetch_countries: "",
      data_fetch_states: "",
      data_fetch_cities: "",
      data_fetch_conference_tag: "",
      data_fetch_conference_type: "",
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
    this.fetch_countries();
    this.fetch_conference_tag();
    this.fetch_conference_type();
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
    fetch_countries() {
      api()
        .get("user-side/country-listing")
        .then((res) => {
          if (res.data.success) {
            this.data_fetch_countries = res.data.data;
          }
        })
        .catch((e) => {});
    },
    fetch_conference_tag() {
      api()
        .get("user-side/conference-tag-listing")
        .then((res) => {
          if (res.data.success) {
            this.data_fetch_conference_tag = res.data.data;
          }
        })
        .catch((e) => {});
    },
    fetch_conference_type() {
      api()
        .get("user-side/conference-type-listing")
        .then((res) => {
          if (res.data.success) {
            this.data_fetch_conference_type = res.data.data;
          }
        })
        .catch((e) => {});
    },
    fetchState() {
      api()
        .get("user-side/state-listing/" + this.filterCountry)
        .then((res) => {
          if (res.data.success) {
            this.data_fetch_states = res.data.data;
            this.fetchDataConference();
          }
        })
        .catch((e) => {
          this.$toast.error("Something went wrong");
        });
    },
    fetchCity() {
      api()
        .get("user-side/city-listing/" + this.filterState)
        .then((res) => {
          if (res.data.success) {
            this.data_fetch_cities = res.data.data;
            this.fetchDataConference();
          }
        })
        .catch((e) => {
          this.$toast.error("Something went wrong");
        });
    },
    fetchDataConference() {
      this.$store.commit("loaderStatus");
      api()
        .post(
          "user-side/filter-conference-listing?date=" +
            this.fetchConference +
            "&country=" +
            this.filterCountry +
            "&state=" +
            this.filterState +
            "&city=" +
            this.filterCity +
            "&conferenceTag=" +
            this.filterConferenceTag +
            "&conferenceType=" +
            this.filterConferenceType
        )
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
