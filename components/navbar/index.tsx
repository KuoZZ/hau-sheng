import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { withRouter } from "next/router";
import { convertedImgUrl } from "../utils";
import constant from "../constant";

function CustomizeNavbar({
  router,
  servicesTitleMap,
}: {
  router: any;
  servicesTitleMap: any;
}) {
  const { push } = router;
  return (
    <Navbar expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-center">
          <Nav.Link onClick={() => push("/about")}>關於我們</Nav.Link>
          <NavDropdown title="服務項目" id="nav-dropdown">
            {Object.values(servicesTitleMap).map((service: any) => (
              <NavDropdown.Item
                key={service}
                onClick={() => push(`/services?page=${service}`)}
              >
                {service}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
          <Nav.Link onClick={() => push("/news")}>最新消息</Nav.Link>
          <Nav.Link onClick={() => push("/contact-us")}>聯絡我們</Nav.Link>
          <Nav className="img-link">
            <Nav.Link href={constant.line} target="_blank">
              <img src={convertedImgUrl("/images/social-line-s.png")} />
            </Nav.Link>
            <Nav.Link href={constant.fb} target="_blank">
              <img src={convertedImgUrl("/images/social-fb-s.png")} />
            </Nav.Link>
            <Nav.Link href={constant.instgrame} target="_blank">
              <img src={convertedImgUrl("/images/social-ig-s.png")} />
            </Nav.Link>
          </Nav>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default withRouter(CustomizeNavbar);
