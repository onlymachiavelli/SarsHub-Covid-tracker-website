import React, { useState, useEffect } from 'react'
import axios from 'axios'
const AllWorld = async () => {
    const res = await axios.get("https://disease.sh/v3/covid-19/countries/").then(
        res => res.data
    )
    return res
}

AllWorld().then(res => console.log(res))
const World = () => {
    return (
        <div></div>
    )
}
export default World