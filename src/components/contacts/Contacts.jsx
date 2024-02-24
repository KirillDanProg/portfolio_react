import { useState } from "react";
import styles from "./Contacts.module.scss";
import { useForm } from "react-hook-form";
import { SubTitle } from "../../common/components/SubTitle";
import commonStyles from "../../common/commonStyles.module.scss";
import React from "react";

const Contacts = () => {
  const [isSent, setIsSent] = useState(false);
  const messageSentToggle = () => {
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
    }, 3000);
  };
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm();
  const onSubmit = async (data) => {
    messageSentToggle();
    await fetch("https://portfolio-mailer-dt9i.vercel.app/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    reset();
    messageSentToggle();
  };
  return (
    <div id="#contact" className={styles.contacts}>
      <SubTitle>Get in touch</SubTitle>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div>
          <div className={styles.formField}>
            <input
              className={styles.name}
              {...register("name", { required: true })}
              placeholder={"name"}
            />
            {errors.name && touchedFields.name && (
              <span>This field is required</span>
            )}
          </div>

          <div className={styles.formField}>
            <input
              className={styles.email}
              {...register("email", { required: true })}
              placeholder={"email"}
            />
            {errors.email && touchedFields.email && (
              <span>This field is required</span>
            )}
          </div>
          <div className={styles.formField}>
            <input
              className={styles.subject}
              {...register("subject", { required: true })}
              placeholder={"subject"}
            />
            {errors.subject && touchedFields.subject && (
              <span>This field is required</span>
            )}
          </div>
        </div>
        <textarea {...register("message")} placeholder={"MESSAGE"} />
        <button className={commonStyles.button} type="submit">
          {isSent ? <span className={styles.done}></span> : "Send message"}
        </button>
      </form>
    </div>
  );
};

export default Contacts;
