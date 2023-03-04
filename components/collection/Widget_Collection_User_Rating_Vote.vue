<!-- Widget: User Rating for Collection Vote -->
<!-- User voting widget for current collection -->
<!-- Wiki:  -->
<template>
    <div class="widget">
        <div class="widget-header">
            <div class="widget-title"><img src="@/static/images/icons/icon-vote.svg">Vote</div>
        </div>
        <div class="widget-content">
            <div class="votes-container">
                <div class="vote-up">
                    <div class="vote-symbol">👍</div>
                    <div class="vote-count">Up!</div>
                </div>
                <div class="vote-down">
                    <div class="vote-symbol">👎</div>
                    <div class="vote-count">Down!</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Widget_Collection_User_Rating_Vote'
}
</script>