import { Row, Col } from "react-bootstrap";
import "./style.styl";

export default function ImageText({
  src,
  text,
  title,
  newsUrl,
  date,
}: {
  src: string;
  text: string;
  title: string;
  newsUrl: string;
  date: string;
}) {
  function _handleClickTitle() {
    let a = document.createElement("a");
    a.href = newsUrl;
    a.target = "_blank";
    a.click();
  }
  return (
    <Row className="image-text">
      <Col md="12" lg="3" className="image" onClick={_handleClickTitle}>
        <img src={src} />
      </Col>
      <Col md="12" lg="9" className="text-content">
        <div className="date">{date}</div>
        <div className="title" onClick={_handleClickTitle}>
          {title}
        </div>
        <div className="text-content-detail">{text}</div>
      </Col>
    </Row>
  );
}
