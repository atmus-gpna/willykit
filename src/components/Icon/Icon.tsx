import { useDynamicSvgImport } from "../../hooks/useDynamicSvgImport";
import { IIconProps } from "./icon.types";
import { IconWrapper } from "./styled";

const Icon: React.FC<IIconProps> = (props) => {
  const { name, color, size } = props;
  const { SvgIcon: RawSvgIcon } = useDynamicSvgImport(name);

  return (
    <IconWrapper role="icon">
      {RawSvgIcon && (
        <RawSvgIcon
          style={{
            color: color,
            width: size,
          }}
        />
      )}
    </IconWrapper>
  );
};

export default Icon;
