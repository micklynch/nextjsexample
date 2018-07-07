import Footer from './footer'
import Header from './header'

const Layout = (props) =>
<div className="App">
    <Header></Header>
    {props.children}
    <Footer></Footer>
</div>

export default Layout