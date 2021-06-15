import Vue from "vue";

// Importing the components
import App from "./App.vue";
import Layout from "./Components/Layout";

import "./styles/main.scss";

new Vue({
  el: "#app",
  render: h => h(Layout)
});
