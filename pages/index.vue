<template>
    <div class="homepage container">
        <div class="row">
            <div class="column">
                <div>
                    <h3 class="lead">Vincent Tampos</h3>
                    <p class="subtitle">Web Developer</p>
                    <blockquote>
                        <p><em>Production-ready websites with ease</em></p>
                    </blockquote>
                </div>
            </div>
            <transition name="slide-right" mode="out-in">
                <div v-if="show" class="column"></div>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            show: false
        }
    },
    mounted () {
        this.show = true
    }
}
</script>

<style lang="scss">
    .homepage {
        .column {
            height: calc(100vh - 10rem);
            &:first-child {
                display: flex;
                align-items: center;
                .lead { margin-bottom: 0; }
                .subtitle { color: rgb(139, 147, 156); }
            }
            &:nth-child(2) {
                background: rgb(56, 64, 95);
                border-radius: 1rem;
                margin-right: 1rem;
            }
        }
    }
</style>
