import { Accept } from "react-dropzone";

export const DATE_FORMAT = "DD-MM-YYYY";
export const DATE_SELECT_FORMAT = "YYYY-MM-DD HH:mm";
export const MobileMediaQuery = "(max-width:600px)";

export const ACCEPT_IMAGES: Accept = {
  "image/*": [],
};

export const ACCEPT_MEDIAS: Accept = {
  ...ACCEPT_IMAGES,
  "video/mp4": [".mp4", ".MP4"],
  "video/webm": [".webm", ".WEBM"],
};
