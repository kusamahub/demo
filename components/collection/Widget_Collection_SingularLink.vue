<!-- Widget: Link to Market (Singular) -->
<!-- Links for collection on another projects (Singular, Explorer and etc.) -->
<!-- Wiki:  -->
<template>
    <div class="widget">
        <div class="widget-header">
            <div class="widget-title"><img src="@/static/images/icons/icon-openon.svg">Open on...</div>
        </div>
        <div class="widget-content">
            <a :href="singularLink">
                <div class="open-on-link">Open on Singular</div>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Widget_Collection_SingularLink',
}
</script>