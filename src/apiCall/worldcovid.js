import React, { } from 'react'
import axios from 'axios'
const WorldCovid = async () => {
    const response = await axios
        .get(`https://disease.sh/v3/covid-19/all/`)
        .then((res) => res.data)
    return response
}

export default WorldCovid