import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then((registration) => {
      console.log("Service Worker registered successfully:", registration);
    })
    .catch((error) => {
      console.log("Service Worker registration failed:", error);
    });
}

createApp(App).mount("#app");
