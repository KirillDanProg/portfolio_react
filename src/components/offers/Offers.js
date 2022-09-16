import React from 'react';
import commonStyles from "../../common/commonStyles.module.css"
import styles from "./Offers.module.css"

const Offers = () => {
    return (
        <div style={{height: "100vh", width: "100%", display: "flex", alignItems: "center"}}>
            <div className={styles.offersBox}>

                <h2 style={{color: "whitesmoke", marginBottom: "50px"}} className={commonStyles.title}>
                   accept remote job offers</h2>

                <a className={styles.hireBtn}>Hire me</a>

            </div>
        </div>
    );
};

export default Offers;