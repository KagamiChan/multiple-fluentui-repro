import React from "react";
import ReactDOM from "react-dom";
import {
  FluentProvider,
  webLightTheme,
  Button,
  IdPrefixProvider,
  Dialog,
  DialogTrigger,
  DialogSurface,
  DialogTitle,
  DialogBody,
  DialogActions,
  DialogContent,
} from "@fluentui/react-components";

import { compare } from 'compare-versions'

import { getTabster } from "tabster";

const App = () => {
  return (
    <IdPrefixProvider value="guest">
      <FluentProvider theme={webLightTheme}>
        <h2>Guest UI</h2>
        <Button appearance="primary">I'm a button in guest UI</Button>

        <Dialog>
          <DialogTrigger disableButtonEnhancement>
            <Button>Open dialog</Button>
          </DialogTrigger>
          <DialogSurface>
            <DialogBody>
              <DialogTitle>Dialog title</DialogTitle>
              <DialogContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam exercitationem cumque repellendus eaque est dolor eius
                expedita nulla ullam? Tenetur reprehenderit aut voluptatum
                impedit voluptates in natus iure cumque eaque?
              </DialogContent>
              <DialogActions>
                <DialogTrigger disableButtonEnhancement>
                  <Button appearance="secondary">Close</Button>
                </DialogTrigger>
                <Button appearance="primary">Do Something</Button>
              </DialogActions>
            </DialogBody>
          </DialogSurface>
        </Dialog>
      </FluentProvider>
    </IdPrefixProvider>
  );
};

export const renderGuestUI = (root: HTMLElement) => {
  const tabster = getTabster(window);
  if (compare((tabster as any).core._version ?? '9.9.9', '4.3.0', '<')) {
    (tabster as any).core.queueInit = (callback: () => void) => setTimeout(callback, 0);
    (tabster as any).core.drainInitQueue = () => {};
    (tabster as any).core._dummyObserver.updatePositions = () => {};
    console.log(tabster)
  }
  ReactDOM.render(<App />, root);
};
export const unmountGuestUI = (root: HTMLElement) => {
  ReactDOM.unmountComponentAtNode(root);
};

(window as any).__renderGuestUI = renderGuestUI;
(window as any).__unmountGuestUI = unmountGuestUI;

if ((window as any).__IS_GUEST_UI__) {
  renderGuestUI(document.getElementById("root"));
}
