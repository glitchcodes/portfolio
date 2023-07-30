<template>
    <nav class="navbar">
        <div class="container">

            <div class="navbar--brand">
                <img src="/logo-navbar.png" alt="GlitchDZN Logo">
                <span>GlitchDZN</span>
            </div>

            <ul class="navbar--links">
                <li class="navbar--item">
                    <a href="#" class="button button-primary" @click="toggleContact(true)">Contact Me</a>
                </li>
            </ul>

        </div>
    </nav>

    <NuxtPage />

    <Transition name="fade">
        <Modal v-if="showContact" id="contact-modal" @close-modal="toggleContact(false)">
            <h5>Interested?</h5>

            <p class="subtitle">
                Contact me in any of the methods below. Click to copy to your clipboard.
            </p>

            <div class="card card-vertical" @click="copyToClipboard('discord-contact')">
                <img width="50" src="/discord-logo.svg" alt="Discord Logo">
                <transition name="fade" mode="out-in">
                    <div :key="discord" class="card-content">
                        {{ discord }}
                    </div>
                </transition>
                <input id="discord-contact" type="hidden" value="glitchzyu">
            </div>

            <div class="card card-vertical" @click="copyToClipboard('email-contact')">
                <img width="40" src="/email-icon.png" alt="Email Logo" style="margin: .5rem 14px .5rem .5rem;">
                <transition name="fade" mode="out-in">
                    <div :key="email" class="card-content">
                        {{ email }}
                    </div>
                </transition>
                <input id="email-contact" type="hidden" value="binstampos@gmail.com">
            </div>

        </Modal>
    </Transition>

</template>

<script lang="ts" setup>
const showContact = ref(false);
const discord = ref('glitchzyu');
const email = ref('binstampos@gmail.com');

const toggleContact = (type: boolean) => {
    showContact.value = type;
}

const copyToClipboard = (type: string) => {
    const text = document.querySelector('#' + type) as HTMLInputElement;
    text.setAttribute('type', 'text');
    text.select()

    try {
        // Still supported across many major browsers
        document.execCommand('copy')

        if (type === 'discord-contact') {
            discord.value = 'Copied to clipboard!'
            setTimeout(() => {
                discord.value = 'glitchzyu'
            }, 1000)
        } else if (type === 'email-contact') {
            email.value = 'Copied to clipboard!'
            setTimeout(() => {
                email.value = 'binstampos@gmail.com'
            }, 1000)
        }
    } catch (err) {
        alert('Cannot copy to clipboard')
    }

    text.setAttribute('type', 'hidden')
    window.getSelection()!.removeAllRanges()
}
</script>

<style lang="scss" scoped>
.navbar {
  font-size: 18px;
  padding: 2rem 0;
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
#contact-modal .card:hover {
    cursor: pointer;
}
@media (max-width: 425px) {
  .navbar--brand span { display: none; }
}
</style>