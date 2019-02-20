<template>
    <div>
        <v-header />
        <div class="container" ref="container">
            <div class="container__content" id="home">
                <nuxt/>
            </div>
            <div class="container__footer">
                <v-footer />
            </div>
        </div>
    </div>
</template>
<script>
    import vHeader from '~/components/layout/Page/Header.vue'
    import vFooter from '~/components/layout/Page/Footer.vue'

    export default {
        components: {
            vHeader,
            vFooter,
        },
    }
</script>

<style lang="scss">
    .container {
        position: relative;
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 100vw;
        overflow: scroll;
        scroll-behavior: smooth;
        &__content {
            flex: 1 0 auto;
        }
        &__footer {
            flex-shrink: 0;
        }
    }
</style>

