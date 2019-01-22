import React from 'react'

export default () => {
  return (
    <div key="HomeDiv" className="MainContent">
      <h1>Home</h1>
      <div className="imgDiv">
        <img src="images/ID_Pro.jpg" alt="ID of Troy Aaron Richardson" height="300em" width="300em"/>
      </div>
      <div className="ProjectDiv">
        <div className="PjDiv1">
          <a href="https://glistening-apples.surge.sh">
          <img src="images/P1.png" alt="ID of Troy Aaron Richardson" height="300em" width="500em"/>

          <p>This is a basic game of the checkers board game, American checkers.

            Using rules from the website https://www.itsyourturn.com/t_helptopic2030.html.

            Coming from a C++ game development background, I wanted to test my skills in JavaScript to see want I could do. Learning to manage the flow of data, object, class, in Java was fun. I took  away the knowledge of  how to apply my C++ skill to  JavaScript.

            HTML,  CSS, JavaScript was used in the creation of this project.</p>
          </a>
        </div>
        <div className="PjDiv2">
          <a href="https://scared-match.surge.sh">
          <img src="images/P2.png" alt="ID of Troy Aaron Richardson" height="300em" width="500em"/>
          <p>This app will help user organize and delete groups of old/new emails

          This is one of my favorites projects, because I not only use Google's OAuth system to log in to gmail, but I also had to learn to decrypted the emails using an algorithm I created with base-64, utf8, and JavaScript string manipulation.

          HTML, CSS, JavaScript ,react-google-login, base-64, Axios, utf8, sanitize-html, Google Gmail API was used in the creation of this project.</p>
        </a>
      </div>
      <div className="PjDiv3">
        <a href="http://pleasant-slip.surge.sh">

        <img src="images/P3.png" alt="ID of Troy Aaron Richardson" height="300em" width="500em"/>

        <p>The app is a review aggregator for sneakers using users and reviewers scores.

          The score represent how easy it is to match the sneakers look with multiple popular styles.

          In this project I work on a team of three, my main task were to block out the app's docs, the back-end include the Auth system we implemented using passport  and JWT. Then connected the front-end to the back-end, making sure to add full CRUD to the mission critical parts of the app.

          HTML, CSS, JavaScript , React.js, Axios, node.js, sequelize.js, nodemon, pg, pg-hstore, morgan, body-parser, cors, express.js, passport, passport-jwt, git/github, PostgreSQL was used in the creation of this project.</p>
        </a>
      </div>
      <div className="PjDiv4">
        <a href="https://shrouded-ocean-71574.herokuapp.com">
        <img src="images/P4.png" alt="ID of Troy Aaron Richardson" height="300em" width="500em"/>

        <p> man’s dress watch news/review site

        What I learned from working in ruby on rails for this project, is that once you become comfortable with creating resources, and routers you may over create resources. It became too easy to create resources that it left me with the over whelming task of creating a front-end for it.

        HTML, CSS, JavaScript , React.js, Axios, node.js, ruby on rails, foreman, cors-rails, bcrypt, pry-rail, react-moment, faker, heroku, JWT, git/github, PostgreSQL was used in the creation of this project.</p>
      </a>
    </div>
  </div>

</div>
)
}
