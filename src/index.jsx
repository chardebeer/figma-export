import React from "react";
import ReactDOMClient from "react-dom/client";
import { MyBasket } from "./screens/MyBasket";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<MyBasket />);
