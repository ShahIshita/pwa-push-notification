// src/registerServiceWorker.js
import { registerSW } from 'virtual:pwa-register';

const updateSW = registerSW({
  onNeedRefresh() {
    // prompt user to refresh the page
  },
  onOfflineReady() {
    // inform the user that they can now use the app offline
  },
});
