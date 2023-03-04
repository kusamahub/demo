<!-- Widget: Collection Reviews -->
<!-- Users reviews for current collection -->
<!-- Wiki:  -->
<template>
    <div class="widget-row-1">
        <div class="widget">
            <div class="widget-header">
                <div class="widget-title"><img src="@/static/images/icons/icon-reviews.svg">Reviews</div>
                <div class="widget-filters">
                    <div class="widget-filters-filter">Own</div>
                    <div class="widget-filters-filter">Sold</div>
                    <div class="widget-filters-filter">Don't have</div>
                    <div class="widget-filters-filter">All</div>
                </div>
                <div class="widget-button"><span class="material-icons">add</span></div>
            </div>
            <div class="widget-content">
                <div class="empty-message">Nobody leave review yet 😕</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Widget_Collection_Reviews',
}
</script>