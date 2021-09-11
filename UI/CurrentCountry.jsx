import React, { } from 'react'
import styles from './../styles/Home.module.css'

const CurrentCountry = (props) => {
    return (
        <div className={styles.current_country_container}>
            <div style={{ textAlign: "center" }}>
                <p className={styles.gl_title}>{props.titles.covidstatsinyoucountry}</p>
                <br />
            </div>
            <div className={styles.ContainerCu}>

                <div className={styles.cflag}>
                    <img
                        id={styles.flag_cur}
                        src={
                            props.flag
                                ? `https://www.countryflags.io/${props.flag}/flat/64.png`
                                : ''
                        }
                    />
                </div>
                <div className={styles.currentflex}>

                </div>
            </div>
        </div>
    )
}
export default CurrentCountry