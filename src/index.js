import "core-js/features/map";
import "core-js/features/set";
import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import App from "./App";

// Init VK  Mini App
// Sends event to client
bridge.send("VKWebAppInit");
// Subscribes to event, sended by client
bridge.subscribe(e => console.log(e));
//----------------------------
// Sending event to client
bridge
  .send('VKWebAppGetEmail')
  .then(data => {
// Handling received data
    console.log(data.email);
  })
  .catch(error => {
    // Handling an error
  });
//----------------------------
bridge
  .send('VKWebAppGetUserInfo')
  .then(data => {
    // Handling received data
    console.log(data.first_name);
    console.log(data.last_name);
    console.log(data.id);
    console.log(data.bdate);
    console.log(data.country.title);
    console.log(data.city.title);
    console.log(data.photo_100);
    console.log(data.photo_200);
    console.log(data.photo_max_orig);
    console.log(data.sex);
  })
  .catch(error => {
    // Handling an error
  });

bridge.send('VKWebAppGetAuthToken', {"app_id": 7658421, "scope": "friends, photos, notify, video, wall, offline, groups, notifications, stats, email, market"})
ReactDOM.render(<App />, document.getElementById("root"));
if (process.env.NODE_ENV === "development") {
  import("./eruda").then(({ default: eruda }) => {}); //runtime download
}

if (module.hot) {
module.hot.accept();
}
