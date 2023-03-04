<!-- Widget: Collection Calendar -->
<!-- Show calenadar events, where Collection ID is host of event / guest of event -->
<!-- Wiki:  -->
<template>
    <div class="widget">
        <div class="widget-header">
            <div class="widget-title"><img src="@/static/images/icons/icon-calendar.svg">Calendar</div>
        </div>
        <div class="widget-content">
            <div class="calendar-event">
                <div class="calendar-event-name">New event</div>
                <div class="calendar-event-date">28 Feb, 09:00</div>
            </div>
            <div class="calendar-event">
                <div class="calendar-event-name">New event</div>
                <div class="calendar-event-date">28 Feb, 09:00</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Widget_Collection_Calendar',
}
</script>