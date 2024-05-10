<template>
  <header class="edu-header header-style-3">
    <HeaderTopTwo :site="site" />
    <div class="header-mainmenu" :class="{ 'edu-sticky': isSticky }">
      <div class="container">
        <div class="header-navbar">
          <div class="header-brand">
            <div class="logo">
              <NuxtLink to="/">
                <img
                  v-if="site.logo"
                  class="logo-light"
                  :src="site.logo"
                  alt="Dark Logo"
                  height="140"
                  width="140"
                />
                <!-- <img
                  v-else
                  class="logo-dark"
                  src="/images/logo/logo-white.png"
                  alt="Light Logo"
                  height="140"
                  width="140"
                /> -->
              </NuxtLink>
            </div>
          </div>
          <div class="header-mainnav">
            <nav class="mainmenu-nav">
              <Navigation />
            </nav>
          </div>
          <div class="header-right">
            <ul class="header-action">
              <li class="icon search-icon" v-if="site.whatsapp_number">
                <a
                  :href="
                    'https://api.whatsapp.com/send?phone=' +
                    site.whatsapp_number
                  "
                  target="_blank"
                >
                  <button class="search-trigger">
                    <IconBrandWhatsapp></IconBrandWhatsapp>
                    <!-- <i class="IconBrandWhatsapp"></i> -->
                  </button></a
                >
              </li>
              <!-- <li class="icon cart-icon">
                <NuxtLink to="/shop/cart" class="cart-icon">
                  <i class="icon-3"></i>
                  <span class="count">0</span>
                </NuxtLink>
              </li> -->
              <li class="mobile-menu-bar d-block d-xl-none">
                <button
                  class="hamberger-button"
                  @click="mobileMenuOpen('addClass', 'active')"
                >
                  <i class="icon-54"></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <SearchPopUp />

    <OffCanvasMobileMenuOne />
  </header>
</template>

<script>
import HeaderTopTwo from "./HeaderTopTwo.vue";
import Navigation from "./Navigation.vue";
import OffCanvasMobileMenuOne from "./OffCanvasMobileMenuOne.vue";
import SearchPopUp from "./SearchPopUp.vue";
import { IconBrandWhatsapp } from "@tabler/icons-vue";

export default {
  components: {
    OffCanvasMobileMenuOne,
    Navigation,
    HeaderTopTwo,
    SearchPopUp,
    IconBrandWhatsapp,
  },
  // props: ["site"],
  data() {
    return {
      isSticky: false,
      site: "",
    };
  },
  created() {
    this.fetchDataSiteSetting();
  },
  //   props: ["showHeaderTop"],
  mounted() {
    window.addEventListener("scroll", () => {
      let scrollPos = window.scrollY;
      if (scrollPos >= 200) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    });
  },
  methods: {
    fetchDataSiteSetting() {
      api()
        .get("user-side/site-setting-show")
        .then((res) => {
          if (res.data.success) {
            this.site = res.data.data;
          }
        });
    },
    // Off-canvas Mobile Menu Open
    mobileMenuOpen(addRemoveClass, className) {
      const el = document.querySelector("#offcanvas-menu");
      if (addRemoveClass === "addClass") {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    },

    // search popup
    searchPopUpOpen(addRemoveClass, className) {
      const el = document.querySelector("#edu-search-popup");
      if (addRemoveClass === "addClass") {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    },
  },
};
</script>

<style lang="scss">
.header-style-3 {
  a.edu-btn.btn-secondary {
    background: var(--color-primary);
  }
}
</style>
