import { Row, Col } from "react-bootstrap";
import Head from "next/head";
import { convertedImgUrl } from "../utils";
import constant from "../constant";
import "./style.styl";

const PREFIX_CLASS = "top-bar";

export default function TopBar() {
  function _handleClickContactInfo(href: string) {
    let a = document.createElement("a");
    a.href = href;
    a.click();
  }
  return (
    <>
      <Head>
        <title>{constant.corpName}資產管理有限公司</title>
        <link
          rel="shortcut icon"
          href={convertedImgUrl("/images/favicon_2.ico")}
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.14.0/css/all.css"
          integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc"
          crossOrigin="anonymous"
        />
      </Head>
      <Row className={PREFIX_CLASS}>
        <Col xs="4" sm="4" md="4"></Col>
        <Col className="logo" xs="12" sm="12" md="12" lg="4">
          <div onClick={() => _handleClickContactInfo("/")}>
            <img src={convertedImgUrl("/images/logo_1.png")} />
          </div>
        </Col>
        <Col xs="4" sm="4" md="4" className="contact-info">
          <div
            onClick={() => _handleClickContactInfo(`Tel:${constant.local_tel}`)}
          >
            聯絡專線
            <br />
            {constant.local_tel}
          </div>
        </Col>
      </Row>
    </>
  );
}
