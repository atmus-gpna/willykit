import { useDynamicSvgImport } from "../../hooks/useDynamicSvgImport";
import { IIconProps } from "./icon.types";

const Icon: React.FC<IIconProps> = (props) => {
  const { name, color, position } = props;
  const { SvgIcon: RawSvgIcon } = useDynamicSvgImport(name);

  return (
    <div role="icon">
      {RawSvgIcon && (
        <RawSvgIcon
          style={{
            color: color,
            position: "absolute", // или другое значение, в зависимости от ваших требований
            left: position === "left" ? 0 : "auto",
            right: position === "right" ? 0 : "auto",
          }}
        />
      )}
    </div>
  );
};

export default Icon;
