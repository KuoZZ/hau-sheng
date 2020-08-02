import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";

export default function MyApp({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: any;
}) {
  return <Component {...pageProps} />;
}
