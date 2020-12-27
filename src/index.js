import React from "react";
import ReactDom from "react-dom";
import { SpeechProvider } from "@speechly/react-client";

import { Provider } from "./context/context";
import App from "./App";
import "./index.css";

ReactDom.render(
  <SpeechProvider appId="c5f6cecd-3860-4095-a213-ef0a89ae74c2" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById("root")
);
