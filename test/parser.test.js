import React from "react";
import { shallow, render, mount } from "enzyme";
import parser, { ParserComponent } from "../src";
import "jest-enzyme";

const TestComponent = ({ show, class: cls, children, ...restProps }) => {
  if (show) return <p>show</p>;
  return <p rank="1">hide</p>;
};

const tags = (tag, props) => {
  if (tag === "span" && props.class === "team-overlay") {
    return <TestComponent {...props} />;
  }

  return React.createElement(tag, props);
};

test("Renders a tag not replaced", () => {
  const html = "<strong>waddup</strong>";
  const wrapper = render(<>{parser(html, tags)}</>);
  expect(wrapper.text()).toEqual("waddup");
});

test("Renders a tag not replaced 2", () => {
  const html =
    "<div className='post'><h3>Title</h3><p>Lorem ipsum dolor sit amet</p></div>";
  const wrapper = render(parser(html, tags));
  expect(wrapper.find("h3").text()).toEqual("Title");
  expect(wrapper.find("p").text()).toEqual("Lorem ipsum dolor sit amet");
});

test("html without wrapper div", () => {
  const html = "<h3>Title</h3><p>Lorem ipsum dolor sit amet</p>";
  const wrapper = render(<>{parser(html, tags)}</>);
  expect(wrapper).toHaveLength(2);
  expect(wrapper.eq(0).text()).toEqual("Title");
  expect(wrapper.eq(-1).text()).toEqual("Lorem ipsum dolor sit amet");
});

test("Renders a tag that is replaced", () => {
  const html =
    "<span class='team-overlay' data-slug='cyberplace-gamecenter'>Cyberplace Gamecenter</span>";
  const wrapper = render(<>{parser(html, tags)}</>);
  expect(wrapper.hasClass("team-overlay"));
  expect(wrapper.text()).toEqual("hide");
});

test("html without wrapper div and a replaced tag", () => {
  const html =
    "<h3>Title</h3><span class='team-overlay' data-slug='cyberplace-gamecenter'>Cyberplace Gamecenter</span>";
  const wrapper = render(<>{parser(html, tags)}</>);
  expect(wrapper).toHaveLength(2);
  expect(wrapper.get(0).tagName).toEqual("h3");
  expect(wrapper.eq(0).text()).toEqual("Title");
  expect(wrapper.eq(-1).attr("rank")).toEqual("1");
  expect(wrapper.eq(-1).text()).toEqual("hide");
});

test("Renders a tag replaced but not with the return", () => {
  const html = "<span>waddup</span>";
  const wrapper = render(<>{parser(html, tags)}</>);
  expect(wrapper.text()).toEqual("waddup");
});

test("Renders an empty tag", () => {
  const html = "<div></div>";
  const wrapper = render(<>{parser(html, tags)}</>);
  expect(wrapper.text()).toBe("");
});

test("Renders a number", () => {
  const html = 3;
  const wrapper = render(<>{parser(html, tags)}</>);
  expect(wrapper.text()).toBe("");
});
