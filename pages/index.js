import Link from 'next/link';


const Index = () =>
<div className="root">
    Welcome to next.js
    <Link href = "/currencytable">
        <a>My other page</a>
    </Link>
</div>

export default Index