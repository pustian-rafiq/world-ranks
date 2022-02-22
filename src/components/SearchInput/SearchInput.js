import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { SearchRounded } from '@mui/icons-material';
import styles from './SearchInput.module.css'
const SerachInput = ({...rest}) => {
  return (
    <div className={styles.wrapper}>
        <SearchRounded color='inherit' />
        <input className={styles.input} {...rest} />
    </div>
  )
}

export default SerachInput