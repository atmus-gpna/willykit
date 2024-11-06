import { useDynamicSvgImport } from "../../hooks/useDynamicSvgImport";
import { IIconProps } from "./icon.types";

const Icon: React.FC<IIconProps> = (props) => {
  const { name, color } = props;
  const { SvgIcon: RawSvgIcon } = useDynamicSvgImport(name);

  return (
    <div role="icon">
      {RawSvgIcon && (
        <RawSvgIcon
          style={{
            color: color,
          }}
        />
      )}
    </div>
  );
};

export default Icon;
