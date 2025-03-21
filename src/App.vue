<template>
  <div class="app">
    <h1>Vue PWA Push Notifications</h1>
    <div class="button-group">
    <button @click="requestPermission">Enable Notifications</button>
    </div>
    <div class="button-group">
    <button @click="sendBasicNotification">Basic Notification</button>
    <button @click="sendActionNotification">Action Notification</button>
    <button @click="sendPersistentNotification">Persistent Notification</button>
    </div>
    <div class="button-group">
    <button @click="getExistingNotifications">Get Notifications</button>
    </div>
  </div>
</template>

<script setup>
const requestNotificationPermission = async () => {
  if (Notification.permission === "default") {
    await Notification.requestPermission();
  }
};

const requestPermission = () => {
  if ("Notification" in window) {  // Check if notifications are supported
    Notification.requestPermission().then((permission) => {  // Request permission from the user to display notifications
      if (permission === "granted") {
        alert("Notifications enabled!");
      } else if (permission === "denied") {
        alert("Notifications denied!");
      }
    });
  } else {
    alert("Notifications are not supported in this browser.");
  }
};

const sendBasicNotification = async () => {
  // Check if service workers are supported in the browser
  // and if the user has granted notification permission.
  if ("serviceWorker" in navigator && Notification.permission === "granted") {

    const registration = await navigator.serviceWorker.ready;   // Wait for the service worker to be fully active and ready

    const existingNotifications = await registration.getNotifications(); // Retrieve any existing notifications to check if there are active ones
    console.log("Existing Notifications:", existingNotifications);

    // registration.showNotification, Displays a push notification.
    registration.showNotification("Basic Notification", {
      body: "This is a simple notification!", 
      icon: "icons/vue.svg",
      tag: "basic_notification", 
    });

  } else {
    alert("Enable notifications first!");
  }
};

const sendActionNotification = async () => {
  await requestNotificationPermission();  // Request notification permission if not already granted
  
  if ("serviceWorker" in navigator && Notification.permission === "granted") {
    const registration = await navigator.serviceWorker.ready;
    registration.showNotification("Action Notification", {
      body: "Click the button below to visit Vue.js!",
      icon: "icons/vue.svg",
      tag: "action_notification",
      actions: [
        { action: "open_vue", title: "Open Vue.js" },
      ],
      requireInteraction: false, // Keeps the notification visible(true) until the user interacts , false it will vanish after sometime
    });
  } else {
    alert("Enable notifications first!");
  }
};


const sendPersistentNotification = async () => {
  if ("serviceWorker" in navigator && Notification.permission === "granted") {
    const registration = await navigator.serviceWorker.ready;
    registration.showNotification("Persistent Notification", {
      body: "This notification won't go away until you interact!",
      icon: "icons/vue.svg",
      tag: "persistent_notification",
      requireInteraction: true,  // // Ensures notification stays on screen until action is taken
      actions: [{ action: "close", title: "Close" }]  // User can mannual close this an notification
    });
  } else {
    alert("Enable notifications first!");
  }
};

const getExistingNotifications = async () => {
  if ("serviceWorker" in navigator) {
    const registration = await navigator.serviceWorker.ready;
    const notifications = await registration.getNotifications();   // Retrieve the list of currently active notifications
    console.log("Get Notifications:", notifications);
    if (notifications.length === 0) {
      alert("No active notifications.");
      return;
    }

    let message = `📢 Active Notifications (${notifications.length}):\n\n`;

    notifications.forEach((notification, index) => {
      message += `Notification ${index + 1}:\n`;
      message += `Title: ${notification.title}\n`;
      message += `Body: ${notification.body}\n`;
      message += `Tag: ${notification.tag}\n`;
      message += `Time: ${new Date(notification.timestamp).toLocaleString()}\n`;
      message += `-------------------------\n`;
    });

    alert(message);
  } else {
    alert("Notifications are not supported in this browser.");
  }
};

</script>

<style>
.app {
  text-align: center;
  margin: 20px;
}
button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin: 10px;
}
.button-group {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 10px;
}
</style>
