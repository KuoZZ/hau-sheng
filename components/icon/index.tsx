import cx from "classnames";
import "./style.styl";

const IconMap = {
  line: "fab fa-line",
  facebook: "fab fa-facebook-square",
  instagram: "fab fa-instagram-square",
  map: "fas fa-map-marker-alt",
};
const PREFIX_CLASS = "icon";

function Icon({
  icon,
  className,
  href,
}: {
  icon: string;
  className?: string;
  href?: string;
}) {
  return (
    <a href={href} className={PREFIX_CLASS} target="_blank">
      <i className={cx(icon, className)} />
    </a>
  );
}

Icon.IconMap = IconMap;

export default Icon;
