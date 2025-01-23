import React from "react";
import TextField from "../TextField";

const TextFieldExample = () => {
  const [values, setValues] = React.useState(["", "", "Текст"]); // Массив значений для каждого TextField

  // Конфигурации для каждого TextField
  const textFieldsConfig = [
    {
      id: 1,
      label: "First Name",
      placeholder: "Enter your first name",
      type: "text",
      error: false,
      errorText: "",
    },
    {
      id: 2,
      label: "Last Name",
      placeholder: "Enter your last name",
      type: "text",
      error: false,
      errorText: "",
    },
    {
      id: 3,
      label: "Email",
      placeholder: "Enter your email",
      type: "email",
      error: false,
      errorText: "",
      readOnly: true,
    },
  ];

  const handleChange =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const updatedValues = [...values];
      updatedValues[index] = event.target.value;
      setValues(updatedValues);
    };

  return (
    <>
      {textFieldsConfig.map((config, index) => (
        <TextField
          key={config.id}
          variant="fieldset"
          label={config.label}
          placeholder={config.placeholder}
          type={config.type}
          error={config.error}
          errorText={config.errorText}
          value={values[index]}
          onChange={handleChange(index)}
          width={300}
          required
          readOnly={config.readOnly}
          slots={{
            tooltip: {
              children: "Текст всплывающей подсказки",
              placement: "bottom",
            },
          }}
        />
      ))}
    </>
  );
};

export default TextFieldExample;
