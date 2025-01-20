import Tooltip from "../Tooltip/Tooltip";
import { InputLabelProps } from "./InputLabel.types";
import { StyledLabel } from "./styled";

const InputLabel: React.FC<InputLabelProps> = ({
  children,
  tooltip = "Текст всплывающей подсказки",
  required = false,
}) => {
  return (
    <StyledLabel>
      <div>
        {children}
        {required && " *"}
      </div>
      {tooltip && <Tooltip>{tooltip}</Tooltip>}
    </StyledLabel>
  );
};

export default InputLabel;
