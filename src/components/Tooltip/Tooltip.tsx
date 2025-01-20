import React from "react";
import { Icon } from "../Icon";
import { EIcons } from "../Icon/icon.types";
import { TooltipProps } from "./Tooltip.types";
import { TooltipArrow, TooltipContainer } from "./styled";

const Tooltip: React.FC<TooltipProps> = ({
  children,
  arrow = false,
  open = false,
}) => {
  return (
    <TooltipContainer open={open}>
      <Icon name={EIcons.tooltip} />
      <div className="tooltip-text">
        {children}
        {arrow && <TooltipArrow arrow={arrow} />}
      </div>
    </TooltipContainer>
  );
};

export default Tooltip;
