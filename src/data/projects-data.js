import social from "../assets/img/projectsImg/social.png"
import todo from "../assets/img/projectsImg/pwa-todo.png"
import cards from "../assets/img/projectsImg/learning-cards.png"
import hotels from "../assets/img/projectsImg/hotels.png"
import telegramBot from "../assets/img/projectsImg/telegramBot.png"
import moneyTracker from "../assets/img/projectsImg/money-tracker.png"

export const projects = [
  {
      id: 4,
      projectName: "ChatGPT telegram bot",
      img: telegramBot,
      repo: "https://github.com/KirillDanProg/gpt-telegram-bot",
      link: "https://t.me/ChatGPTKiraBot",
      description:
          <div>
              This advanced bot integrates with the OpenAI API to offer:
              <ul>
              <li>1) Russian-to-English translation</li>
              <li>2) Image generation</li>
              <li>3) Dynamic conversational abilities powered by ChatGPT</li>
              </ul>
          </div>,
      mobile: true
  },
  {
    id: 5,
    projectName: "Money-tracker",
    img: moneyTracker,
    repo: "https://github.com/KirillDanProg/next-app-tracker",
    description:
           "Next.js app for expenses tracking with google autentication"
},
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