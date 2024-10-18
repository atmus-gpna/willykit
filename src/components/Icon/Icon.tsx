import { useDynamicSvgImport } from "../../hooks/useDynamicSvgImport";

interface IconProps {
  name: string;
  color?: string;
  position?: "left" | "right" | "center";
}
const Icon: React.FC<IconProps> = (props) => {
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
