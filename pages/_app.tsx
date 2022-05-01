import 'styles/global.scss';
import type { AppProps } from 'next/app';
import wrapper from '../redux/configStore';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
