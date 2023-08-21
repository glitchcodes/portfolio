<template>
    <div class="modal--mask" @click="closeModal">
        <div class="modal--container" @click.stop>
            <slot />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";

const emit = defineEmits(['close-modal']);

const props = defineProps({
    show: Boolean
});

onMounted(() => {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal()
        }
    })
});

const closeModal = () => {
    emit('close-modal');
}
</script>

<style lang="scss" scoped>
.modal--mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    transition: opacity 0.3s ease;
    cursor: pointer;
}

.modal--container {
    margin: 40px auto 0;
    padding: 20px 30px;
    background-color: var(--bg-secondary);
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;

    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    cursor: auto;
}

@media (max-width: 425px) {
    .modal--container {
        width: 90vw;
    }
}

@media (min-width: 426px) {
    .modal--container {
        width: 400px;
    }
}
</style>
