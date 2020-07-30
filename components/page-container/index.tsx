import { ReactNode } from "react";
import cx from "classnames";
import CustomizNavbar from "../navbar";
import TopBar from "../top-bar";
import FootBar from "../footer-bar";
import constant from "../constant";
import "./style.styl";

const PREFIX_CLASS = "page-container";
const { servicesTitleMap } = constant;
const { ENTERPRISE, PAYCHECK, STOCK, HOUSE, CAR, PERSONAL } = servicesTitleMap;
const pageDropdownMap = {
  [ENTERPRISE]: "ENTERPRISE",
  [PAYCHECK]: "PAYCHECK",
  [STOCK]: "STOCK",
  [HOUSE]: "HOUSE",
  [CAR]: "CAR",
  [PERSONAL]: "PERSONAL",
};

function PageContainer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cx(PREFIX_CLASS, className)}>
      <TopBar />
      <CustomizNavbar servicesTitleMap={servicesTitleMap} />
      {children}
      <FootBar />
    </div>
  );
}

PageContainer.pageDropdownMap = pageDropdownMap;

export default PageContainer;
