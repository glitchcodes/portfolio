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
                        <a class="button button-primary" href="#">Contact Me</a>
                    </li>
                </ul>
            </div>
        </div>
        <Nuxt />
    </div>
</template>

<style scoped lang="scss">
.navbar {
    font-size: 18px;
    padding: 2rem 1rem;
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
