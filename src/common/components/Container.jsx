import React from 'react';
import containerStyle from "../commonStyles.module.scss";

export const Container = (props) => {
    return (
        <div className={containerStyle.container}>
            {props.children}
        </div>
    );
};
