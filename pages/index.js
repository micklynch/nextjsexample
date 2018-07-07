import Layout from '../components/Layout'
import Link from 'next/link';
import About from './about'


const Index = () =>
<Layout>
    <About></About>    
    <Link href = "/currencytable">
        <a>My other page</a>
    </Link>
</Layout>

export default Index