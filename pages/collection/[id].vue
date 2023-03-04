<!-- Page: Collection -->
<!-- Collection page template -->
<!-- Wiki:  -->
<template>
    <div>
        <Main_Header />
        <div class="content">
            <Widget_Collection_Card />
            <div class="widget-row-1">
                <Widget_Collection_User_Rating />
                <Widget_Collection_Editors_Rating />
                <Widget_Collection_User_Rating_Vote />
            </div>
            <Widget_Collection_Stats />
            <div class="widget-row-1">
                <Widget_Collection_Graph_MostAvarage />
                <Widget_Collection_GraphPrice />
            </div>
            <Widget_Collection_Items />
            <div class="widget-row-1">
                <Widget_Collection_Calendar />
                <Widget_Collection_News />
            </div>
            <Widget_Collection_Reviews />
            <div class="widget-row-1">
                <Widget_Collection_Creator />
                <Widget_Collection_Verify />
            </div>
            <Widget_Collection_SingularLink />
        </div>
        <Main_Footer />
    </div>
</template>
<script>
import Main_Header from '~/components/header/Main_Header.vue';
import Main_Footer from '~/components/footer/Main_Footer.vue';
import Widget_Collection_Card from '~/components/collection/Widget_Collection_Card.vue';
import Widget_Collection_User_Rating from '~/components/collection/Widget_Collection_User_Rating.vue';
import Widget_Collection_Editors_Rating from '~/components/collection/Widget_Collection_Editors_Rating.vue';
import Widget_Collection_User_Rating_Vote from '~/components/collection/Widget_Collection_User_Rating_Vote.vue';
import Widget_Collection_Stats from '~/components/collection/Widget_Collection_Stats';
import Widget_Collection_Graph_MostAvarage from '~/components/collection/Widget_Collection_Graph_MostAvarage';
import Widget_Collection_GraphPrice from '~/components/collection/Widget_Collection_GraphPrice';
import Widget_Collection_Items from '~/components/collection/Widget_Collection_Items';
import Widget_Collection_Calendar from '~/components/collection/Widget_Collection_Calendar';
import Widget_Collection_News from '~/components/collection/Widget_Collection_News';
import Widget_Collection_Reviews from '~/components/collection/Widget_Collection_Reviews';
import Widget_Collection_Creator from '~/components/collection/Widget_Collection_Creator';
import Widget_Collection_Verify from '~/components/collection/Widget_Collection_Verify';
import Widget_Collection_SingularLink from '~/components/collection/Widget_Collection_SingularLink';

export default {

    components: { Main_Header, Main_Footer, Widget_Collection_Card, Widget_Collection_User_Rating, Widget_Collection_Editors_Rating, Widget_Collection_User_Rating_Vote, Widget_Collection_Stats, Widget_Collection_Graph_MostAvarage, Widget_Collection_GraphPrice, Widget_Collection_Items, Widget_Collection_Calendar, Widget_Collection_News, Widget_Collection_Reviews, Widget_Collection_Creator, Widget_Collection_Verify, Widget_Collection_SingularLink },

}
</script>