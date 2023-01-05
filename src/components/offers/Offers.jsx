import React from 'react';
import styles from "./Offers.module.css"
import {SubTitle} from "../../common/components/SubTitle";

const Offers = () => {
    return (
        <div style={{height: "100vh", width: "100%", display: "flex", alignItems: "center"}}>
            <div className={styles.offersBox}>

                <SubTitle>considering remote job offers</SubTitle>

                <a className={styles.hireBtn}>Hire me</a>

            </div>
        </div>
    );
};

export default Offers;