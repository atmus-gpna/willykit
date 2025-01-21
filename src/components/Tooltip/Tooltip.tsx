import React from "react";
import { Icon } from "../Icon";
import { EIcons } from "../Icon/icon.types";
import { TooltipProps } from "./Tooltip.types";
import { TooltipContainer } from "./styled";

const Tooltip: React.FC<TooltipProps> = ({
  children,
  open = false,
  placement = "right",
}) => {
  return (
    <TooltipContainer open={open} placement={placement}>
      <Icon name={EIcons.tooltip} />
      <div className="tooltip-text">{children}</div>
    </TooltipContainer>
  );
};

export default Tooltip;
