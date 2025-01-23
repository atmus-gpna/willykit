import React from "react";
import { Icon } from "../Icon";
import { EIcons } from "../Icon/icon.types";
import { TooltipProps } from "./Tooltip.types";
import { TooltipContainer } from "./styled";
import classnames from "../../utils/classnames";

const Tooltip: React.FC<TooltipProps> = ({
  children,
  open = false,
  placement = "right",
  className,
}) => {
  return (
    <TooltipContainer
      className={classnames("tooltip", className)}
      open={open}
      $placement={placement}
    >
      <Icon name={EIcons.info} />
      <div className="tooltip-text">{children}</div>
    </TooltipContainer>
  );
};

export default Tooltip;
