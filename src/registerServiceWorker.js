// src/registerServiceWorker.js
import { registerSW } from 'virtual:pwa-register';

const updateSW = registerSW({
  onNeedRefresh() {
    // will execute when user get stable internet
  },
  onOfflineReady() {
    // will execute when user lost internet connection
  },
});
