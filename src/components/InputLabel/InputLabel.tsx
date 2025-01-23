import Tooltip from "../Tooltip/Tooltip";
import { InputLabelProps } from "./InputLabel.types";
import { StyledLabel } from "./styled";

const InputLabel: React.FC<InputLabelProps> = ({
  label,
  required = false,
  tooltip,
  variant,
  error,
  errorText,
}) => {
  return (
    <StyledLabel variant={variant}>
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
