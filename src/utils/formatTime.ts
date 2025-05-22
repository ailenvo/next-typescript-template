import moment from "moment";

export function fDate(date?: Date | string | null, newFormat?: string) {
  const fm = newFormat || "DD-MM-yyyy";

  return date ? moment(new Date(date)).format(fm) : "";
}

export function fDateTime(date?: Date | string | null, newFormat?: string) {
  const fm = newFormat || "DD-MM-YYYY HH:mm";

  return date ? moment(new Date(date)).format(fm) : "";
}

export function fTimestamp(date?: Date | string | null) {
  return date ? moment(new Date(date)).toDate().toJSON() : "";
}

export function fToNow(date?: Date | string | null) {
  return date ? moment(new Date(date)).toNow() : "";
}
