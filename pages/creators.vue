<template>
    <div>
        <Main_Header />
        <div class="content">
            <Creators_Page />
        </div>
        <Main_Footer />
    </div>
</template>
<script>
import Creators_Page from '~/components/creators/Creators_Page.vue';
import Main_Header from '~/components/header/Main_Header.vue';
import Main_Footer from '~/components/footer/Main_Footer.vue';

export default {

    components: { Creators_Page, Main_Header, Main_Footer },

}
</script>