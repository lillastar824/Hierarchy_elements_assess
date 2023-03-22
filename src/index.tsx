import React from "react";
import { render } from "react-dom";
import { hot } from "react-hot-loader/root";
import UrlForm from "./components/urlForm";
import "../assets/style.css";

const App = () => (
  <div>
    <UrlForm />
  </div>
);

const HotApp = hot(App)
const root = document.getElementById('root') as HTMLElement
render(<HotApp />, root)
