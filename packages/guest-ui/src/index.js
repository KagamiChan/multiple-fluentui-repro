import React from 'react';
import ReactDOM from 'react-dom';
import { FluentProvider, webLightTheme, Button } from '@fluentui/react-components';
var App = function () {
    return (React.createElement(FluentProvider, { theme: webLightTheme },
        React.createElement("h2", null, "Guest UI"),
        React.createElement(Button, { appearance: 'primary' }, "Click me")));
};
export var renderGuestUI = function (root) { return ReactDOM.render(React.createElement(App, null), root); };
export var unmountGuestUI = function (root) { return ReactDOM.unmountComponentAtNode(root); };
