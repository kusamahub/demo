<!-- Widget: Collection Chart - Floor Price -->
<!-- Chart with collection's floor price -->
<!-- Wiki:  -->
<template>
    <div class="widget">
        <div class="widget-header">
            <div class="widget-title"><img src="@/static/images/icons/icon-chart.svg">Floor price</div>
            <div class="widget-menu">Widget Menu<i class="material-icons">keyboard_arrow_down</i></div>
        </div>
        <div class="widget-content">
            <div>
                <canvas ref="chart"></canvas>
            </div>
        </div>
    </div>
</template>
<script>
import Chart from 'chart.js/auto';

export default {
    name: 'Widget_Collection_Graph_MostAvarage',

    data() {
        return {
            chartData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'Most Average',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1,
                }, ],
            },
        }
    },

    mounted() {
        const ctx = this.$refs.chart.getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: this.chartData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
            },
        });
    }
}
</script>