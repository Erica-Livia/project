import React from "react";
import ReactDOMClient from "react-dom/client";
// import { HomePage } from "./screens/HomePage";
// import { Destinations } from "./screens/Destinations";
// import { Guides } from "./screens/Guides";
// import { Profile } from "./screens/Profile";
// import { PlaceDesciption } from "./screens/PlaceDescription";
// import {GuideDescription } from "./screens/GuideDescription";
// import { Bookings } from "./screens/Bookings";
import "./index.css";
import App from "./App";

const root = ReactDOMClient.createRoot(app);
root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  