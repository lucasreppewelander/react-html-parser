import { parse } from "node-html-parser";

const replaceWithComponent = (node, index, tags) => {
  let Component = tags(node.tagName.toLowerCase(), {
    ...node.attributes,
    key: index,
    children: htmlToReact(node.innerHTML, tags),
  });

  return Component;
};

const htmlToReact = (html, tags) => {
  if (typeof html !== "string") {
    return [];
  }
  const root = parse(html);

  if (!root.childNodes.length) {
    return null;
  }

  const result = root.childNodes.map((node, index) => {
    if (node.text && node.nodeType === 3) {
      return node.text;
    }

    return replaceWithComponent(node, index, tags);
  });

  return result;
};

export default htmlToReact;
