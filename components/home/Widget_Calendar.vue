<!-- Widget: Calendar -->
<!-- Main calendar widget, which contains all events from KusamaHub for current date with 3 priority -->
<!-- Wiki:  -->
<template>
    <div class="widget-row-1">
        <div class="widget">
            <div class="widget-header">
                <router-link to="/calendar">
                    <div class="widget-title"><img src="@/static/images/icons/icon-calendar.svg">Calendar</div>
                </router-link>
            </div>
            <div class="widget-content">
                <div class="calendar-events">
                    <div class="calendar-event">
                        <div class="calendar-event-name">New event</div>
                        <div class="calendar-event-date">28 Feb, 09:00</div>
                    </div>
                    <div class="calendar-event">
                        <div class="calendar-event-name">New event</div>
                        <div class="calendar-event-date">28 Feb, 09:00</div>
                    </div>
                    <div class="calendar-event">
                        <div class="calendar-event-name">New event</div>
                        <div class="calendar-event-date">28 Feb, 09:00</div>
                    </div>
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
        </div>
    </div>
</template>
<script>
export default {
    name: 'Widget_Calendar',
}
</script>