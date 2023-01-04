import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement(
    "h1", {
    id: "title",
},
    "heading"
);

const heading1 = React.createElement(
    "h1", {
    id: "title",
},
    "heading1"
);

const container = React.createElement(
    "div",
    {
        id: "container",
    },
    [heading, heading1],
);

console.log(heading, heading1, container);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container); 