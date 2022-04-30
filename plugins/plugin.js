import { defineNuxtPlugin } from '#app'
import { createVuetify } from 'vuetify'
import * as appAll from 'vuetify/components'
import '@mdi/font/css/materialdesignicons.css' //ここを追加する
import 'v-calendar/dist/style.css';



export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
	  components: {
      ...appAll
    }
  })
  nuxtApp.vueApp.use(vuetify)
})