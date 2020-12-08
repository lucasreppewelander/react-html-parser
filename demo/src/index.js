import React, { Component } from "react";
import { render } from "react-dom";

import parser from "../../src";

const html =
  "<h3>Title</h3><p>Lorem ipsum dolor <span class='team-overlay' data-slug='cyberplace-gamecenter'>Cyberplace Gamecenter</span> sit amet</p>";

const TestComponent = (props) => {
  return (
    <span style={{ borderBottom: "2px dashed red" }} rank="1">
      This has been replaced
      <span style={{ color: "#ccc", fontStyle: "italic" }}>
        {" "}
        (was: {props.children})
      </span>
    </span>
  );
};

export default class Demo extends Component {
  render() {
    return (
      <div>
        <h1>react-html-parser Demo</h1>
        {parser(html, (tag, props) => {
          if (tag === "span" && props.class === "team-overlay") {
            return <TestComponent {...props} />;
          }

          return React.createElement(tag, props);
        })}
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
