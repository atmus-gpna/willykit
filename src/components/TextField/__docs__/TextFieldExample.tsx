import React from "react";
import TextField from "../TextField";

const TextFieldExample = () => {
  const [value, setValue] = React.useState("");

  return (
    <TextField
      used="modal"
      label="Username"
      readOnly={false}
      autoFocus
      placeholder="Write something..."
      error
      errorText="Error"
      value={value}
      onChange={(event) => setValue(event.target.value)}
      className="custom-class"
      width={400}
      type={"password"}
      required
      slots={{
        tooltip: {
          children: "Текст всплывающей подсказки",
          placement: "right",
          open: true,
        },
      }}
    />
  );
};

export default TextFieldExample;
