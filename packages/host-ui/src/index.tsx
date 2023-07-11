import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  FluentProvider,
  webLightTheme,
  Button,
  Dialog,
  DialogTrigger,
  DialogSurface,
  DialogTitle,
  DialogBody,
  DialogActions,
  DialogContent,
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


      {/* <Dialog>
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
        </Dialog> */}
      {showGuestUI && <GuestUI />}
    </FluentProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
