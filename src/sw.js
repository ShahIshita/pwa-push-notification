self.addEventListener("install", (event) => {
  console.log("Service Worker Installed");
});

self.addEventListener("notificationclick", (event) => {
  console.log("Notification clicked", event);

  if (event.action === "open_vue") {
    clients.openWindow("https://vuejs.org/");
  }

  event.notification.close();
});
