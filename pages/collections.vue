<!-- Page: Collections -->
<!-- All collections page -->
<!-- Wiki:  -->
<template>
    <div>
        <Main_Header />
        <div class="content">
            <Collections_Page />
        </div>
        <Main_Footer />
    </div>
</template>
<script>
import Collections_Page from '~/components/collections/Collections_Page.vue';
import Main_Header from '~/components/header/Main_Header.vue';
import Main_Footer from '~/components/footer/Main_Footer.vue';

export default {
    components: { Collections_Page, Main_Header, Main_Footer },
}
</script>