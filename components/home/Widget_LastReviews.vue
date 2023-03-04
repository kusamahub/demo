<!-- Widget: Latest reviews -->
<!-- Shows latest reviews writen by any user for any collection -->
<!-- Wiki:  -->
<template>
    <div class="widget">
        <div class="widget-header">
            <div class="widget-title"><img src="@/static/images/icons/icon-reviews.svg">Latest Reviews</div>
        </div>
        <div class="widget-content widget-scrollable">
            <!-- <div class="widget-work-in-progress">
            <div class="widget-work-in-progress-icon">🥵🔧👷‍♀️🏗️</div>
            <div class="widget-work-in-progress-title">We working on it!</div>
            <div class="widget-work-in-progress-description">This function in develop now and will be availabe on Q1.</div>
          </div> -->
            <div class="review-container">
                <div class="review-header">
                    <div class="reviewer-image">
                        <img src="https://singular.app/_next/image?url=https%3A%2F%2Frmrk.myfilebase.com%2Fipfs%2Fbafybeib5fncxqkqvwgkc6nekvpsrlxqtoa3kruvp24b3vx7lo6mtpnh32a&w=256&q=50">
                    </div>
                    <div class="reviewer-meta">
                        <span class="reviewer-name">Bob</span> <span>left a review to </span><span class="review-to">Kusama Dragons</span>
                    </div>
                </div>
                <div class="review-content">
                    <div class="reviewer-text">Nice collection! Like it!</div>
                    <div class="review-likes">
                        <div class="review-thumbs-up">👍 10</div>
                        <div class="review-thumbs-down">👎 3</div>
                    </div>
                </div>
            </div>
            <div class="review-container">
                <div class="review-header">
                    <div class="reviewer-image">
                        <img src="https://singular.app/_next/image?url=https%3A%2F%2Frmrk.myfilebase.com%2Fipfs%2Fbafybeib5fncxqkqvwgkc6nekvpsrlxqtoa3kruvp24b3vx7lo6mtpnh32a&w=256&q=50">
                    </div>
                    <div class="reviewer-meta">
                        <span class="reviewer-name">Bob</span> <span>left a review to </span><span class="review-to">Kusama Dragons</span>
                    </div>
                </div>
                <div class="review-content">
                    <div class="reviewer-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure incidunt atque saepe voluptas laborum repellendus, ipsam temporibus quos commodi inventore necessitatibus? Dolorem itaque amet quibusdam recusandae quos iste placeat voluptates?</div>
                    <div class="review-likes">
                        <div class="review-thumbs-up">👍 10</div>
                        <div class="review-thumbs-down">👎 3</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Widget_LastReviews'
}
</script>