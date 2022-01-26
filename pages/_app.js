import '../styles/globals.css';
import 'semantic-ui-css/semantic.min.css';
import Footer from '../src/component/Footer';
import Top from '../src/component/Top';

function MyApp({ Component, pageProps }) {
  return (
    <div style={{maxWidth:"1200px", margin:"0 auto", padding:"0 20px"}}>
      <Top />      
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
