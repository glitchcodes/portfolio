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
                        <a href="#" class="button button-primary" @click="showContact = true">Contact Me</a>
                    </li>
                </ul>
            </div>
        </div>
        <Nuxt />
        <modal :show="showContact" @close="showContact = false">
            <div>
                <h5>Interested?</h5>
                <p class="subtitle">Contact me in any methods below:</p>
                <div class="card card-vertical" @click="copyContact('discord-contact')">
                    <img width="50" src="/discord-logo.svg" alt="Discord Logo">
                    <transition name="fade" mode="out-in">
                        <div :key="discord" class="card-content">
                            {{ discord }}
                        </div>
                    </transition>
                    <input id="discord-contact" type="hidden" value="Glitch#2011">
                </div>
                <div class="card card-vertical" @click="copyContact('skype-contact')">
                    <img width="40" src="/skype-icon.svg" alt="Skype Logo" style="margin: .5rem 14px .5rem .5rem;">
                    <transition name="fade" mode="out-in">
                        <div :key="skype" class="card-content">
                            {{ skype }}
                        </div>
                    </transition>
                    <input id="skype-contact" type="hidden" value="live:binstampos">
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
            showContact: false,
            discord: 'Glitch#2011',
            skype: 'live:binstampos'
        }
    },
    methods: {
        copyContact (value) {
            const text = document.querySelector('#' + value)
            text.setAttribute('type', 'text')
            text.select()

            try {
                document.execCommand('copy')
                if (value === 'discord-contact') {
                    this.discord = 'Copied to clipboard!'
                    setTimeout(() => {
                        this.discord = 'Glitch#2011'
                    }, 3000)
                } else if (value === 'skype-contact') {
                    this.skype = 'Copied to clipboard!'
                    setTimeout(() => {
                        this.skype = 'live:binstampos'
                    }, 3000)
                }
            } catch (err) {
                alert('Cannot copy to clipboard')
            }

            text.setAttribute('type', 'hidden')
            window.getSelection().removeAllRanges()
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
