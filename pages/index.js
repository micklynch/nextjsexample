import Layout from '../components/Layout'
import Link from 'next/link';
import About from './about'
import CurrenciesPage from './currencytable';


const Index = () =>
<Layout>   
    <Link href = "/about">
        <a>My other page</a>
    </Link>
</Layout>

export default Index