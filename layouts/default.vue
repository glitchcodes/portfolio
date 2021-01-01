<template>
    <div>
        <div class="navbar">
            <div class="container">
                <div class="navbar--brand">Glitch</div>
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
    padding: 1rem;
    margin-bottom: 1rem;
    > .container {
        display: flex;
        align-items: center;
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
</style>
