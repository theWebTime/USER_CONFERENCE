<template>
  <div id="offcanvas-menu" class="edublink-vue-mobile-popup-menu">
    <div
      class="mobile-menu-overlay"
      @click="mobileMenuClose('removeClass', 'active')"
    ></div>
    <div class="inner">
      <div class="header-top">
        <div class="logo">
          <NuxtLink to="/">
            <img
              v-if="site.logo"
              class="logo-light"
              :src="site.logo"
              alt="Dark Logo"
            />
            <img
              v-else
              class="logo-dark"
              src="/images/logo/logo-white.png"
              alt="Light Logo"
            />
          </NuxtLink>
        </div>
        <div class="close-menu">
          <button
            class="close-button"
            @click="mobileMenuClose('removeClass', 'active')"
          >
            <i class="icon-73"></i>
          </button>
        </div>
      </div>
      <MobileMenu />
    </div>
  </div>
</template>

<script>
import MobileMenu from "./MobileMenu.vue";

export default {
  components: {
    MobileMenu,
  },
  props: ["site"],
  methods: {
    // Off-canvas Mobile Menu Close
    mobileMenuClose(triggerRemoveClass, className) {
      const el = document.querySelector("#offcanvas-menu");
      if (triggerRemoveClass === "addClass") {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    },
  },
};
</script>
