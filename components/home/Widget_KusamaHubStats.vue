<!-- Widget: Stats -->
<!-- Shows full statistic from KusamaHub, which contains numbers of collections, creators, transactions and etc. -->
<!-- Wiki:  -->
<template>
    <div class="widget-row-1">
        <div class="widget">
            <div class="widget-header">
                <router-link to="/stats">
                    <div class="widget-title"><img src="@/static/images/icons/icon-stats.svg">Stats</div>
                </router-link>
            </div>
            <div class="widget-content">
                <div class="stats-container">
                    <div class="stats-block">
                        <span class="stats-number">124</span> <span class="stats-projects">Projects</span> on <span class="stats-decoration">KusamaHub</span>
                    </div>
                    <div class="stats-block">
                        <span class="stats-number">120</span> <span class="stats-creators">Creators</span> on <span class="stats-decoration">KusamaHub</span>
                    </div>
                    <div class="stats-block">
                        <span class="stats-number">120</span> <span class="stats-reviews">Reviews</span> users write on <span class="stats-decoration">KusamaHub</span>
                    </div>
                    <div class="stats-block">
                        <span class="stats-number">240</span> <span class="stats-creators">Likes</span> users sent on <span class="stats-decoration">KusamaHub</span>
                    </div>
                    <div class="stats-block">
                        <span class="stats-number">12.4</span> <span class="stats-ksm">$KSM</span> is avarage floor from all <span class="stats-projects">Projects</span>
                    </div>
                    <div class="stats-block">
                        <span class="stats-number">20000</span> NFT from all <span class="stats-projects">Projects</span> on <span class="stats-decoration">KusamaHub</span>
                    </div>
                    <div class="stats-block">
                        <span class="stats-number">4200</span> <span class="stats-ksm">$KSM</span> is the highiest price on NFT
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Widget_KusamaHubStats'
}
</script>