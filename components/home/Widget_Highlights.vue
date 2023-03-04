<!-- Widget: Highlights -->
<!-- Widget shows different collections choosen by specific parametrs -->
<!-- Wiki:  -->
<template>
    <div class="widget-row-1">
        <div class="widget">
            <div class="widget-header">
                <div class="widget-title"><img src="@/static/images/icons/icon-highlights.svg">Highlights</div>
                <div class="widget-button"><span class="material-icons">help_outline</span></div>
            </div>
            <div class="widget-content">
                <div class="collection">
                    <div class="collection-image">
                        <img src="@/static/img.png">
                    </div>
                    <div class="collection-data">
                        <router-link to="/collection/_id">
                            <div class="collection-name">Kusama Dragons <img class="verified-badge" src="@/static/images/icons/verified-badge.svg"></div>
                            <div class="collection-creator">Hw4J...GxAJ</div>
                            <div class="collection-description">The official Kusama Dragons collection. 110 handmade Dragons, divided in this way:
                                -55 Limited Dragons -25 Rare Dragons -15 Ultra Rare Dragons -10 Legendary Dragons -5 Unique Dragons
                                Each Dragons has a different traits, name, and personality. Only the bravest Dragon hunters will be able to tame these legendary beasts. Expect chaos.</div>
                            <div class="collection-tags">
                                <div class="collection-tag">Verified</div>
                                <div class="collection-tag">Animals</div>
                                <div class="collection-tag">Top project</div>
                                <div class="collection-tag">Top creator</div>
                            </div>
                        </router-link>
                    </div>
                    <div class="collection-social">
                        <div class="collection-social-block">
                            <a href="https://twitter.com/KusamaDragons">
                                <div class="collection-social-icon"><img src="@/static/images/icons/icon-twitter.svg"></div>
                                <div class="collection-social-name">Twitter</div>
                            </a>
                        </div>
                        <div class="collection-social-block">
                            <a href="https://singular.app/space/kusama/Hw4J3VBtCGnHufxTkDJHvsWxS8iKE7LyBKH5pYA6MNQGxAJ/nfts/owned">
                                <div class="collection-social-icon"><img src="@/static/images/icons/icon-singular.svg"></div>
                                <div class="collection-social-name">Singular</div>
                            </a>
                        </div>
                        <div class="collection-social-block">
                            <a href="https://linktr.ee/Kusamadragons">
                                <div class="collection-social-icon"><img src="@/static/images/icons/icon-web.svg"></div>
                                <div class="collection-social-name">Website</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Widget_Highlights',
}
</script>