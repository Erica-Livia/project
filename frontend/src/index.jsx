import React from "react";
import ReactDOMClient from "react-dom/client";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<HomePage />);
