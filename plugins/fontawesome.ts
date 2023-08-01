import { library, config } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faArrowLeft, faArrowDown } from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false;

library.add(faArrowLeft, faArrowDown);

export default defineNuxtPlugin((nuxtApp) =>{
    nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon);
})
