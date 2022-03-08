import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store";
import 'mock/index.js'

const app = createApp(App);
app.use(router);
// 将 store 实例作为插件安装
app.use(store)
app.mount("#app");
