import { Row, Col } from "react-bootstrap";
import PageContainer from "../../components/page-container";
import PageInnerContainer from "../../components/page-inner-container";
import Icon from "../../components/icon";
import constant from "../../components/constant";
import { convertedImgUrl } from "../../components/utils";
import "./style.styl";

const PREFIX_CLASS = "contact-us-page";
const {
  fb,
  line,
  lineId,
  instgrame,
  tel,
  local_tel,
  cs,
  corpName,
  googleForm,
} = constant;

export default function ContactUs() {
  function _handleClickContactUs(href: string, isBlank?: boolean) {
    let a = document.createElement("a");
    a.target = isBlank ? "_blank" : "";
    a.href = href;
    a.click();
  }
  return (
    <PageContainer className={PREFIX_CLASS}>
      <PageInnerContainer type="contact-us">
        <div className="content">
          <h1>聯絡我們</h1>
          <div className="sub-title">
            服務熱線 ({cs})
            <div
              className="anchor"
              onClick={() => _handleClickContactUs(`Tel:${tel}`)}
            >
              手機: {tel}
            </div>
            <div
              className="anchor"
              onClick={() => _handleClickContactUs(`Tel:${local_tel}`)}
            >
              市話: {local_tel}
            </div>
          </div>
          <Row>
            <Col xs="12" lg="9" className="links">
              <Row>
                <Col xs="12" lg="4">
                  <div
                    className="link ig"
                    onClick={() => _handleClickContactUs(instgrame, true)}
                  >
                    <Icon icon={Icon.IconMap.instagram} />
                    <div className="link-description">追蹤{corpName} IG</div>
                  </div>
                </Col>
                <Col xs="12" lg="4">
                  <div
                    className="link line"
                    onClick={() => _handleClickContactUs(line, true)}
                  >
                    <Icon icon={Icon.IconMap.line} />
                    <div className="link-description">Line 線上諮詢</div>
                  </div>
                </Col>
                <Col xs="12" lg="4">
                  <div
                    className="link fb"
                    onClick={() => _handleClickContactUs(fb, true)}
                  >
                    <Icon icon={Icon.IconMap.facebook} />
                    <div className="link-description">{corpName}粉絲團</div>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xs="12" lg="3" className="qr-code-and-id">
              <img
                src={convertedImgUrl("/images/qr.jpg")}
                onClick={() => _handleClickContactUs(line, true)}
              />
              <div className="line-id">Line ID: {lineId}</div>
            </Col>
          </Row>
        </div>
        {googleForm && (
          <section>
            <iframe src={googleForm} />
          </section>
        )}
      </PageInnerContainer>
    </PageContainer>
  );
}
