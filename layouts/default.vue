<template>
    <div>
        <div class="navbar">
            <div class="container">
                <div class="navbar--brand">
                    <img src="/logo-navbar.png" alt="GlitchDZN Logo">
                    <span>GlitchDZN</span>
                </div>
                <ul class="navbar--links">
                    <li class="navbar--item">
                        <button class="button button-primary" @click="showContact = true">Contact Me</button>
                    </li>
                </ul>
            </div>
        </div>
        <Nuxt />
        <modal :show="showContact" @close="showContact = false">
            <div>
                <h5>Interested in hiring me?</h5>
                <p class="subtitle">Contact me in any methods below:</p>
                <div class="card card-vertical">
                    <img width="50" src="/discord-logo.svg" alt="Discord Logo">
                    <div class="card-content">
                        Glitch#2011
                    </div>
                </div>
                <div class="card card-vertical">
                    <img width="40" src="/skype-icon.svg" alt="Skype Logo" style="margin: .5rem 14px .5rem .5rem;">
                    <div class="card-content">
                        live:binstampos
                    </div>
                </div>
            </div>
        </modal>
    </div>
</template>

<script>
import Modal from '@/components/Modal'

export default {
    components: { Modal },
    data () {
        return {
            showContact: false
        }
    }
}
</script>

<style scoped lang="scss">
.navbar {
    font-size: 18px;
    padding: 2rem 0;
    margin-bottom: 1rem;
    > .container {
        display: flex;
        align-items: center;
    }
    .navbar--brand {
        img {
            vertical-align: middle;
            margin-right: 10px;
        }
    }
    .navbar--links, .navbar--item a {
        margin: 0;
    }
    .navbar--links {
        margin-left: auto;
    }
    .navbar--item {
        list-style: none;
        margin: 0;
    }
}
@media (max-width: 425px) {
    .navbar--brand span { display: none; }
}
</style>
