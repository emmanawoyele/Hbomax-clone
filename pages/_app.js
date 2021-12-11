// import '../styles/styles.scss'
import {HBOProvider} from '../component/HboProvider/hboprovider'


function MyApp({ Component, pageProps }) {
  return(
    <HBOProvider>
<Component {...pageProps} />
    </HBOProvider>
     )
}

export default MyApp
