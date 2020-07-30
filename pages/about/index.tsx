import { Row, Col } from "react-bootstrap";
import PageContainer from "../../components/page-container";
import PageInnerContainer from "../../components/page-inner-container";
import constant from "../../components/constant";
import { convertedImgUrl } from "../../components/utils";
import "./style.styl";

const PREFIX_CLASS = "about-page";

export default function About() {
  return (
    <PageContainer className={PREFIX_CLASS}>
      <PageInnerContainer type="about-us">
        <div className="content">
          <h1>關於我們</h1>
          <div className="sub-title">
            資金融資找{constant.corpName}，資金到位更容易!
          </div>
          <Row>
            <Col md="12" lg="5" className="description">
              {constant.corpName}
              資產在大台北融資市場已有二十年的服務經驗，經營理念秉持以誠信為原則，正派經營、專業服務、熱忱親切、積極負任是我們堅持對待客戶的態度。
              <br />
              <br />
              團隊皆具備融資、資金週轉等相關專業知識，用心傾聽每位客戶的需求，以完整的互動式諮詢為中小企業及個人提供最強而有力的資金後盾，迅速合法的給予最安全的融資管道。
              <br />
              <br />
              對於我們的客戶，{constant.corpName}
              採最嚴格保密的要求，把關您的個資，以及透明化的服務，讓您融資借貸更為安心。
            </Col>
            <Col md="12" lg="7" className="image">
              <img src={convertedImgUrl("/images/feature.jpg")} />
            </Col>
          </Row>
        </div>
      </PageInnerContainer>
    </PageContainer>
  );
}
