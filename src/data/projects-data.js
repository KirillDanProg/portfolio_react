import social from "../assets/img/projectsImg/social.png";
import book from "../assets/img/projectsImg/book-app.png";
import cards from "../assets/img/projectsImg/learning-cards.png";
import hotels from "../assets/img/projectsImg/hotels.png";
import telegramBot from "../assets/img/projectsImg/telegramBot.png";
import moneyTracker from "../assets/img/projectsImg/money-tracker.png";

export const projects = [
  {
    id: 4,
    projectName: "ChatGPT telegram bot",
    img: telegramBot,
    repo: "https://github.com/KirillDanProg/gpt-telegram-bot",
    description: (
      <div>
        This advanced bot integrates with the OpenAI API to offer:
        <ul>
          <li>1. Russian-to-English translation</li>
          <li>2. Image generation</li>
          <li>3. Dynamic conversational abilities powered by ChatGPT</li>
        </ul>
      </div>
    ),
    mobile: true,
  },
  {
    id: 1,
    projectName: "Book-search app",
    img: book,
    repo: "https://github.com/KirillDanProg/book-app.git",
    link: "https://kirilldanprog.github.io/book-app/",
    description: (
      <div>
        <strong>Stack: Vanilla JS / rollup / classes</strong>
        <ul>
          <li>Functionality</li>
          <li>1. Books search by title, author, or genre.</li>
          <li>2. Results Display</li>
          <li>3. Pagination </li>
          <li>4. Detail View </li>
          <li>5. Favorite Books</li>
          <li>6. User Feedback</li>
          <li>7. Responsive Design</li>
        </ul>
      </div>
    ),
  },
  {
    id: 3,
    projectName: "Hotel search app",
    img: hotels,
    repo: "https://github.com/KirillDanProg/hotel-search-app",
    link: "https://hotel-search-app.vercel.app",
    description: (
      <div>
        <strong>Stack:</strong>
        <ul>
          <li>1. React</li>
          <li>2. TypeScript</li>
          <li>3. Redux Toolkit</li>
          <li>4. Material-UI Core</li>
          <li>5. SASS</li>
        </ul>
      </div>
    ),
  },
  {
    id: 5,
    projectName: "Money-tracker",
    img: moneyTracker,
    repo: "https://github.com/KirillDanProg/next-app-tracker",
    description: "Next.js app for expenses tracking with google autentication",
  },
  {
    id: 2,
    projectName: "Cards-learning",
    img: cards,
    repo: "https://github.com/KirillDanProg/cards-friday-project",
    link: "https://cards-friday-project.vercel.app",
    description: "Educational app made with React / RTK Query / MUI",
  },
  {
    id: 0,
    projectName: "Social-network",
    img: social,
    repo: "https://github.com/KirillDanProg/social-network.git",
    // link: "https://kirilldanprog.github.io/social-network/",
    description: "App made with React with use of Rest API",
  },
];
