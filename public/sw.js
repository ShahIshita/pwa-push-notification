self.addEventListener("install", (event) => {
  console.log("Service Worker Installed");
});

self.addEventListener(
  "notificationclick",
  (event) => {
    console.log("Notification clicked:", event);

    event.notification.close();

    if (event.action === "open_url") {
      console.log("Open URL action triggered");
      event.waitUntil(
        clients
          .matchAll({ type: "window", includeUncontrolled: true })
          .then((clientList) => {
            console.log("Matching clients:", clientList);

            if (clientList.length > 0) {
              console.log("Focusing on existing tab...");
              return clientList[0].focus();
            }

            console.log("Opening new tab...");
            return clients.openWindow("https://vuejs.org/");
          })
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
