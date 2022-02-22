import React from 'react'
import styles from './CountryTable.module.css'
const CountryTable = ({countries}) => {
  return (
    <div>
        <div className={styles.heading}>
            <button className={styles.heading_name}>
                <div>Name</div>
            </button>
            <button className={styles.heading_population}>
                <div>Population</div>
            </button>
        </div>
        {
            countries.map( (country) => {
                return(
                    <div className={styles.row} key={country.name.common}>
                        <div className={styles.name}>{country.name.common}</div>
                        <div className={styles.population}>{country.population}</div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default CountryTable