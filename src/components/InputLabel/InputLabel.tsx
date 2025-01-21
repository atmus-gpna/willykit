import Tooltip from "../Tooltip/Tooltip";
import { InputLabelProps } from "./InputLabel.types";
import { StyledLabel } from "./styled";

const InputLabel: React.FC<InputLabelProps> = ({
  children,
  required = false,
  tooltip,
}) => {
  return (
    <StyledLabel>
      <div>
        {children}
        {required && " *"}
      </div>
      {tooltip && <Tooltip {...tooltip}>{tooltip.children}</Tooltip>}
    </StyledLabel>
  );
};

export default InputLabel;
