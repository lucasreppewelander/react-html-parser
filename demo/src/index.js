import React, { Component } from "react";
import { render } from "react-dom";

import parser from "../../src";

function RedComponent(props) {
  return (
    <span style={{ color: "red", fontStyle: "italic" }}>
      {props.children} 🍕
    </span>
  );
}

const html =
  '<h3>Title</h3><p>Lorem <span class="red">ipsum</span> <span class="blue">dolor</span> sit amet</p>';

const replacer = (tag, props) => {
  if (tag === "span" && props.class === "red") {
    return <RedComponent {...props} />;
  }

  return React.createElement(tag, props);
};

export default class Demo extends Component {
  render() {
    return (
      <div>
        <h1>react-html-parser Demo</h1>
        {parser(html, replacer)}
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
