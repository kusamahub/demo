<!-- Widget: Creator Projects -->
<!-- Contains all collections, where creator is issuer -->
<!-- Wiki:  -->
<template>
    <div class="widget">
        <div class="widget-header">
            <div class="widget-title"><img src="@/static/images/icons/icon-creatorprojects.svg">Projects</div>
        </div>
        <div class="widget-content">
            <div class="projects-grid">
                <router-link to="/collection/_id">
                    <div class="project-card project-card-max-width">
                        <div class="project-card-image">
                            <img src="https://singular.app/_next/image?url=https%3A%2F%2Frmrk.myfilebase.com%2Fipfs%2Fbafybeib5fncxqkqvwgkc6nekvpsrlxqtoa3kruvp24b3vx7lo6mtpnh32a&w=256&q=50">
                        </div>
                        <div class="project-card-name">Kusama Dragons</div>
                        <div class="project-card-creators">Kusama Dragons</div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Widget_Creator_Projects',
}
</script>