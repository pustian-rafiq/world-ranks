import Head from 'next/head'
import Image from 'next/image'
import CountryTable from '../components/countryTable/CountryTable'
import Layout from '../components/layout/Layout'
import SerachInput from '../components/SearchInput/SearchInput'
import styles from '../styles/Home.module.css'

export default function Home({countries}) {
  console.log("countries",countries)
  return (
   <Layout>
     <div className={styles.counts}>
       Found {countries.length} countries
     </div>
     <SerachInput placeholder="Search by name, region or sub-region" />
     <CountryTable countries={countries} />
   </Layout>
  )
}

export const getStaticProps = async() => {
  const res = await fetch("https://restcountries.com/v3.1/all")
  const countries = await res.json()

  return {
    props: {
      countries,
    }
  }
}
