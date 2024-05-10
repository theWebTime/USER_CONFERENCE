<template>
  <div class="header-top-bar">
    <div class="container">
      <div class="header-top">
        <div class="header-top-left">
          <ul class="header-info">
            <li v-if="site.phone_number1">
              <a :href="'tel:' + site.phone_number1"
                ><i class="icon-phone"></i>Call: {{ site.phone_number1 }}</a
              >
            </li>
            <li v-if="site.email1">
              <a :href="'mailto:' + site.email1" target="_blank"
                ><i class="icon-envelope"></i>Email: {{ site.email1 }}</a
              >
            </li>
          </ul>
        </div>
        <!-- <div class="header-top-right">
          <ul class="header-info">
            <li><NuxtLink to="/my-account">Login</NuxtLink></li>
            <li><NuxtLink to="/my-account">Register</NuxtLink></li>
            <li class="header-btn">
              <NuxtLink
                to="/contact-us"
                class="edu-btn btn-secondary btn-medium"
                >Apply Now <i class="icon-4"></i
              ></NuxtLink>
            </li>
          </ul>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["site"],
};
</script>
