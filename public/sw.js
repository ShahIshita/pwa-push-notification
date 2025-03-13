self.addEventListener("install", (event) => {
  console.log("Service Worker Installed");
});

self.addEventListener(
  "notificationclick",
  (event) => {
    console.log("Notification clicked:", event);

    event.notification.close();

    if (event.action === "open_vue") {
      console.log("Open URL action triggered");
      event.waitUntil(
        clients
          .matchAll({
            type: "window",
          })
          .then((clientList) => {
            for (const client of clientList) {
              if (client.url === "https://vuejs.org/" && "focus" in client) return client.focus();
            }
            if (clients.openWindow) return clients.openWindow("https://vuejs.org/");
          }),
      );
    } else {
      console.log("No specific action, default behavior");
    }
  }
);

// self.addEventListener("notificationclick", (event) => {
//   console.log("Notification clicked", event);

//   if (event.action === "open-docs") {
//     clients.openWindow("https://vuejs.org/");
//   }

//   event.notification.close();
// });
