import { KeyboardArrowDownRounded, KeyboardArrowUpRounded } from '@mui/icons-material';
import React, { useState } from 'react'
import styles from './CountryTable.module.css'

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
                <button className={styles.heading_population} onClick={() => switchValueAndDirection("population")}>
                    <div>Population</div>
                    <SortArrow direction={direction} />
                </button>
            </div>
            {
                orderedCountries.map((country) => {
                    return (
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