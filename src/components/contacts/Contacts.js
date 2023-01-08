import React from 'react';
import styles from "./Contacts.module.scss"
import {useForm} from "react-hook-form";
import axios from "axios";
import {SubTitle} from "../../common/components/SubTitle";
import commonStyles from "../../common/commonStyles.module.scss"

const Contacts = () => {
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const onSubmit = async data => {
        const res = await axios.post("https://portfolio-mailer-dt9i.vercel.app/send-email", data)

    }
    return (
        <div className={styles.contacts}>

            <SubTitle>Get in touch</SubTitle>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <div>
                    <input className={styles.name}
                           {...register("name", {required: true})}
                           placeholder={"name"}/>
                    <input className={styles.email}
                           {...register("email", {required: true})}
                           placeholder={"email"}/>
                    <input className={styles.subject}
                           {...register("subject", {required: true})}
                           placeholder={"subject"}/>
                </div>
                <textarea  {...register("message")} placeholder={"MESSAGE"}/>
                <button className={commonStyles.button} type="submit">Send message</button>
            </form>
        </div>
    );
};

export default Contacts;