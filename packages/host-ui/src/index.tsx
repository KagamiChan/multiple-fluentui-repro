import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  FluentProvider,
  webLightTheme,
  Button,
} from "@fluentui/react-components";
import { useTabsterAttributes } from "@fluentui/react-tabster";
import { GuestUI } from "./guest-ui";

const App = () => {
  const [showGuestUI, setShowGuestUI] = useState(false);
  useTabsterAttributes({
    groupper: {},
  });
  return (
    <FluentProvider theme={webLightTheme}>
      <h1>Host UI</h1>
      <Button appearance="primary">Hohoho</Button>

      <Button onClick={() => setShowGuestUI((v) => !v)}>Show Guest UI</Button>

      {showGuestUI && <GuestUI />}
    </FluentProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
