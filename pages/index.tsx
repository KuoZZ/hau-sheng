import { Row, Col, Button, Card } from "react-bootstrap";
import { withRouter } from "next/router";
import PageContainer from "../components/page-container";
import Carousel from "../components/carousel";
import constant from "../components/constant";
import { convertedImgUrl } from "../components/utils";
import "./style.styl";

const {
  servicesTitleMap,
  news,
  corpName,
  tel,
  local_tel,
  cs,
  lineId,
} = constant;
const PREFIX_CLASS = "home-page";

function View({ router }: { router: any }) {
  function _handleClickContactInfo(href: string) {
    let a = document.createElement("a");
    a.href = href;
    a.click();
  }
  const { push } = router;
  return (
    <PageContainer className={PREFIX_CLASS}>
      <Carousel />
      <section className="intro">
        {corpName}
        提供跨縣市服務，業務到府(公司)與您親洽，可透過來電預約，我們將迅速安排時間派員承辦，節省您寶貴的時間，提供多元選擇的融資管道。
        <br />
        我們相信同樣的信念，能串起有相同想法的您，促進合作機會，共創美好社會營運模式，讓企業持續永續發展。
      </section>
      <section className="description">
        <Row>
          <Col md="12" lg="3">
            <Card className="mb-2" bg="primary" text="white">
              <Card.Body>
                <Card.Title>超容易</Card.Title>
                <Card.Text>手續簡單超容易</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="12" lg="3">
            <Card className="mb-2" bg="danger" text="white">
              <Card.Body>
                <Card.Title>超安心</Card.Title>
                <Card.Text>保密到家很安心</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="12" lg="3">
            <Card className="mb-2" bg="success" text="white">
              <Card.Body>
                <Card.Title>超快速</Card.Title>
                <Card.Text>手續便捷超快速</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="12" lg="3">
            <Card className="mb-2" bg="warning">
              <Card.Body>
                <Card.Title>超可靠</Card.Title>
                <Card.Text>待客如賓超可靠</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
      <section className="service-lists">
        <h2>服務項目</h2>
        <Row>
          {Object.values(servicesTitleMap).map((service: any) => (
            <Col
              md="12"
              lg="4"
              key={service}
              onClick={() => push(`/services?page=${service}`)}
            >
              <div>{service}</div>
            </Col>
          ))}
        </Row>
      </section>
      {/*<section className="news">
        <Row>
          <Col md="12" lg="4">
            <img
              src={convertedImgUrl("/images/news-cover.jpg")}
              onClick={() => push("/news")}
            />
          </Col>
          <Col md="12" lg="8">
            <h3>最新消息</h3>
            <ul>
              {news.map((n) => (
                <li key={n.title} onClick={() => push("/news")}>
                  {n.title}
                </li>
              ))}
            </ul>
            <div className="more-button">
              <Button variant="outline-dark" onClick={() => push("/news")}>
                更多
              </Button>
            </div>
          </Col>
        </Row>
      </section>*/}
      <section className="contact-us">
        <div
          style={{
            backgroundImage: `url(${convertedImgUrl(
              "/images/contact-us-cover.jpg"
            )})`,
            backgroundSize: "cover",
            opacity: "0.8",
          }}
        >
          <Row>
            <Col md="12" lg={{ span: 3, offset: 9 }}>
              <div>聯絡熱線({cs})</div>
              {local_tel && <div
                className="tel"
                onClick={() => _handleClickContactInfo(`Tel:${local_tel}`)}
              >
                市話：{local_tel}
              </div>}
              {tel && <div
                className="tel"
                onClick={() => _handleClickContactInfo(`Tel:${tel}`)}
              >
                手機：{tel}
              </div>}
              <img src={convertedImgUrl("/images/qr.jpg")} />
              <div className="line-id">Line ID: {lineId}</div>
              <a href={constant.line} target="_blank">
                <img src={convertedImgUrl("/images/social-line-s.png")} />
              </a>
              <a href={constant.fb} target="_blank">
                <img src={convertedImgUrl("/images/social-fb-s.png")} />
              </a>
              <a href={constant.instgrame} target="_blank">
                <img src={convertedImgUrl("/images/social-ig-s.png")} />
              </a>
            </Col>
          </Row>
        </div>
      </section>
    </PageContainer>
  );
}

export default withRouter(View);
