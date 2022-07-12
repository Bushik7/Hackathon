import React from "react";
import { useSelector } from "react-redux";
import { getUsersList } from "../../../store/usersSlice";
import "./badges.css";

const Badges = ({ userId }) => {
  const users = useSelector(getUsersList());
  const currentUser = users[userId - 1];
  const badgesCurrentUser = currentUser.badges;
  
  const badges = [
    {
      id: "css",
      name: "Css",
      path: "https://img.shields.io/badge/css-1572B6.svg?&style=for-the-badge&logo=css3&logoColor=fff",
    },
    {
      id: "bootstrap",
      name: "Bootstrap",
      path: "https://img.shields.io/badge/bootstrap-7610F7.svg?&style=for-the-badge&logo=bootstrap&logoColor=fff",
    },
    {
      id: "git",
      name: "Git",
      path: "https://img.shields.io/badge/git-f05133.svg?&style=for-the-badge&logo=git&logoColor=fff",
    },
    {
      id: "react",
      name: "React",
      path: "https://img.shields.io/badge/react-333333.svg?&style=for-the-badge&logo=react&logoColor=3DDAFD",
    },
    {
      id: "html",
      name: "Html",
      path: "https://img.shields.io/badge/html-F6843F.svg?&style=for-the-badge&logo=html5&logoColor=fff",
    },
    {
      id: "javascript",
      name: "javascript",
      path: "https://img.shields.io/badge/javascript-F7DF1E.svg?&style=for-the-badge&logo=javascript&logoColor=000000",
    },
    {
      id: "webpack",
      name: "webpack",
      path: "https://img.shields.io/badge/webpack-2C3A43.svg?&style=for-the-badge&logo=webpack&logoColor=55A7DE",
    },
    {
      id: "redux",
      name: "redux",
      path: "https://img.shields.io/badge/redux-303030.svg?&style=for-the-badge&logo=redux&logoColor=7647BF",
    },
    {
      id: "firebase",
      name: "firebase",
      path: "https://img.shields.io/badge/firebase-FBCB2B.svg?&style=for-the-badge&logo=firebase&logoColor=F7810B",
    },
    {
      id: "markdown",
      name: "Markdown",
      path: "https://img.shields.io/badge/markdown-000.svg?&style=for-the-badge&logo=markdown&logoColor=fff",
    },
    {
      id: "mongodb",
      name: "MongoDB",
      path: "https://img.shields.io/badge/mongodb-26A944.svg?&style=for-the-badge&logo=mongodb&logoColor=fff",
    },
    {
      id: "gulp",
      name: "Gulp",
      path: "https://img.shields.io/badge/gulp-e84c51.svg?&style=for-the-badge&logo=gulp&logoColor=000",
    },
    {
      id: "vue",
      name: "Vue",
      path: "https://img.shields.io/badge/vue-41b883.svg?&style=for-the-badge&logo=vue&logoColor=fff",
    },
  ];

  const getBadge = (badgeCurrent) => {
    return badges.find((badge) => {
      return badge.id === badgeCurrent;
    });
  };

  return (
    <div className="badges">
      {badgesCurrentUser.map((badge, i) => (
        <div className="me-2 badges__item" key={i}>
          <img alt={getBadge(badge).name} srcSet={getBadge(badge).path} />
        </div>
      ))}
    </div>
  );
};

export default Badges;
