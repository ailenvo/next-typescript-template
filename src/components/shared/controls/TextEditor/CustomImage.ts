import Quill from "quill";

export interface ImageValue {
  url: string;
  alt?: string;
  width?: string;
  height?: string;
}

const ImageBlot = Quill.import("formats/image");

class CustomImageBlot extends ImageBlot {
  static create(value: ImageValue) {
    let node = super.create(value.url);
    node.setAttribute("src", value.url);
    node.setAttribute("alt", value.alt || "");
    if (value.width) {
      node.setAttribute("width", value.width);
    }
    if (value.height) {
      node.setAttribute("height", value.height);
    }
    return node;
  }

  static value(node: HTMLElement) {
    return {
      url: node.getAttribute("src") || "",
      alt: node.getAttribute("alt") || "",
      width: node.getAttribute("width") || "",
      height: node.getAttribute("height") || ""
    };
  }
}

CustomImageBlot.blotName = "customImage";
CustomImageBlot.tagName = "img";
Quill.register(CustomImageBlot);

export default CustomImageBlot;
