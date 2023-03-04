<!-- Widget: Collection Creator Card -->
<!-- Creator card (mini) with current collection creator with URL to Creator's page -->
<!-- Wiki:  -->
<template>
    <div class="widget">
        <div class="widget-header">
            <div class="widget-title"><img src="@/static/images/icons/icon-creators.svg">Creator</div>
        </div>
        <div class="widget-content">
            <router-link to="/creator/_id">
                <div class="creator-collection">
                    <div class="creator-image">
                        <img src="@/static/img.png">
                    </div>
                    <div class="creator-data">
                        <div class="creator-username">Kusama Dragons</div>
                        <div class="creator-address">Hw4J...GxAJ</div>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Widget_Collection_Creator',
}
</script>