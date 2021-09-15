import React, { } from 'react'
import { Search } from "./SVG"
import styles from './../../styles/Home/module.css'
const CovidSearch = (props) => {
    return (
        <div className={styles.searchResult} style={{ display: props.visibility }}>

        </div>
    )
}
export default CovidSearch