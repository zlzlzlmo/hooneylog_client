import 'styles/global.scss';
import wrapper from '../redux/configStore';

function MyApp({ Component, pageProps }: any) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
