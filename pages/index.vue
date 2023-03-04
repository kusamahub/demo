<!-- Page: Main -->
<!-- Main page of KusamaHub -->
<!-- Wiki:  -->
<template>
    <Main_Header />
    <div class="content">
        <Widget_TeamAnnounce />
        <Widget_Highlights />
        <div class="widget-row-1">
            <Widget_ExploreCollections />
            <Widget_ExploreCreators />
            <Widget_KusamaPrice />
        </div>
        <div class="widget-row-1">
            <Widget_TopCreators />
            <Widget_TopProjects />
        </div>
        <Widget_KusamaHubStats />
        <div class="widget-row-1">
            <Widget_News />
            <Widget_LastReviews />
        </div>
        <Widget_Calendar />
    </div>
    <Main_Footer />
</template>
<script>
import Widget_Highlights from '~/components/home/Widget_Highlights.vue';
import Widget_ExploreCollections from '~/components/home/Widget_ExploreCollections.vue';
import Widget_ExploreCreators from '~/components/home/Widget_ExploreCreators.vue';
import Widget_KusamaPrice from '~/components/home/Widget_KusamaPrice.vue';
import Widget_TopCreators from '~/components/home/Widget_TopCreators.vue';
import Widget_TopProjects from '~/components/home/Widget_TopProjects.vue';
import Widget_KusamaHubStats from '~/components/home/Widget_KusamaHubStats.vue';
import Widget_Calendar from '~/components/home/Widget_Calendar.vue';
import Widget_News from '~/components/home/Widget_News.vue';
import Widget_LastReviews from '~/components/home/Widget_LastReviews.vue';
import Main_Header from '~/components/header/Main_Header.vue';
import Main_Footer from '~/components/footer/Main_Footer.vue';
import Widget_TeamAnnounce from '~/components/home/Widget_TeamAnnounce.vue';

export default {
    components: { Widget_Highlights, Widget_ExploreCollections, Widget_ExploreCreators, Widget_KusamaPrice, Widget_Calendar, Widget_TopCreators, Widget_TopProjects, Widget_KusamaHubStats, Widget_News, Widget_LastReviews, Main_Header, Main_Footer, Widget_TeamAnnounce },

    methods: {

    },
};
</script>