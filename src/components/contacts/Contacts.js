import React from 'react';
import styles from "./Contacts.module.css"




const Contacts = () => {
    return (
        <div className={styles.contacts}>

            <form className={styles.form}>
                <input placeholder={"name"}/>
                <input placeholder={"some field"}/>
                <textarea/>
                <button>Send request</button>
            </form>

        </div>
    );
};

export default Contacts;