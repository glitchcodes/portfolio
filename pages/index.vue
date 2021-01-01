<template>
    <div class="homepage container">
        <div class="row">
            <div class="column">
                <div>
                    <h3 class="lead">Vincent Tampos</h3>
                    <p class="subtitle">Web Developer</p>
                    <blockquote>
                        <p>
                            <em>
                                Hello! I'm a freelance and self-taught website developer. Experienced user on Laravel
                                and VueJs. Passionate to learn more technologies
                            </em>
                        </p>
                    </blockquote>
                    <nuxt-link to="/portfolio" class="button button-secondary">View Portfolio</nuxt-link>
                </div>
            </div>
            <transition name="slide-right" mode="out-in">
                <div v-if="show" class="column column-34 column-offset-10"></div>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    transition: {
        name: 'slide-right',
        mode: 'out-in'
    },
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

<style scoped lang="scss">
    .homepage {
        .row {
            align-items: center;
            height: calc(100vh - 10rem);
        }
        .column {
            height: 45rem;
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
    @media (max-width: 639px) {
        .homepage .column:nth-child(2) {
            display: none;
        }
    }
</style>
