import Tooltip from "../Tooltip/Tooltip";
import { InputLabelProps } from "./InputLabel.types";
import { StyledLabel } from "./styled";

const InputLabel: React.FC<InputLabelProps> = ({
  label,
  required = false,
  tooltip,
  component = "input",
  error,
  errorText,
}) => {
  return (
    <StyledLabel component={component}>
      <>
        {label}
        {required && " *"}
      </>
      {tooltip && <Tooltip {...tooltip}>{tooltip.children}</Tooltip>}
      {error && (
        <Tooltip className="error-tooltip" {...tooltip}>
          {errorText}
        </Tooltip>
      )}
    </StyledLabel>
  );
};

export default InputLabel;
