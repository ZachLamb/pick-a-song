
import "../styles/styles.scss";
import {Provider} from 'next-auth/client';

function Noted({ Component, pageProps }) {
    return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
    );
}

export default Noted
