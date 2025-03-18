self.addEventListener("install", (event) => {
  // The "install" event is triggered when the Service Worker is first installed.
  console.log("Service Worker Installed");
});

// The "notificationclick" event fires when the user clicks on a notification.
self.addEventListener("notificationclick", (event) => {
  console.log("Notification clicked", event);

  if (event.action === "open_vue") {
    clients.openWindow("https://vuejs.org/");
  }

  event.notification.close(); // Close the notification after it's clicked
});
