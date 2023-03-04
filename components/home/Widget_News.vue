<!-- Widget: News -->
<!-- Shows latest news from KusamaHub or Kusama Blog -->
<!-- Wiki:  -->
<template>
    <div class="widget">
        <div class="widget-header">
            <router-link to="/news">
                <div class="widget-title"><img src="@/static/images/icons/icon-news.svg">News</div>
            </router-link>
            <div class="widget-menu-container">
                <div class="widget-menu" ref="menuContainer" @click="toggleMenu">{{ selectedItem }} <i class="material-icons">keyboard_arrow_down</i></div>
                <div class="widget-menu-dropdown" ref="menu" v-if="isMenuOpen">
                    <div class="widget-menu-dropdown-item" v-for="item in items" :key="item" @click="selectItem(item)">{{ item }}</div>
                </div>
            </div>
        </div>
        <div class="widget-content widget-scrollable">
            <div class="widget-news-block">
                <div class="widget-news-title">News title</div>
                <div class="widget-news-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et dolore ratione, nemo, cum fuga, provident rerum reprehenderit quas voluptates labore blanditiis eligendi quo omnis totam rem eos mollitia ipsa ab.</div>
                <div class="widget-news-source">Source: newssource</div>
            </div>
            <div class="widget-news-block">
                <div class="widget-news-title">News title</div>
                <div class="widget-news-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et dolore ratione, nemo, cum fuga, provident rerum reprehenderit quas voluptates labore blanditiis eligendi quo omnis totam rem eos mollitia ipsa ab.</div>
                <div class="widget-news-source">Source: newssource</div>
            </div>
            <div class="widget-news-block">
                <div class="widget-news-title">News title</div>
                <div class="widget-news-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et dolore ratione, nemo, cum fuga, provident rerum reprehenderit quas voluptates labore blanditiis eligendi quo omnis totam rem eos mollitia ipsa ab.</div>
                <div class="widget-news-source">Source: newssource</div>
            </div>
            <div class="widget-news-block">
                <div class="widget-news-title">News title</div>
                <div class="widget-news-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et dolore ratione, nemo, cum fuga, provident rerum reprehenderit quas voluptates labore blanditiis eligendi quo omnis totam rem eos mollitia ipsa ab.</div>
                <div class="widget-news-source">Source: newssource</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Widget_News',
    data() {
        return {
            newsList: [],
            isMenuOpen: false,
            selectedItem: 'Crypto',
            items: ['Crypto', 'KusamaHub'],
        };
    },

    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        selectItem(item) {
            this.selectedItem = item;
            this.isMenuOpen = false;
        },
        handleOutsideClick(event) {
            if (this.isMenuOpen && !this.$refs.menu.contains(event.target) && !this.$refs.menuContainer.contains(event.target)) {
                this.isMenuOpen = false;
            }
        },
        handleEscKey(event) {
            if (event.key === 'Escape') {
                this.isMenuOpen = false;
            }
        },
    },

    mounted() {
        document.addEventListener('click', this.handleOutsideClick);
        document.addEventListener('keydown', this.handleEscKey);

    },

    beforeDestroy() {
        document.removeEventListener('click', this.handleOutsideClick);
        document.removeEventListener('keydown', this.handleEscKey);
    },

};
</script>