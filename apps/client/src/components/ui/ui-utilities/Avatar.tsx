import Aavatar from "avvvatars-react";

const Avatar = ({
  display,
  style,
  size = 32,
  borderSize = 2,
  borderColor,
}: {
  display: string;
  borderColor?: string;
  size?: number;
  borderSize?: number;
  style?: "shape" | "character";
}) => {
  return (
    <Aavatar
      borderColor={borderColor}
      borderSize={borderSize}
      size={size}
      style={style || "character"}
      value={display}
    />
  );
};

export default Avatar;
