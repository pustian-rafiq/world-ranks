import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import CountryTable from '../components/countryTable/CountryTable'
import Layout from '../components/layout/Layout'
import SerachInput from '../components/SearchInput/SearchInput'
import styles from '../styles/Home.module.css'

export default function Home({countries}) {
  console.log("countries",countries)
 const [keyword, setKeyword] = useState("")

 const filteredCountries = countries.filter((country) => {
  console.log("countries",country.subregion)
 return (
  country.name.common.toLowerCase().includes(keyword) ||
  country.region.toLowerCase().includes(keyword) ||
  country.subregion?.toLowerCase().includes(keyword) 
 )
 })
 
 const onInputChange = (e) => {
   e.preventDefault()
   setKeyword(e.target.value.toLowerCase())
 }
 console.log(filteredCountries)
  return (
   <Layout>
     <div className={styles.counts}>
       Found {countries.length} countries
     </div>
     <SerachInput placeholder="Search by name, region or sub-region" onChange={onInputChange} />
     <CountryTable countries={filteredCountries} />
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
