<template>
  <div class="edu-event event-style-1">
    <div class="inner">
      <div class="thumbnail">
        <NuxtLink to="/event/event-details">
          <img :src="conference.logo" :alt="conference.name + ' Thumbnail'" />
        </NuxtLink>
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
          <NuxtLink to="/event/event-details">{{ conference.title }}</NuxtLink>
        </h5>
        <!-- <p>{{ conference.excerpt }}</p>
         <ul class="event-meta">
          <li><i class="icon-40"></i>{{ conference.location }}</li>
        </ul> -->
        <div class="read-more-btn">
          <NuxtLink
            class="edu-btn btn-small btn-secondary"
            to="/event/event-details"
            >Visit Conference <i class="icon-4"></i
          ></NuxtLink>
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
