<template>
  <footer class="edu-footer footer-dark bg-image footer-style-2">
    <div class="footer-top footer-top-2">
      <div class="container">
        <div class="row g-5">
          <div class="col-lg-3 col-md-6">
            <div class="edu-footer-widget">
              <div class="logo">
                <NuxtLink to="/">
                  <img
                    class="logo-dark"
                    src="/images/logo/logo-white.png"
                    alt="Light Logo"
                  />
                </NuxtLink>
              </div>
              <p class="description">
                Lorem ipsum dolor amet consecto adi pisicing elit sed eiusm
                tempor incidid unt labore dolore.
              </p>
              <div class="widget-information">
                <ul class="information-list">
                  <li v-if="site.address">
                    <span>Add:</span>{{ site.address }}
                  </li>
                  <li v-if="site.phone_number2">
                    <span>Call:</span
                    ><a :href="'tel:' + site.phone_number2"
                      >+91 {{ site.phone_number2 }}</a
                    >
                  </li>
                  <li v-if="site.email2">
                    <span>Email:</span
                    ><a :href="'mailto:' + site.email2" target="_blank">{{
                      site.email2
                    }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="edu-footer-widget explore-widget">
              <h4 class="widget-title">Pages</h4>
              <div class="inner">
                <ul class="footer-link link-hover">
                  <li><NuxtLink to="/about">About</NuxtLink></li>
                  <li><NuxtLink to="/conference">Conference</NuxtLink></li>
                  <li><NuxtLink to="/gallery">Gallery</NuxtLink></li>
                </ul>
              </div>
            </div>
          </div>
          <!-- <div class="col-lg-2 col-sm-6">
            <div class="edu-footer-widget quick-link-widget">
              <h4 class="widget-title">Links</h4>
              <div class="inner">
                <ul class="footer-link link-hover">
                  <li><NuxtLink to="/faq">FAQ's</NuxtLink></li>
                  <li><NuxtLink to="/gallery-grid">Gallery</NuxtLink></li>
                  <li>
                    <NuxtLink to="/blog/blog-standard"
                      >News & Articles</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/privacy-policy">Privacy Policy</NuxtLink>
                  </li>
                  <li><NuxtLink to="/my-account">Sign In</NuxtLink></li>
                  <li><NuxtLink to="/contact-us">Contact Us</NuxtLink></li>
                </ul>
              </div>
            </div>
          </div> -->
          <div class="col-lg-4 col-md-6">
            <div class="edu-footer-widget">
              <h4 class="widget-title">Contacts</h4>
              <div class="inner">
                <p class="description">
                  Enter your email address to register to our newsletter
                  subscription
                </p>
                <div class="input-group footer-subscription-form">
                  <a href="/contact-us">
                    <button class="edu-btn btn-medium" type="button">
                      Contact Us <i class="icon-4"></i></button
                  ></a>
                </div>
                <ul class="social-share icon-transparent">
                  <li v-if="site.facebook_link">
                    <a
                      :href="site.facebook_link"
                      target="_blank"
                      class="color-fb"
                      ><i class="icon-facebook"></i
                    ></a>
                  </li>
                  <li v-if="site.linkedin_link">
                    <a
                      :href="site.linkedin_link"
                      target="_blank"
                      class="color-linkd"
                      ><i class="icon-linkedin2"></i
                    ></a>
                  </li>
                  <li v-if="site.instagram_link">
                    <a
                      :href="site.instagram_link"
                      target="_blank"
                      class="color-ig"
                      ><i class="icon-instagram"></i
                    ></a>
                  </li>
                  <li v-if="site.x_link">
                    <a :href="site.x_link" target="_blank" class="color-twitter"
                      ><i class="icon-twitter"></i
                    ></a>
                  </li>
                  <li v-if="site.youtube_link">
                    <a
                      :href="site.youtube_link"
                      target="_blank"
                      class="color-yt"
                      ><i class="icon-youtube"></i
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="copyright-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="inner text-center">
              <p>
                Copyright {{ new Date().getFullYear() }}
                <a href="https://thewebtime.in/">EduBlink</a> Developed &
                Designed By
                <a href="https://thewebtime.in/" target="_blank">TWT</a>. All
                Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      site: "",
    };
  },
  created() {
    this.fetchDataSiteSetting();
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
  },
};
</script>
