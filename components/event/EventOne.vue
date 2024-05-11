<template>
  <div class="edu-event event-style-1">
    <div class="inner">
      <div class="thumbnail">
        <nuxt-link
          v-if="conference.logo"
          :to="conference.domain"
          target="_blank"
        >
          <img :src="conference.logo" :alt="conference.name + ' Thumbnail'" />
        </nuxt-link>
        <div class="event-time">
          <span><i class="icon-33"></i>{{ formatTime(conference.date) }}</span>
        </div>
      </div>
      <div class="content">
        <div class="event-date">
          <span class="day">{{ formatDate(conference.date) }}</span>
          <!-- <span class="month">{{ conference.month }}</span> -->
        </div>
        <h5 class="title">
          <nuxt-link
            v-if="conference.logo"
            :to="conference.domain"
            target="_blank"
            >{{ conference.title }}</nuxt-link
          >
        </h5>
        <!-- <p>{{ conference.excerpt }}</p>
         <ul class="event-meta">
          <li><i class="icon-40"></i>{{ conference.location }}</li>
        </ul> -->
        <div class="read-more-btn">
          <nuxt-link
            v-if="conference.logo"
            :to="conference.domain"
            target="_blank"
            class="edu-btn btn-small btn-secondary"
            >Visit Conference <i class="icon-4"></i
          ></nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  props: ["conference"],
  methods: {
    formatTime(dateTimeString) {
      return moment(dateTimeString).format("HH:mm:ss");
    },
    // You can define a method to format the date
    formatDate(date) {
      return moment(date).format("YYYY-MM-DD");
    },
  },
};
</script>
