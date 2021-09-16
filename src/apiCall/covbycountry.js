import React, { } from 'react'
import axios from 'axios'
const getcovByCountr = async (country) => {
    const response = await axios
        .get(`https://disease.sh/v3/covid-19/countries/${country}/`)
        .then((res) => res.data)
    return response
}


export default getcovByCountr