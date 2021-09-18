import React, { useEffect, useState } from 'react'
import GetGeo from './../apiCall/geo'

const useCountry = () => {
    const [country, setCountry] = useState({})
    useEffect(() => {
        GetGeo().then((res) => {
            setCountry({
                CountryCode: res.countryCode,
                Country: res.countryName,
            })
        })
    }, [])

    return { country, setCountry }
}

export default useCountry