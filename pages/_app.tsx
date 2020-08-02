import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "react-calendar/dist/Calendar.css";

export default function MyApp({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: any;
}) {
  return <Component {...pageProps} />;
}
