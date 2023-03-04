<!-- Element: Header -->
<!-- Main Header element for all pages -->
<!-- Wiki:  -->
<template>
    <div class="header">
        <div class="header-container">
            <router-link to="/">
                <div class="header-logo">
                    <div class="header-logo-image"><img src="@/static/kusamahub_logo_light.svg"></div>
                    <div class="header-status-image"><img src="@/static/demo_icon.svg"></div>
                </div>
            </router-link>
            <div class="header-menu">
                <div class="main-menu-button" ref="settingsMenuContainer" @click="toggleMenu('settingsMenu')"><span class="material-icons">settings</span></div>
                <div ref="settingsMenu" v-if="isMenuOpen('settingsMenu')" class="dropdown-menu">
                    <router-link to="/user/_id">
                        <div class="dropdown-menu-item"><span class="material-icons">person</span>Your Personal Page</div>
                    </router-link>
                    <div class="dropdown-menu-item"><span class="material-icons">tune</span>Customize Main Page</div>
                    <div class="dropdown-menu-item"><span class="material-icons">hide_source</span>Show Hidden Widgets</div>
                    <div class="dropdown-menu-item"><span class="material-icons">settings_brightness</span>Change Theme</div>
                    <div class="dropdown-menu-item"><span class="material-icons">logout</span>Logout</div>
                    <div class="dropdown-menu-item"><span class="material-icons">help_outline</span>KusamaHub User Guide</div>
                    <div class="dropdown-menu-item"><span class="material-icons">report</span>About Demo</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Main_Header',
    data() {
        return {
            openMenu: null,
        }
    },

    methods: {
        toggleMenu(menuName) {
            this.openMenu = this.openMenu === menuName ? null : menuName;
        },

        isMenuOpen(menuName) {
            return this.openMenu === menuName;
        },

        selectItem(item) {
            this.selectedItem = item;
            this.isMenuOpen = false;

        },

        handleOutsideClick(event) {
            if (this.openMenu && !this.$refs[this.openMenu].contains(event.target) && !this.$refs[`${this.openMenu}Container`].contains(event.target)) {
                this.openMenu = null;
            }
        },

        handleEscKey(event) {
            if (event.key === 'Escape') {
                this.openMenu = null;
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


}
</script>