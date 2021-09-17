import React, { } from 'react'
import { Search } from "./SVG"
import styles from './../../styles/Home.module.css'
import getcovByCountr from './../apiCall/covbycountry'
const CovidSearch = (props) => {
    return (
        <div className={styles.searchResult} style={{ display: props.visibility }}>
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
                    <p id={styles.cname}>{props.country}</p>
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



export const SearchResult = (props) => {
    return (
        <div className={styles.errstatus}>
            Not Found !
        </div>
    )
}

export default CovidSearch