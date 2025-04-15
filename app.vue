<template>
    <NuxtLoadingIndicator />
    <nav class="navbar">
        <div class="container">

            <nuxt-link to="/" class="navbar--brand">
                <img src="/logo-navbar.png" alt="GlitchDZN Logo">
            </nuxt-link>

            <ul class="navbar--links">
                <li class="navbar--item">
                    <a href="#" class="button button-primary" @click="toggleContact(true)">Contact Me</a>
                </li>
            </ul>

        </div>
    </nav>

    <NuxtPage />

    <div class="container" style="margin-top: 4rem;">
        <footer>
            <div class="flex align-items-center justify-content-between">
                <div>
                    <p style="margin-bottom: 0;">Vincent Paul Tampos &copy; {{ currentYear }}</p>
                    <p style="margin-bottom: 0;">This website is <a href="https://github.com/glitchcodes/portfolio" target="_blank">open-source</a></p>
                </div>
                <div class="icon-links">
                    <a href="https://github.com/glitchcodes" target="_blank">
                        <client-only>
                            <font-awesome-icon :icon="['fab', 'github']" />
                        </client-only>
                        <div class="sr-only">
                            Github
                        </div>
                    </a>
                </div>
            </div>
        </footer>
    </div>

    <Transition name="fade">
        <Modal v-if="showContact" id="contact-modal" @close-modal="toggleContact(false)">
            <h5>Interested?</h5>

            <p class="subtitle">
                Contact me in any of the platforms below
            </p>

            <a href="https://www.linkedin.com/in/vincent-paul-tampos/" target="_blank" class="card card-vertical">
                <img width="50" src="/linkedin-logo.png" alt="LinkedIn Logo" style="padding: 8px">
                <div class="card-content flex align-items-center flex-grow">
                    <span class="flex-grow">Vincent Paul Tampos</span>
                    <client-only>
                        <font-awesome-icon :icon="['fas', 'arrow-up-right-from-square']" />
                    </client-only>
                </div>
            </a>

            <div class="card card-vertical" @click="copyToClipboard('discord')">
                <img width="50" src="/discord-logo.svg" alt="Discord Logo" style="padding: 8px">
                <div class="card-content flex align-items-center flex-grow">
                    <transition name="fade" mode="out-in">
                        <span v-if="!isDiscordCopied" class="flex-grow">glitchzyu</span>
                        <span v-else class="flex-grow">Copied to clipboard!</span>
                    </transition>

                    <client-only>
                        <font-awesome-icon v-if="!isDiscordCopied" :icon="['fas', 'copy']" />
                        <font-awesome-icon v-else :icon="['fas', 'circle-check']" />
                    </client-only>
                </div>
            </div>

            <div class="card card-vertical" @click="copyToClipboard('email')">
                <img width="40" src="/email-icon.png" alt="Email Logo" style="margin: .5rem 14px .5rem .5rem;">
                <div class="card-content  flex align-items-center flex-grow">
                    <transition name="fade" mode="out-in">
                        <span v-if="!isEmailCopied" class="flex-grow">binstampos@gmail.com</span>
                        <span v-else class="flex-grow">Copied to clipboard!</span>
                    </transition>
                    <client-only>
                        <font-awesome-icon :icon="['fas', 'copy']" />
                    </client-only>
                </div>
            </div>

        </Modal>
    </Transition>

</template>

<script lang="ts" setup>
const showContact = ref(false);
const isDiscordCopied = ref(false);
const isEmailCopied = ref(false);

const currentYear = ref(new Date().getFullYear())

const toggleContact = (type: boolean) => {
    showContact.value = type;
}

const copyToClipboard = async (type: string) => {
    let text = "";
    switch (type) {
        case "discord":
            text = "glitchzyu";
            isDiscordCopied.value = true;
            break;
        case "email":
            text = "binstampos@gmail.com";
            isEmailCopied.value = true;
            break;
    }

    try {
        await navigator.clipboard.writeText(text);
        setTimeout(() => {
            isDiscordCopied.value = false;
            isEmailCopied.value = false;
        }, 1000)
    } catch (err) {
        alert('Cannot copy to clipboard')
    }
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
