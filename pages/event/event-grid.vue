<template>
    <div id="main-wrapper" class="main-wrapper">

        <HeaderOne />

        <BreadCrumbTwo pageTitle='Event Grid' title='Event Page' />

        <div class="edu-event-area event-area-1 section-gap-equal">
            <div class="container">
                <div class="row g-5">
                    <div class="col-lg-4 col-md-6" data-aos-delay="100" data-aos="fade-up" data-aos-duration="800"
                        v-for="event in getItems" :key="event.id">
                        <EventOne :eventInfo="event" />
                    </div>
                </div>

                <div v-if="getPaginateCount > 1">
                    <div class="edublink-vue-pagination" >
                        <pagination 
                            v-model="currentPage" 
                            :per-page="perPage" 
                            :records="eventItems.length"
                            @paginate="paginateClickCallback"
                            :options="paginationOptions"
                        />
                    </div>
                </div>
            </div>
        </div>

        <FooterOne />
        <ScrollToTop />
    </div>
</template>

<script>
import BreadCrumbTwo from '~~/components/common/BreadCrumbTwo.vue';
import HeaderOne from '~~/components/header/HeaderOne.vue';
import FooterOne from '~~/components/footer/FooterOne.vue';
import EventOne from '~~/components/event/EventOne.vue';
import ScrollToTop from '~~/components/footer/ScrollToTop.vue';

import eventMixin from '../../mixins/eventMixin';
import Pagination from 'v-pagination-3';

export default {
    mixins: [eventMixin],
    components: {
    HeaderOne,
    BreadCrumbTwo,
    EventOne,
    FooterOne,
    ScrollToTop,
    Pagination
},
    data() {
        return {
            currentPage: 1,
            perPage: 9,
            paginationOptions: {
                texts: {
                    nextPage: '',
                    prevPage: ''
                }
            }
        }
    },
    computed: {
        getItems() {
            let start = (this.currentPage - 1) * this.perPage;
            let end = this.currentPage * this.perPage;
            return this.eventItems.slice(start, end);
        },
        getPaginateCount() {
            return Math.ceil(this.eventItems.length / this.perPage);
        }
    },
    methods: {
        paginateClickCallback(page) {
            this.currentPage = Number(page);
        }
    },
    head() {
        return {
            title: 'Event Grid'
        }
    },
    
}
</script>