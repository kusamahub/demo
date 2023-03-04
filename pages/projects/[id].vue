<!-- Page: KusamaHub Side Project Page -->
<!-- KusamaHub Project page -->
<!-- Wiki:  -->
<template>
    <div>
        <Main_Header />
        <div class="content">
            <div class="widget-row-1">
                <div class="widget">
                    <div class="widget-header">
                        <div class="widget-title"><img src="@/static/images/icons/icon-api.svg">API</div>
                        <div class="widget-button"><span class="material-icons">search</span></div>
                    </div>
                    <div class="widget-content">
                    </div>
                </div>
            </div>
        </div>
        <Main_Footer />
    </div>
</template>
<script>
import Main_Header from '~/components/header/Main_Header.vue';
import Main_Footer from '~/components/footer/Main_Footer.vue';
import Widget_User_Card from '~/components/user/Widget_User_Card.vue';
import Widget_User_Favorites from '~/components/user/Widget_User_Favorites.vue';
import Widget_User_Rating from '~/components/user/Widget_User_Rating.vue';
import Widget_User_Reviews from '~/components/user/Widget_User_Reviews.vue';

export default {
    components: { Main_Header, Main_Footer, Widget_User_Card, Widget_User_Favorites, Widget_User_Rating, Widget_User_Reviews },
}
</script>