<template>
    <div class="container">
        <div class="landing row">
            <div class="column">
                <div>
                    <h3 class="lead">Vincent Tampos</h3>
                    <p class="subtitle">Web Developer</p>
                    <blockquote>
                        <p>
                            <em>
                                Hello! I'm a {{ myAge }}-year old fullstack web developer based on Philippines. Experienced developer on Laravel
                                and VueJs. Currently pursuing Information Technology as my studies on college.
                            </em>
                        </p>
                    </blockquote>
                    <nuxt-link to="/portfolio" class="button button-secondary">View Portfolio</nuxt-link>
                </div>
            </div>

            <div class="column column-34 column-offset-10">
                <div class="icon vue" data-value="-2">
                    <img src="/vuejs-logo.svg" alt="Vue.js Logo" />
                </div>
                <div class="icon laravel" data-value="5">
                    <img src="/laravel-logo.svg" alt="Laravel Logo" />
                </div>
                <div class="icon php" data-value="1">
                    <img src="/php-logo.svg" alt="PHP Logo" />
                </div>
                <div class="icon nuxt" data-value="1">
                    <img src="/nuxt-logo.png" alt="Nuxt Logo" />
                </div>
            </div>
        </div>

        <div class="flex justify-content-center">
            <a class="more-info" href="#about-me">
                <span>More Info</span>
                <client-only>
                    <font-awesome-icon :icon="['fas', 'arrow-down']" />
                </client-only>
            </a>
        </div>

        <h2 style="margin-bottom: 4rem;" id="about-me">About me</h2>

        <div class="row" style="align-items: center">
            <div class="tech-stack column">
                <div class="flex">
                    <div class="icon">
                        <img src="/vuejs-logo.svg" alt="Vue.js Logo" />
                    </div>
                    <div class="icon">
                        <img src="/nuxt-logo.png" alt="Nuxt Logo" />
                    </div>
                    <div class="icon">
                        <img src="/php-logo.svg" alt="PHP Logo" />
                    </div>
                    <div class="icon">
                        <img src="/laravel-logo.svg" alt="Laravel Logo" />
                    </div>
                </div>
                <div class="flex" style="margin: 2rem 0;">
                    <div class="icon">
                        <img src="/javascript-logo.svg" alt="Javascript Logo" />
                    </div>
                    <div class="icon">
                        <img src="/typescript-logo.svg" alt="Typescript Logo" />
                    </div>
                    <div class="icon">
                        <img src="/linux-logo.svg" alt="Linux Logo" />
                    </div>
                    <div class="icon">
                        <img src="/MySQL-logo.svg" alt="MySQL Logo" />
                    </div>
                </div>
                <div class="icon">
                    <img src="/supabase-logo.webp" alt="Supabase Logo" />
                </div>
            </div>
            <div class="column">
                <p>
                    I really liked building stuff that interests me. I was into creating small game servers so that led
                    me to learn more about computers and because of that, I learned on how to manage server resources,
                    manage databases, and use cloud solutions such as OVHCloud for VPS and Azure.
                </p>
                <p style="margin-bottom: 0;">
                    Eventually that to led me to learn programming which I really enjoyed more. I am now taking
                    Information Technology as my college course to learn more about management and to improve my tech
                    stack.
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
useHead({
    title: "Homepage",
    meta: [
        { name: 'description', content: 'Production-ready websites with ease' },
        { property: 'og:title', content: 'Homepage - GlitchDZN' },
        { property: 'og:description', content: 'Production-ready websites with ease' }
    ]
});

// Calculate my age
const myAge = computed(() => {
    return Math.floor((new Date().valueOf() - new Date("2002-09-11").getTime()) / 3.15576e+10);
})

</script>

<style lang="scss" scoped>
.landing {
    &.row {
        align-items: center;
        height: calc(100vh - 20rem);
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
            //background: rgb(56, 64, 95);
            border-radius: 1rem;
            margin-right: 1rem;
            position: relative;
        }
    }
    .icon {
        animation-duration: 0.8s;
        animation-timing-function: ease-in-out;
        transition: 0.3s;

        position: absolute;
        top: 50%;
        left: 50%;
        &:hover {
            box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        }
        &.vue {
            animation-name: onLoadVueAnimation;
            transform: translate(-100%, -215%);
        }
        &.laravel {
            animation-name: onLoadLaravelAnimation;
            transform: translate(80%, -90%);
        }
        &.php {
            animation-name: onLoadPHPAnimation;
            transform: translate(-175%, -10%);
        }
        &.nuxt {
            animation-name: onLoadNuxtAnimation;
            transform: translate(-5%, 115%);
        }
    }
}

.flex {
    justify-content: space-between;
}

.icon img {
    background-color: var(--bg-primary);
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    display: inline-block;
    line-height: 0;
    padding: 10px;
    width: 70px;
    height: 70px;
}

.tech-stack {
    margin-bottom: 3rem;
}

.more-info {
    color: var(--text-primary);
    border: 2px solid var(--bg-primary);
    border-radius: 20px;
    padding: 0.5rem 1.5rem;
    margin-bottom: 3.5rem;
    &:hover {
        cursor: pointer;
    }
    span {
        margin-right: 1rem;
    }
}

@media (min-width: 40.0rem) {
    .landing.row {
        height: calc(100vh - 15rem);
    }
    .tech-stack {
        padding-right: 3rem!important;
        margin-bottom: 0;
    }
}

@media (max-width: 639px) {
    .landing .column:nth-child(2) {
        display: none;
    }
}

// Animation
@keyframes onLoadVueAnimation {
    0% {
        transform: translate(-50%, -50%);
        opacity: 25%;
    }
    100% {
        transform: translate(-100%, -215%);
        opacity: 100%;
    }
}

@keyframes onLoadLaravelAnimation {
    0% {
        transform: translate(-50%, -50%);
        opacity: 25%;
    }
    100% {
        transform: translate(80%, -90%);
        opacity: 100%;
    }
}

@keyframes onLoadPHPAnimation {
    0% {
        transform: translate(-50%, -50%);
        opacity: 25%;
    }
    100% {
        transform: translate(-175%, -10%);
        opacity: 100%;
    }
}

@keyframes onLoadNuxtAnimation {
    0% {
        transform: translate(-50%, -50%);
        opacity: 25%;
    }
    100% {
        transform: translate(-5%, 115%);
        opacity: 100%;
    }
}

</style>
