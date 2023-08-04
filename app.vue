<template>
    <NuxtLoadingIndicator />
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

    <div class="container" style="margin-top: 4rem;">
        <footer>
            <span>
                GlitchDZN &copy; {{ currentYear }}
            </span>
            <span class="float-right">
                This website is <a href="https://github.com/glitchcodes/portfolio" target="_blank">open-source</a>
            </span>
        </footer>
    </div>

    <Transition name="fade">
        <Modal v-if="showContact" id="contact-modal" @close-modal="toggleContact(false)">
            <h5>Interested?</h5>

            <p class="subtitle">
                Contact me in any of the methods below. Click to copy to your clipboard.
            </p>

            <div class="card card-vertical" @click="copyToClipboard('discord')">
                <img width="50" src="/discord-logo.svg" alt="Discord Logo">
                <div class="card-content">
                    <transition name="fade" mode="out-in">
                        <span v-if="!isDiscordCopied">glitchzyu</span>
                        <span v-else>Copied to clipboard!</span>
                    </transition>
                </div>
            </div>

            <div class="card card-vertical" @click="copyToClipboard('email')">
                <img width="40" src="/email-icon.png" alt="Email Logo" style="margin: .5rem 14px .5rem .5rem;">
                <div class="card-content">
                    <transition name="fade" mode="out-in">
                        <span v-if="!isEmailCopied">binstampos@gmail.com</span>
                        <span v-else>Copied to clipboard!</span>
                    </transition>
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
