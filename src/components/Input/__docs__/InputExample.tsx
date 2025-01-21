import { Input } from "../Input";
import React from "react";
import { Icon } from "../../Icon";
import { EIcons } from "../../Icon/icon.types";

const InputExample = () => {
  const icon = {
    right: EIcons.pluse,
    left: EIcons.chart,
  };

  const [value, setValue] = React.useState<string>("");

  return (
    <Input
      used="modal"
      placeholder="Enter text..."
      endAdornment={<Icon name={icon?.right} color="red" />}
      startAdornment={<input type="checkbox" />}
      readOnly={false}
      autoFocus
      width={100}
      error
      required
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
  );
};

export default InputExample;
