<!-- Element: Footer -->
<!-- Main footer element for all pages -->
<!-- Wiki:  -->
<template>
    <div class="footer">
        <div class="footer-continer">
            <div class="footer-block">
                <div class="footer-block-title">Pages</div>
                <router-link to="/collections">
                    <div class="footer-block-link"><img src="@/static/images/icons/icon-projects.svg">Explore projects</div>
                </router-link>
                <router-link to="/creators">
                    <div class="footer-block-link"><img src="@/static/images/icons/icon-creators.svg">Explore creators</div>
                </router-link>
                <router-link to="/stats">
                    <div class="footer-block-link"><img src="@/static/images/icons/icon-stats.svg">Stats</div>
                </router-link>
                <router-link to="/news">
                    <div class="footer-block-link"><img src="@/static/images/icons/icon-news.svg">News</div>
                </router-link>
                <router-link to="/calendar">
                    <div class="footer-block-link"><img src="@/static/images/icons/icon-calendar.svg">Calendar</div>
                </router-link>
                <router-link to="/roadmap">
                    <div class="footer-block-link"><img src="@/static/images/icons/icon-roadmap.svg">Roadmap</div>
                </router-link>
                <router-link to="/team">
                    <div class="footer-block-link"><img src="@/static/images/icons/icon-team.svg">Team</div>
                </router-link>
                <a target="_blank" href="https://kusamahub-wiki.notion.site">
                    <div class="footer-block-link"><img src="@/static/images/icons/icon-wiki.svg">Wiki</div>
                </a>
                <router-link to="/design">
                    <div class="footer-block-link"><img src="@/static/images/icons/icon-design.svg">Design</div>
                </router-link>
            </div>
            <div class="footer-block">
                <div class="footer-block-title">Social</div>
                <a target="_blank" href="https://twitter.com/kusamahub">
                    <div class="footer-block-link"><img src="@/static/images/icons/icon-twitter.svg">Twitter</div>
                </a>
                <a target="_blank" href="https://discord.gg/VJ7JwufVQN">
                    <div class="footer-block-link"><img src="@/static/images/icons/icon-discord.svg">Discord</div>
                </a>
                <a target="_blank" href="https://www.youtube.com/@kusamahub">
                    <div class="footer-block-link"><img src="@/static/images/icons/icon-youtube.svg">YouTube</div>
                </a>
                <a target="_blank" href="https://kusama.polkassembly.io/post/1645">
                    <div class="footer-block-link"><img src="@/static/images/icons/icon-polkassembly.svg">Polkassembly</div>
                </a>
                <a target="_blank" href="https://github.com/kusamahub">
                    <div class="footer-block-link"><img src="@/static/images/icons/icon-github.svg">GitHub</div>
                </a>
            </div>
            <div class="footer-block">
                <div class="footer-block-title">Projects</div>
                <router-link to="/projects/internalgov">
                    <div class="footer-block-link"><img src="@/static/images/icons/icon-internalgov.svg">InternalGov-2.0</div>
                </router-link>
                <router-link to="/projects/pysubalert">
                    <div class="footer-block-link"><img src="@/static/images/icons/icon-pysubalert.svg">py-subalert</div>
                </router-link>
                <router-link to="/projects/minttool">
                    <div class="footer-block-link"><img src="@/static/images/icons/icon-minttool.svg">Mint Tool</div>
                </router-link>
                <router-link to="/projects/api">
                    <div class="footer-block-link"><img src="@/static/images/icons/icon-api.svg">API</div>
                </router-link>
                <router-link to="/projects/nftgenerator">
                    <div class="footer-block-link"><img src="@/static/images/icons/icon-nftgenerator.svg">NFT Generator</div>
                </router-link>
            </div>
        </div>
        <div class="footer-block">
            <div class="footer-block-title">Contact</div>
            <div class="footer-block-text">Be free to contact us for any questions or suggestions! Or if you're bored :)</div>
            <a href="mailto:support@kusamahub.com">
                <div class="footer-block-email">support@kusamahub.com</div>
            </a>
        </div>
    </div>
    <div class="footer-last">
        <div class="footer-last-block">This is a demo stand of KusamaHub. All functions have only demonstrative data and functionality.</div>
        <div class="footer-last-block">2023 KusamaHub</div>
    </div>
</template>
<script>
export default {
    name: 'Main_Footer'
}
</script>