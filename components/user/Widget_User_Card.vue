<!-- Widget: User Card -->
<!-- Contains current user basic info (address, Kusama Avatar, Kusama name and etc) -->
<!-- Wiki:  -->
<template>
    <div class="widget-row-1">
        <div class="widget">
            <div class="widget-header">
                <div class="widget-title"><img src="@/static/images/icons/icon-user.svg">User</div>
                <div class="widget-button"><span class="material-icons">logout</span></div>
            </div>
            <div class="widget-content">
                <div class="user-card">
                    <div class="user-card-image">
                        <img src="@/static/img.png">
                    </div>
                    <div class="user-card-data">
                        <div class="user-card-name">Username</div>
                        <div class="user-card-creator">Hw4J...GxAJ</div>
                    </div>
                    <div class="user-card-social">
                        <div class="user-card-social-block">
                            <a href="https://twitter.com/KusamaDragons">
                                <div class="user-card-social-icon"><img src="@/static/images/icons/icon-twitter.svg"></div>
                                <div class="user-card-social-name">Twitter</div>
                            </a>
                        </div>
                        <div class="user-card-social-block">
                            <a href="https://singular.app/space/kusama/Hw4J3VBtCGnHufxTkDJHvsWxS8iKE7LyBKH5pYA6MNQGxAJ/nfts/owned">
                                <div class="user-card-social-icon"><img src="@/static/images/icons/icon-singular.svg"></div>
                                <div class="user-card-social-name">Singular</div>
                            </a>
                        </div>
                        <div class="user-card-social-block">
                            <a href="https://linktr.ee/Kusamadragons">
                                <div class="user-card-social-icon"><img src="@/static/images/icons/icon-web.svg"></div>
                                <div class="user-card-social-name">Website</div>
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
    name: 'Widget_User_Card',
}


// }
</script>