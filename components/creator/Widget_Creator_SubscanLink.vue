<!-- Widget: Link to data (Subscan) -->
<!-- Links to current creator on another projects (Sub.ID, Explorer, etc) -->
<!-- Wiki:  -->
<template>
    <div class="widget">
        <div class="widget-header">
            <div class="widget-title"><img src="@/static/images/icons/icon-openon.svg">Open on...</div>
        </div>
        <div class="widget-content">
            <a :href="singularLink">
                <div class="open-on-link">Open on Sub.id</div>
            </a>
            <a :href="singularLink">
                <div class="open-on-link">Open on Singular</div>
            </a>
            <a :href="singularLink">
                <div class="open-on-link">Open on Subscan</div>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Widget_Creator_SubscanLink'
}
</script>