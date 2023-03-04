<!-- Widget: Announce -->
<!-- Shows important message from KusamaHub Team -->
<!-- Wiki:  -->
<template>
    <div v-if="!isHidden">
        <div class="widget-row-1">
            <div class="widget">
                <div class="widget-header">
                    <div class="widget-title"><img src="@/static/images/icons/icon-announce.svg">Announce</div>
                    <div @click="toggleHide" class="widget-button"><span class="material-icons">close</span></div>
                </div>
                <div class="widget-content">
                    <div>Hello and welcome to the KusamaHub Demonstration Stand! Here, you can see the visual final version of KusamaHub and its features. The demo is more about the design and how the elements work. All content here is preloaded and not using API. Feel free to explore!</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Widget_TeamAnnounce',
}
</script>