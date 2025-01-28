function classnames(...classes: (string | false | null | undefined)[]): string {
  let i = 0,
    tmp: string | false | null | undefined,
    str = "";
  for (; i < classes.length; i++) {
    if ((tmp = classes[i])) {
      if (typeof tmp === "string") {
        str += (str && " ") + tmp;
      }
    }
  }
  return str;
}

export default classnames;
