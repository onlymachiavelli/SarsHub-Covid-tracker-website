import React, { useEffect, useState } from 'react'
import GetGeo from './../apiCall/geo'

const useCountry = () => {
    const [country, setCountry] = useState({})
    useEffect(() => {
        GetGeo().then((Res) => {
            setCountry({
                CountryCode: Res.countryCode,
                Country: Res.countryName,
            })
        })
    }, [])

    return { country, setCountry }
}

export default useCountry