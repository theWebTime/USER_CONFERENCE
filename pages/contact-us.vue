<template>
  <div id="main-wrapper" class="main-wrapper">
    <HeaderThree />

    <BreadCrumbTwo title="Contact Us" />

    <section class="contact-us-area">
      <div class="container">
        <div class="row g-5">
          <div class="col-xl-4 col-lg-6">
            <div class="contact-us-info">
              <h3 class="heading-title">
                We're Always Eager to Hear From You!
              </h3>
              <ul class="address-list">
                <li>
                  <h5 class="title" v-if="site.address">Address</h5>
                  <p>{{ site.address }}</p>
                </li>
                <li>
                  <h5 class="title" v-if="site.email1">Email</h5>
                  <p>
                    <a :href="'mailto:' + site.email1" target="_blank">{{
                      site.email1
                    }}</a>
                  </p>
                </li>
                <li>
                  <h5 class="title" v-if="site.phone_number1">Phone</h5>
                  <p>
                    <a :href="'tel:' + site.phone_number1"
                      >(+091) {{ site.phone_number1 }}</a
                    >
                  </p>
                </li>
              </ul>
              <ul class="social-share">
                <li v-if="site.whatsapp_number">
                  <a :href="site.whatsapp_number" target="_blank"
                    ><IconBrandWhatsapp></IconBrandWhatsapp
                  ></a>
                </li>
                <li v-if="site.facebook_link">
                  <a :href="site.facebook_link" target="_blank"
                    ><i class="icon-facebook"></i
                  ></a>
                </li>
                <li v-if="site.instagram_link">
                  <a :href="site.instagram_link" target="_blank"
                    ><i class="icon-instagram"></i
                  ></a>
                </li>
                <li v-if="site.x_link">
                  <a :href="site.x_link" target="_blank"
                    ><i class="icon-twitter"></i
                  ></a>
                </li>
                <li v-if="site.linkedin_link">
                  <a :href="site.linkedin_link" target="_blank"
                    ><i class="icon-linkedin2"></i
                  ></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="offset-xl-2 col-lg-6">
            <div class="contact-form form-style-2">
              <div class="section-title">
                <h4 class="title">Get In Touch</h4>
                <p>
                  Fill out this form for booking a consultant advising session.
                </p>
              </div>

              <form
                class="rnt-contact-form rwt-dynamic-form"
                ref="form"
                @submit.prevent="submitForm()"
              >
                <div
                  class="alert alert-danger alert-dismissible fade show"
                  role="alert"
                  v-if="isError"
                >
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  ></button>
                  <strong>Error!</strong> {{ errorMessage }}.
                  <ul v-for="(value, key) in errors" :key="key">
                    <li v-for="(value1, key1) in value" :key="key1">
                      -> {{ value1 }}
                    </li>
                  </ul>
                  {{ value }}
                </div>
                <div class="row row--10">
                  <div class="form-group col-12">
                    <input
                      type="text"
                      name="fullname"
                      placeholder="Your name"
                      v-model="insertData.name"
                    />
                  </div>
                  <div class="form-group col-12">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      v-model="insertData.email"
                    />
                  </div>
                  <div class="form-group col-12">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone number"
                      v-model="insertData.phone_number"
                    />
                  </div>
                  <div class="form-group col-12">
                    <label>Country</label>
                    <select class="edu-select" v-model="insertData.country_id">
                      <option
                        v-for="(item, index) in data_fetch_countries"
                        :key="index"
                        :value="item.id"
                      >
                        {{ item.name }}
                      </option>
                    </select>
                  </div>
                  <div class="form-group col-12">
                    <textarea
                      name="message"
                      cols="30"
                      rows="4"
                      placeholder="Your message"
                      v-model="insertData.message"
                    ></textarea>
                  </div>
                  <div class="form-group col-12">
                    <button
                      class="rn-btn edu-btn btn-medium submit-btn"
                      name="submit"
                      type="submit"
                    >
                      Submit Message <i class="icon-4"></i>
                    </button>
                    <div v-if="showResult" class="col-12 success-msg">
                      <p>{{ resultText }}</p>
                    </div>
                  </div>
                </div>
              </form>

              <ul class="shape-group">
                <MouseMove
                  addClassName="shape-1"
                  dataDepth="1"
                  imgSrc="/images/about/shape-13.png"
                />
                <MouseMove
                  addClassName="shape-2"
                  dataDepth="-1"
                  imgSrc="/images/counterup/shape-02.png"
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="google-map-area" v-if="site.iframe">
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe
            id="gmap_canvas"
            :src="site.iframe"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </div>
      </div>
    </div>

    <FooterOne />
    <ScrollToTop />
  </div>
</template>

<script>
import emailjs from "emailjs-com";
import MouseMove from "~~/components/animation/MouseMove.vue";
import BreadCrumbTwo from "~~/components/common/BreadCrumbTwo.vue";
import HeaderThree from "~~/components/header/HeaderThree.vue";
import FooterOne from "~~/components/footer/FooterOne.vue";
import ScrollToTop from "~~/components/footer/ScrollToTop.vue";
import { IconBrandWhatsapp } from "@tabler/icons-vue";

export default {
  components: {
    HeaderThree,
    BreadCrumbTwo,
    MouseMove,
    FooterOne,
    ScrollToTop,
    IconBrandWhatsapp,
  },
  data() {
    return {
      site: "",
      insertData: {
        name: "",
        email: "",
        phone_number: "",
        message: "",
        country_id: "",
      },
      data_fetch_countries: "",
      resultText: "",
      showResult: false,
      isError: false,
      errorMessage: "",
      errors: {},
    };
  },
  created() {
    this.fetch_countries();
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
    fetch_countries() {
      api()
        .get("/user-side/country-listing")
        .then((res) => {
          if (res.data.success) {
            this.data_fetch_countries = res.data.data;
          }
        })
        .catch((e) => {
          this.$toast.error("Something went wrong");
        });
    },
    resetValues() {
      this.insertData.name = "";
      this.insertData.email = "";
      this.insertData.phone_number = "";
      this.insertData.message = "";
      this.insertData.country_id = "";
    },
    submitForm() {
      this.$store.commit("loaderStatus");
      api()
        .post("/user-side/user-contact-us", this.insertData)
        .then((res) => {
          console.log(res.data.success);
          if (res.data.success) {
            this.$toast.success(res.data.message);
            this.resetValues();
          } else {
            this.$toast.error(res.data.message);
            this.errors = res.data.data;
            this.errorMessage = res.data.message;
            this.isError = true;
          }
          this.isSubmit = false;
          this.$store.commit("loaderStatus");
        })
        .catch((e) => {
          this.isError = true;
          this.$store.commit("loaderStatus");
        });
    },
    /* sendEmail(e) {
      emailjs
        .sendForm(
          "service_bxh6md3",
          "template_1g7v07n",
          this.$refs.form,
          "user_8Lx0gfI1ktOoeEN8DTV10"
        )
        .then(
          (result) => {
            this.showResult = true;
            this.resultText =
              "Your message has been sent successfully. We will contact you soon.";
            setTimeout(() => {
              this.showResult = false;
            }, 5000);
            e.target.reset();
            console.log("SUCCESS!", result.text);
          },
          (error) => {
            this.showResult = true;
            this.resultText = error.text;
            setTimeout(() => {
              this.showResult = false;
            }, 5000);
            console.log("FAILED...", error.text);
          }
        );
    }, */
  },
  /* head() {
    return {
      title: "Contact Us",
    };
  }, */
};
</script>
