type IconProps = {
  icon: `${string}:${string}`;
  className: string;
  color: string;
};

const Icon = ({
  icon,
  color,
  className,
}: IconProps) => (
  <img
    src={`https://api.iconify.design/${icon}.svg?color=%23${
      color.replace("#", "")
    }`}
    alt="wwww"
    class={className}
  />
);

export default Icon;
