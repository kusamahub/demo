<!-- Page: Design -->
<!-- Contains KusamaHub brand assets and design guidlines for third parties -->
<!-- Wiki:  -->
<template>
    <div>
        <Main_Header />
        <div class="content">
            <div class="widget-row-1">
                <div class="widget">
                    <div class="widget-header">
                        <div class="widget-title"><img src="@/static/images/icons/icon-design.svg">Design</div>
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

export default {

    components: { Main_Header, Main_Footer },
}
</script>