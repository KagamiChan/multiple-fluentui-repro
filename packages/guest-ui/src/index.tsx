import React from "react";
import ReactDOM from "react-dom";
import {
  FluentProvider,
  webLightTheme,
  Button,
} from "@fluentui/react-components";

const App = () => {
  return (
    <FluentProvider theme={webLightTheme}>
      <h2>Guest UI</h2>
      <Button appearance="primary">I'm a button in guest UI</Button>
    </FluentProvider>
  );
};

export const renderGuestUI = (root: HTMLElement) => {
  ReactDOM.render(<App />, root);
};
export const unmountGuestUI = (root: HTMLElement) => {
  ReactDOM.unmountComponentAtNode(root);
};
