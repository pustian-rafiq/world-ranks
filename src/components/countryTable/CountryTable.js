import { KeyboardArrowDownRounded, KeyboardArrowUpRounded } from '@mui/icons-material';
import React, { useState } from 'react'
import styles from './CountryTable.module.css'
import Link from 'next/link'
// Sort the countries table according to population
const orderBy = (countries,value, direction) => {
    if (direction === 'asc') {
        return [...countries].sort((a, b) => a[value] > b[value] ? 1 : -1);
    }
    if (direction === 'desc') {
        return [...countries].sort((a, b) => a[value] > b[value] ? -1 : 1);
    }
    return countries;
}
// Sort the countries table according to population
const SortArrow = ({ direction }) => {
    if (!direction) {
        return <></>
    }
    if (direction === 'desc') {
        return (
            <div className={styles.heading_arrow}>
                <KeyboardArrowDownRounded />
            </div>
        )
    } else {
        return (
            <div className={styles.heading_arrow}>
                <KeyboardArrowUpRounded />
            </div>
        )
    }

}

const CountryTable = ({ countries }) => {
    const [direction, setDirection] = useState()
    const [value, setValue] = useState()
    const orderedCountries = orderBy(countries, value, direction);

    const switchDirection = () => {
        if (!direction) {
            setDirection("desc")
        } else if (direction === "desc") {
            setDirection("asc")
        } else {
            setDirection(null)
        }
    }

    const switchValueAndDirection = (value) => {
        switchDirection();
        setValue(value)
    }
    return (
        <div>
            <div className={styles.heading}>
                <button className={styles.heading_name} onClick={() => switchValueAndDirection("name")}>
                    <div>Name</div>
                    <SortArrow />

                </button>
                <button className={styles.heading_region} onClick={() => switchValueAndDirection("name")}>
                    <div>Region</div>
                    <SortArrow />

                </button>
                <button className={styles.heading_subregion} onClick={() => switchValueAndDirection("name")}>
                    <div>Sub Region</div>
                    <SortArrow />

                </button>
                <button className={styles.heading_flag} onClick={() => switchValueAndDirection("name")}>
                    <div>Flag</div>
                    <SortArrow />

                </button>
                <button className={styles.heading_population} onClick={() => switchValueAndDirection("population")}>
                    <div>Population</div>
                    <SortArrow direction={direction} />
                </button>
            </div>
            {
                orderedCountries.map((country) => {
                    return (
                        <Link href={`country/${country.ccn3}`} key={country.name.common}>
                         <div className={styles.row} key={country.name.common}>
                            <div className={styles.name}>{country.name.common}</div>
                            <div className={styles.region}>{country.region}</div>
                            <div className={styles.subregion}>{country.subregion}</div>
                            <div className={styles.flag}>{country.flag}</div>
                            <div className={styles.population}>{country.population}</div>
                        </div>
                        </Link>
                       
                    )
                })
            }
        </div>
    )
}

export default CountryTable