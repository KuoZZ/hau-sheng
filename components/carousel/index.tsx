import { Carousel as RBCarousel } from "react-bootstrap";
import { convertedImgUrl } from "../utils";
import "./style.styl";

const PREFIX_CLASS = "carousel";

function Carousel() {
  return (
    <RBCarousel>
      <RBCarousel.Item>
        <img
          className="d-block w-100"
          src={convertedImgUrl("/images/loan.jpg")}
          alt="竭盡全力為您量身打造"
        />
        <RBCarousel.Caption>
          <h3>竭盡全力為您量身打造</h3>
        </RBCarousel.Caption>
      </RBCarousel.Item>
      <RBCarousel.Item>
        <img
          className="d-block w-100"
          src={convertedImgUrl("/images/money.jpg")}
          alt="資金周轉免煩惱"
        />
        <RBCarousel.Caption>
          <h3>資金周轉免煩惱</h3>
        </RBCarousel.Caption>
      </RBCarousel.Item>
      <RBCarousel.Item>
        <img
          className="d-block w-100"
          src={convertedImgUrl("/images/city.jpg")}
          alt="攜手共創，打造未來"
        />
        <RBCarousel.Caption>
          <h3>攜手共創，打造未來</h3>
        </RBCarousel.Caption>
      </RBCarousel.Item>
      <RBCarousel.Item>
        <img
          className="d-block w-100"
          src={convertedImgUrl("/images/service.jpg")}
          alt="高品質全方面服務"
        />
        <RBCarousel.Caption>
          <h3>高品質全方面服務</h3>
        </RBCarousel.Caption>
      </RBCarousel.Item>
      <RBCarousel.Item>
        <img
          className="d-block w-100"
          src={convertedImgUrl("/images/hs.jpg")}
          alt="華昇資產管理有限公司"
        />
        <RBCarousel.Caption>
          <h3>華昇資產管理有限公司</h3>
        </RBCarousel.Caption>
      </RBCarousel.Item>
    </RBCarousel>
  );
}

export default Carousel;
