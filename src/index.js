import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import './assets/css/vendor/bootstrap.min.css';
import './assets/css/vendor/fontawesome.css';
import './assets/css/vendor/animate.min.css';

// Plugins CSS
import './assets/css/plugins/swiper.css';
import './assets/css/plugins/odometer.css';

// Custom CSS
import './assets/css/style.css';
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);