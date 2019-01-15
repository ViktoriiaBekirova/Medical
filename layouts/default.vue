<template>
    <div>
        <v-header />
        <div class="container">
            <div class="container__content">
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
        min-height: 100vh;
        width: 100vw;
        &__content {
            flex: 1 0 auto;
        }
        &__footer {
            flex-shrink: 0;
        }
    }
</style>

