import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // the
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/globals.css';

import { store } from './../redux/store';
import { Provider } from 'react-redux';

import { oneOfType, any, object } from 'prop-types';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

MyApp.propTypes = {
  Component: oneOfType([any]).isRequired,
  pageProps: object,
};

export default MyApp;
