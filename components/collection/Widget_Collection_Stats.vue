<!-- Widget: Collection Stats -->
<!-- Full statistic for current collection. Contains blockchain and KusamaHub data -->
<!-- Wiki:  -->
<template>
    <div class="widget-row-1">
        <div class="widget">
            <div class="widget-header">
                <div class="widget-title"><img src="@/static/images/icons/icon-projectstats.svg">Project stats</div>
                <div class="widget-button"><span class="material-icons">help_outline</span></div>
            </div>
            <div class="widget-content">
                <div class="stats-container">
                    <div class="stats-block">
                        <span class="stats-number">124</span> <span class="stats-projects">items</span> listed
                    </div>
                    <div class="stats-block">
                        <span class="stats-number">120</span> <span class="stats-creators">Unique</span> owners
                    </div>
                    <div class="stats-block">
                        <span class="stats-number">5 $KSM</span> <span class="stats-reviews">Volume trade</span>
                    </div>
                    <div class="stats-block">
                        <span class="stats-number">124</span> <span class="stats-creators">Distribution</span>
                    </div>
                    <div class="stats-block">
                        <span class="stats-number">12.4</span> <span class="stats-ksm">$KSM</span> is highiest sale
                    </div>
                    <div class="stats-block">
                        <span class="stats-number">110</span> <span class="stats-projects">Sales</span>
                    </div>
                    <div class="stats-block">
                        <span class="stats-number">1 </span> <span class="stats-ksm">$KSM</span> floor price
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Widget_Collection_Stats'
}
</script>