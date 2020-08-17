import { convertedImgUrl } from "../utils";
import Icon from "../../components/icon";
import constant from "../../components/constant";
import "./style.styl";

const PREFIX_CLASS = "footer-bar";

export default function FooterBar() {
  return (
    <div className={PREFIX_CLASS}>
      <div className="up-bar" />
      <div className="img">
        <img src={convertedImgUrl("/images/_footer_img_1.png")} />
      </div>
      <div className="copy-right">© All rights reserved.</div>
      <div className="tel">
        {constant.cs && <div>{`服務熱線(${constant.cs})`}</div>}
        {constant.tel && <div>{`手機: ${constant.tel}`}</div>}
        {constant.local_tel && <div>{`市話: ${constant.local_tel}`}</div>}
      </div>
      <div className="location">
        <a href={constant.corpAddressGoogleMap}>{constant.corpAddress}</a>
        <div className="icon">
          <Icon icon={Icon.IconMap.map} />
        </div>
      </div>
    </div>
  );
}
