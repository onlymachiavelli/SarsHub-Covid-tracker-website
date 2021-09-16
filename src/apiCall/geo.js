import React, { } from 'react'
import axios from 'axios'
const GetGeo = async () => {
    const response = await axios
        .get(`https://api.db-ip.com/v2/free/self`)
        .then((res) => res.data)
    return response
}
export default GetGeo