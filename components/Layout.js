import Footer from './footer'
import Header from './header'

const Layout = (props) =>
<div className="App">
    <Header />
    {props.children}
    <Footer />
</div>

export default Layout