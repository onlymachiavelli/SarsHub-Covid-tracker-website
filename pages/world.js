import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './../styles/World.module.css'
const AllWorld = async () => {
    const res = await axios.get("https://disease.sh/v3/covid-19/countries/").then(
        res => res.data
    )
    return res
}

AllWorld().then(res => console.log(res))
const World = () => {
    return (
        <div className={styles.world}></div>
    )
}
export default World