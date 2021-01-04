<template>
    <transition name="fade">
        <div v-show="show" class="modal--mask" @click="close">
            <div class="modal--container" @click.stop>
                <slot />
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'Modal',
    props: {
        show: {
            type: Boolean,
            required: true
        }
    },
    data () {
        return {
            //
        }
    },
    mounted () {
        document.addEventListener('keydown', (e) => {
            if (this.show && (e.key === 'Escape')) {
                this.close()
            }
        })
    },
    methods: {
        close () {
            this.$emit('close')
        }
    }
}
</script>

<style scoped lang="scss">
    .modal--mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        transition: opacity .3s ease;
    }
    .modal--container {
        margin: 40px auto 0;
        padding: 20px 30px;
        background-color: rgb(14, 19, 31);
        border: 1px solid rgb(56, 64, 95);
        border-radius: 1rem;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
    }
    .fade-enter {
        opacity: 0;
    }
    .fade-leave-active {
        opacity: 0;
    }
    .fade-enter .modal-container,
    .fade-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
    @media (max-width: 425px) {
        .modal--container { width: 300px; }
    }
    @media (min-width: 426px) {
        .modal--container { width: 400px; }
    }
</style>
