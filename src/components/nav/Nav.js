import React from 'react';
import styles from "./Nav.module.css"

const  links = [
    {id: 0, title: "Main"},
    {id: 1, title: "Skills"},
    {id: 2, title: "Projects"},
    {id: 3, title: "Contacts"},
]

const mappedLinks = links.map(link => {
    return (
        <li key={link.id} className={styles.item}><a href={"#"}>{link.title}</a></li>
    )
})

const Nav = () => {
    return (
        <div className={styles.nav}>
            <ul className={styles.list}>
                {mappedLinks}
            </ul>

        </div>
    );
};

export default Nav;