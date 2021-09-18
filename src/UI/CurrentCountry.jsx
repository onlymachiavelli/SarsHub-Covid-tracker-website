import React, { } from 'react'
import styles from './../../styles/Home.module.css'

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
                    <p id={styles.cname}>{props.country === "Tunisia" ? props.country + " Lkalba" : props.country}</p>
                </div>
                <div className={styles.currentflex}>
                    <div className={styles.currentcard}>
                        <p>{props.titles.totalcases}</p>
                        <p>{props.tcases}</p>
                    </div>
                    <div className={styles.currentcard} id={styles.death_card}>
                        <p>{props.titles.totaldeathcases}</p>
                        <p>{props.tdeaths}</p>
                    </div>
                </div>

                <div className={styles.currentflex} >
                    <div className={styles.currentcard} id={styles.recovered_card}>
                        <p>{props.titles.totalrecoveredcases}</p>
                        <p>{props.trec}</p>
                    </div>
                    <div className={styles.currentcard}>
                        <p>{props.titles.todaycases}</p>
                        <p>+ {props.tdcases}</p>
                    </div>
                </div>

                <div className={styles.currentflex}>
                    <div className={styles.currentcard} id={styles.death_card}>
                        <p>{props.titles.todaydeaths}</p>
                        <p>+ {props.tddeaths}</p>
                    </div>
                    <div className={styles.currentcard} id={styles.recovered_card}>
                        <p>{props.titles.todayrecovered}</p>
                        <p>+ {props.tdrec}</p>
                    </div>
                </div>


                <div className={styles.currentflex}>
                    <div className={styles.currentcard}>
                        <p>{props.titles.activecases}</p>
                        <p>{props.active}</p>
                    </div>
                    <div className={styles.currentcard} id={styles.critical}>
                        <p>{props.titles.critical}</p>
                        <p>{props.crit}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CurrentCountry