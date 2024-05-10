<template>
    <div class="edu-course-area course-area-1 edu-section-gap bg-lighten01">
        <div class="container">
            <SectionTitle preTitle='Popular Courses' title='Pick A Course To Get Started' alignment='section-center' />
            <div class="row g-5">
                <div class="col-md-6 col-xl-3" data-aos-delay="150" data-aos="fade-up" data-aos-duration="800"
                    v-for="course in courseItems.slice(0, 4)" :key="course.id">
                    <CourseTypeOne :course="course" />
                </div>
            </div>
            <div class="course-view-all" data-aos-delay="150" data-aos="fade-up" data-aos-duration="1200">
                <NuxtLink to="/course/course-one" class="edu-btn">Browse more courses <i class="icon-4"></i></NuxtLink>
            </div>
        </div>
    </div>
</template>

<script>
import courseItemsMixin from '../../mixins/courseItemsMixin';
import SectionTitle from '../common/SectionTitle.vue';
import CourseTypeOne from '../course/CourseTypeOne.vue';


export default {
    mixins: [courseItemsMixin],
    components: {
        SectionTitle,
        CourseTypeOne
    },
    
}
</script>