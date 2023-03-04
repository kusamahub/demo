<!-- Widget: Creator Card -->
<!-- Contains base cretor information -->
<!-- Wiki:  -->
<template>
    <div class="widget-row-1">
        <div class="widget">
            <div class="widget-header">
                <div class="widget-title"><img src="@/static/images/icons/icon-creators.svg">Creator</div>
                <div class="widget-button"><span class="material-icons">ios_share</span></div>
            </div>
            <div class="widget-content">
                <div class="creator">
                    <div class="creator-image">
                        <img src="@/static/img.png">
                    </div>
                    <div class="creator-data">
                        <div class="creator-name">Kusama Dragons <img class="verified-badge" src="@/static/images/icons/verified-badge.svg"></div>
                        <div class="creator-creator">Hw4J...GxAJ</div>
                        <div class="creator-description">The official Kusama Dragons creator. 110 handmade Dragons, divided in this way:
                            -55 Limited Dragons -25 Rare Dragons -15 Ultra Rare Dragons -10 Legendary Dragons -5 Unique Dragons
                            Each Dragons has a different traits, name, and personality. Only the bravest Dragon hunters will be able to tame these legendary beasts. Expect chaos.</div>
                    </div>
                    <div class="creator-social">
                        <div class="creator-social-block">
                            <a href="https://twitter.com/KusamaDragons">
                                <div class="creator-social-icon"><img src="@/static/images/icons/icon-twitter.svg"></div>
                                <div class="creator-social-name">Twitter</div>
                            </a>
                        </div>
                        <div class="creator-social-block">
                            <a href="https://singular.app/space/kusama/Hw4J3VBtCGnHufxTkDJHvsWxS8iKE7LyBKH5pYA6MNQGxAJ/nfts/owned">
                                <div class="creator-social-icon"><img src="@/static/images/icons/icon-singular.svg"></div>
                                <div class="creator-social-name">Singular</div>
                            </a>
                        </div>
                        <div class="creator-social-block">
                            <a href="https://linktr.ee/Kusamadragons">
                                <div class="creator-social-icon"><img src="@/static/images/icons/icon-web.svg"></div>
                                <div class="creator-social-name">Website</div>
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
    name: 'Widget_Creator_Card',
    data() {
        return {
            creator: {}
        }
    },

    created() {
        this.getUsersById()
    },
    methods: {
        async getUsersById() {
            // const userIdPromise = await fetch(`https://reqres.in/api/users/${this.$route.params.id}`)
            // const userIdJson = userIdPromise.json()
            // userIdJson.then((res) => {
            //   this.creator = res.data
            // })



            this.creator = await fetch('https://squid.subsquid.io/kusama-explorer/v/v3/graphql', {
                    // this.creator = await fetch('https://squid.subsquid.io/rubick/v/007/graphql', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        "user-agent": "JS GraphQL"
                    },
                    body: JSON.stringify({
                        query: `{
                  accountById(id: "${this.$route.params.id}") {
                    id
                  }
                }`
                    })
                })
                .then((res) => res.json())
                .then((res) => res.data.accountById)

        }



        // await fetch(`http://localhost:4000/api/creator/${this.$route.params.id}`, {
        //       method: 'GET',
        //       headers: {
        //         'Content-Type': 'application/json',
        //       },
        //       body: JSON.stringify()
        //     })
        //       .then((response) => response.json())
        //       .then((data) => { console.log('Success:'); this.creator = data; })
        //       .catch((error) => { console.error('Error:', error); });
        //   }



    }
}


// }
</script>