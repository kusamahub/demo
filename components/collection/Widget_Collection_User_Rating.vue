<!-- Widget: User Rating for Colletion -->
<!-- Users rating for current collection -->
<!-- Wiki:  -->
<template>
    <div class="widget">
        <div class="widget-header">
            <div class="widget-title"><img src="@/static/images/icons/icon-userrating.svg">User Rating</div>
            <div class="widget-button"><span class="material-icons">help_outline</span></div>
        </div>
        <div class="widget-content">
            <div class="votes-container">
                <div class="vote-up">
                    <div class="vote-symbol">👍</div>
                    <div class="vote-count">1002</div>
                </div>
                <div class="vote-down">
                    <div class="vote-symbol">👎</div>
                    <div class="vote-count">4</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Widget_Collection_User_Rating',

}
</script>