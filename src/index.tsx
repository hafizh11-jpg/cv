import { render } from "solid-js/web";
import App from "./App";
import "./gaya/global.css";

// Titik masuk aplikasi
const root = document.getElementById("root");
if (!root) throw new Error("Root element tidak ditemukan");

render(() => <App />, root);
