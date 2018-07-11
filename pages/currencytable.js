import React from 'react'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'

const CurrenciesPage = (props) =>
  <Layout>
    <ul>
      {props.currencies.map((currency) => (
        <li key={currency.id}>
            {currency.country} with exchange rate: {currency.exchangerate}
            <button onClick={showModal(currency.id)}>do something </button>
        </li>
      ))}
    </ul>
    <style jsx> {`
      button {
        align: right;
      }
    `}</style>
  </Layout>

CurrenciesPage.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/currencies')
  const data = await res.json()
  console.log(`Count: ${data.length}`)
  return {
    currencies: data
  }  
}

const showModal = (id) => {
  console.log(id);
}

export default CurrenciesPage