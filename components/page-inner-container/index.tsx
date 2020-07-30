import { convertedImgUrl } from "../utils";
import "./style.styl";
import { ReactNode } from "react";

const PREFIX_CLASS = "page-inner-container";

export default function PageInnerContainer({
  type,
  children,
}: {
  type: string;
  children: ReactNode;
}) {
  return (
    <div className={PREFIX_CLASS}>
      <section>
        <img src={convertedImgUrl(`/images/${type}-01.jpg`)} />
      </section>
      <section>{children}</section>
      <section>
        <img src={convertedImgUrl(`/images/${type}-bg.jpg`)} />
      </section>
    </div>
  );
}
