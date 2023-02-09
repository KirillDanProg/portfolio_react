import React from 'react';
import styles from "./Projects.module.scss"
import Project from "./Project";
import social from "../../assets/img/projectsImg/social.png"
import todo from "../../assets/img/projectsImg/pwa-todo.png"
import cards from "../../assets/img/projectsImg/learning-cards.png"
import hotels from "../../assets/img/projectsImg/hotels.png"
import {SubTitle} from "../../common/components/SubTitle";
import {Container} from "../../common/components/Container";

const projects = [
    {
        id: 2,
        projectName: "Cards-learning",
        img: cards,
        repo: "https://github.com/KirillDanProg/cards-friday-project",
        link: "https://cards-friday-project.vercel.app",
        description: "Educational app made with React / RTK Query / MUI"
    },
    {
        id: 1,
        projectName: "PWA-Todolist",
        img: todo,
        repo: "https://github.com/KirillDanProg/pwa-todolist.git",
        link: "https://kirilldanprog.github.io/pwa-todolist/",
        description: "Todo list app made with React/Redux toolkit"
    },
    {
        id: 0,
        projectName: "Social-network",
        img: social,
        repo: "https://github.com/KirillDanProg/social-network.git",
        // link: "https://kirilldanprog.github.io/social-network/",
        description: "App made with React with use of Rest API"
    },
    {
        id: 3,
        projectName: "Hotel search app",
        img: hotels,
        repo: "https://github.com/KirillDanProg/hotel-search-app",
        link: "https://hotel-search-app.vercel.app",
        description: "App for hotel searching"
    },
]

const mappedProjects = projects.map(pr => {
    return (
        <Project key={pr.id} {...pr}/>
    )
})

const Projects = () => {
    return (
        <Container>

            <SubTitle>My Projects</SubTitle>

            <div className={styles.projectsBox}>
                {mappedProjects}
            </div>


        </Container>
    );
};


export default Projects;
