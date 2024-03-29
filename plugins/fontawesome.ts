import { library, config } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faArrowLeft, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

config.autoAddCss = false;

library.add(faArrowLeft, faArrowDown, faGithub);

export default defineNuxtPlugin((nuxtApp) =>{
    nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon);
})
