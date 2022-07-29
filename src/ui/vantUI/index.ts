import { App } from 'vue'
import { Button, Sidebar,Calendar  } from 'vant'
const vant = {
  install: function (Vue: App) {
    Vue.use(Button)
    Vue.use(Sidebar)
    Vue.use(Calendar)
  }
}
export default vant
