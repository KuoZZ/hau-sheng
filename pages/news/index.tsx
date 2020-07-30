import PageContainer from "../../components/page-container";
import ImageText from "../../components/image-text";
import { convertedImgUrl } from "../../components/utils";
import constant from "../../components/constant";
import "./style.styl";

const PREFIX_CLASS = "news-page";
const { news } = constant;

export default function News() {
  return (
    <PageContainer className={PREFIX_CLASS}>
      <div className="content">
        <h1>最新消息</h1>
        <div>
          {news.map(function (n) {
            return (
              <ImageText
                key={n.newsUrl}
                date={n.date}
                src={n.src}
                title={n.title}
                newsUrl={n.newsUrl}
                text={n.text}
              />
            );
          })}
        </div>
      </div>
      <section>
        <img src={convertedImgUrl(`/images/news.jpg`)} />
      </section>
    </PageContainer>
  );
}
