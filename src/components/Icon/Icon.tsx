import { useDynamicSvgImport } from "../../hooks/useDynamicSvgImport";
import { IIconProps } from "./icon.types";

const Icon: React.FC<IIconProps> = (props) => {
  const { name, color, width } = props;
  const { SvgIcon: RawSvgIcon } = useDynamicSvgImport(name);

  return (
    <>
      {RawSvgIcon && (
        <RawSvgIcon
          data-testid="icon"
          style={{
            color: color,
            width: width,
          }}
        />
      )}
    </>
  );
};

export default Icon;
