export const generateUUID = (length: number): string => {
  const stringValue = [...Array(length)].map(t => "x").join("");

  return stringValue.replace(/[x]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const hasEmail = (email: string) => {
  return !!email.match("[a-zA-Z0-9_\\.\\+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-\\.]+");
};
export const hasImage = (mime: string): boolean => {
  return ["image/jpeg", "image/png"].indexOf(mime) === -1;
};
export const capitalize = (value: string | undefined) => {
  if (!value) return "";
  return value.charAt(0).toUpperCase() + value.slice(1);
};

export function startDownloadFile(file: Buffer, fileName: string) {
  const url = window.URL.createObjectURL(new Blob([file]));
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", fileName);
  document.body.appendChild(link);
  link.click();
  link.remove();
}
export const safeRead = function (obj: any, strfield: string): any {
  let current, prop, props, val, _i, _len;

  //obj = arguments[0], props = 2 <= arguments.length ? [].slice.call(arguments, 1) : [];
  props = strfield.split(".");

  let read = function (obj: any, prop: any) {
    if ((obj != null ? obj[prop] : void 0) == null) {
      return;
    }
    return obj[prop];
  };

  current = obj;
  for (_i = 0, _len = props.length; _i < _len; _i++) {
    prop = props[_i];

    if ((val = read(current, prop))) {
      current = val;
    } else {
      return "";
    }
  }
  return current;
};

export async function copyToClipboard(textToCopy: string) {
  // Navigator clipboard api needs a secure context (https)
  if (navigator && navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard?.writeText(textToCopy);
  } else {
    // Use the 'out of viewport hidden text area' trick
    const element = document.createElement("div");
    element.innerHTML = textToCopy;

    // Move textarea out of the viewport so it's not visible
    element.style.position = "absolute";
    element.style.left = "-999999px";

    document.body.prepend(element);

    try {
      var r = document.createRange();

      r.selectNode(element);
      window.getSelection()?.removeAllRanges();
      window.getSelection()?.addRange(r);
      document.execCommand("copy");
    } catch (error) {
      console.error(error);
    } finally {
      window.getSelection()?.removeAllRanges();
      element.remove();
    }
  }
}

export const removeVietnameseAccents = (str: string): string => {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");
};

export const jonhString = (str: string): string => {
  return str.split(" ").join("-");
};

export const getStrPathByTitle = (str?: string): string => {
  if (!str) {
    return "";
  }

  return jonhString(removeVietnameseAccents(str.toLowerCase()));
};
