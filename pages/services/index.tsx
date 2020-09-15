import cx from "classnames";
import PageContainer from "../../components/page-container";
import PageInnerContainer from "../../components/page-inner-container";
import constant from "../../components/constant";
import { withRouter } from "next/router";
import { Tab, Row, Col, Nav, Table } from "react-bootstrap";
import "./style.styl";

const PREFIX_CLASS = "services-page";
const { servicesTitleMap } = constant;
const { pageDropdownMap } = PageContainer;
const {
  ENTERPRISE,
  PAYCHECK,
  STOCK,
  HOUSE,
  PERSONAL,
//   CAR,
} = servicesTitleMap;
const servicesContentMap = {
  [ENTERPRISE]: [
    {
      title: "產品特色",
      content:
        "快速取得營業資金，活絡企業週轉。購置機器、廠房、生財器具、擴大營業、開立分店、研發產品…等資金運用。",
    },
    ,
    { title: "申請條件", content: "開業滿6個月以上之企業主 (公司負責人)" },
    { title: "貸款額度", content: "量身規劃您所需週轉額度" },
    { title: "貸款利率", content: "以月計算 (1.65%起)" },

    {
      title: "檢附文件",
      content:
        "1. 營利事業登記證 (開業滿半年以上) 負責人身份証正反面影印本<br/>2. 公司名片<br/>3. 營利事業登記證<br/>4. 最近3張401表<br/>5. 最近6個月銀行存摺往來明細<br/>6. 交易收據 或 發票.",
    },
    ,
  ],
  [PAYCHECK]: [
    { title: "產品特色", content: "立即換現" },
    { title: "申請條件", content: "年滿20歲之個人或公司行號皆可辦理。" },
    { title: "貸款額度", content: "依支票信用、擔保品條件評估。" },
    { title: "貸款利率", content: "以月計算 (1.65%起)" },
    {
      title: "檢附文件",
      content:
        "<p style='font-weight:700'>個人戶</p>1. 身分證正本<br/>2. 支票本<br/>3. 印鑑章<br/><p style='font-weight:700; margin-top: 16px;'>公司戶</p>1. 負責人身分證正本<br/>2. 支票本<br/>3. 銀行公司大小章<br/>4. 營利事業登記證<br/>5. 最近3張401表<br/>6. 最近6個月(甲存,乙存) 銀行存摺往來明細<br/><p style='font-weight:700; margin-top: 16px;'>客票</p>1. 負責人身分證正本<br/>2. 客票往來證明 (收據.發票.....)<br/>",
    },
  ],
  [STOCK]: [
    {
      title: "產品特色",
      content:
        "1. 當沖留單<br/>2. 隔日沖的推手<br/>3. 讓您充分掌握股市行情，免去違約交割風險",
    },
    {
      title: "申請條件",
      content: "年滿20歲信用良好的股市投資者之中華民國國民皆可貸款",
    },
    { title: "貸款額度", content: "全額可代墊" },
    { title: "貸款利率", content: "最低 1% 起" },
    {
      title: "檢附文件",
      content:
        "1. 身分證正本<br/>2. 近三日交易記錄及庫存明細<br/>3. 交割銀行往來明細",
    },
  ],
  [HOUSE]: [
    { title: "產品特色", content: "節省繁鎖程序" },
    { title: "申請條件", content: "年滿20歲之土地房屋所有人" },
    { title: "貸款額度", content: "量身規劃您所需週轉額度" },
    { title: "貸款利率", content: "最低 1% 起" },
    {
      title: "檢附文件",
      content:
        "1. 身分證正本<br/>2. 本地/建物所有權狀正本<br/>3. 印鑑證明<br/>4. 房貸銀行貸款餘額證明",
    },
  ],
  [PERSONAL]: [
    { title: "產品特色", content: "小額借款專區，審核通過後迅速撥款" },

    {
      title: "申請條件",
      content:
        "1. 上班族<br/>2. 需有自然人憑證<br/>3. 工作需有薪轉證明<br/>4. 小白可借",
    },
    ,
    { title: "貸款額度", content: "量身規劃您所需週轉額度" },
    { title: "貸款利率", content: "利息 (依貸款條件而定)" },
    {
      title: "檢附文件",
      content: "1. 身分證正本<br/>2. 第二證件正本 (駕照或健保卡)",
    },
  ],
//   [CAR]: [
//     {
//       title: "產品特色",
//       content:
//         "1. 各型車款皆可借款，當日立即撥款不限車齡，不限車種，免留車<br/>2. 新車、中古車、分期車、二胎車皆可輕鬆申請",
//     },
//     {
//       title: "申請條件",
//       content:
//         "1. 年滿20至57歲，職業不限<br/>2. 八大行業、攤販、均可申請<br/>3. 依權威車訊雜誌內容評估，最高可貸車價的兩倍。快速放款，新車、或分期付期滿一年、中古車皆可申請",
//     },
//     { title: "貸款額度", content: "依擔保品條件評估" },
//     { title: "貸款利率", content: "以月計算 (1.65%起)" },
//     {
//       title: "檢附文件",
//       content:
//         "<p style='font-weight:700'>個人戶</p>1. 身分證正本<br/>2. 汽車行照正本<br/>3. 新領牌照登記書<br/><p style='font-weight:700; margin-top: 16px;'>公司車車主</p>1. 營利事業登記證影本<br/>2. 負責人身分證正本<br/>3. 公司大小章<br/>4. 汽車行照正本<br/>5. 新領牌照登記書",
//     },
//   ],
};

function Services({ router }: { router: any }) {
  const {
    query: { page = ENTERPRISE },
    push,
  } = router;
  const defaultActiveKey = pageDropdownMap[page]
    ? pageDropdownMap[page]
    : pageDropdownMap[ENTERPRISE];
  const displayPage = servicesContentMap.hasOwnProperty(page)
    ? page
    : ENTERPRISE;

  return (
    <PageContainer className={PREFIX_CLASS}>
      <PageInnerContainer type="services">
        <div className="content">
          <Tab.Container
            id="left-tabs-example"
            activeKey={defaultActiveKey}
            defaultActiveKey={"ENTERPRISE"}
          >
            <Row>
              <Col md="12" lg="3">
                <h1>服務項目</h1>
                <Nav className="flex-column">
                  {Object.values(servicesTitleMap).map((service: any) => (
                    <Nav.Item
                      key={service}
                      className={cx({ active: service === displayPage })}
                    >
                      <Nav.Link
                        onClick={() => push(`/services?page=${service}`)}
                      >
                        {service}
                      </Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
              </Col>
              <Col md="12" lg="9">
                <h2>{displayPage}</h2>
                <Tab.Content>
                  {Object.values(servicesTitleMap).map((service: any) => (
                    <Tab.Pane key={service} eventKey={pageDropdownMap[service]}>
                      <Table striped bordered hover>
                        <tbody>
                          {servicesContentMap[service].map((item: any) => (
                            <tr key={item.title + item.content}>
                              <td className="title">{item.title}</td>
                              <td>
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: item.content,
                                  }}
                                />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </Tab.Pane>
                  ))}
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </PageInnerContainer>
    </PageContainer>
  );
}

export default withRouter(Services);
