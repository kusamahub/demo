<!-- Widget: Kusama Price -->
<!-- Shows current Kusama price in different currencies with simple price chart -->
<!-- Wiki:  -->
<template>
    <div class="widget">
        <div class="widget-header">
            <div class="widget-title"><img src="@/static/images/icons/icon-price.svg">Kusama Price</div>
            <div class="widget-menu-container">
                <div class="widget-menu">USD <i class="material-icons">keyboard_arrow_down</i></div>
                <div class="widget-menu-dropdown">
                </div>
            </div>
        </div>
        <div class="widget-content">
            <div class="widget-kusama-price">
                <div class="widget-kusama-price-value">
                    <div>92 <span class="widget-kusama-price-value-symbol">$</span></div>
                </div>
                <div class="widget-kusama-price-graph">
                    <canvas ref="chart"></canvas>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Chart } from 'chart.js/auto';

export default {

    name: 'Widget_KusamaPrice',

    data() {
        return {

            chartData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'Kusama Price',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: true,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1,
                }, ],
            },

        }
    },

    methods: {

    },

    mounted() {

        const ctx = this.$refs.chart.getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: this.chartData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                animation: false,
                scales: {
                    y: { display: false },
                    x: { display: false }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                }
            },
        });

    },

}
</script>