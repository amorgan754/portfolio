import html from "html-literal";

export default () => html`
    <div id="about">
        <p id="aboutMe">
            I currently live in Washington with plans to move back to the midwest.
            I have been programming since 2021, starting in python and I
            slowly learned more about different languages which lead me to start my
            degree in Software Development and Security with a minor in
            Cybersecurity. I enjoy learning more through different coding projects
            and applications as well as validating the security of different
            applications. Coding gives a bunch of different problems with even
            more ways to solve them. The challenge that surrounds it excites me
            and I love learning something new each time I work on any project! Fun
            fact about me: I'm obsessed with pigs! 
        </p>
    </div>
    <div id="education">
        <p id="educationPath"> My education path includes: 
            <ul>
                <li>Started programming in Python in 2021</li>
                <li>Began my Bachelors of Science in 2022</li>
                    <ul>
                        <li>I continued working in python at the start of my education and have worked with different parts of Python including the following:</li>
                            <ul>
                                <li>Flask</li>
                                <li>Numpy</li>
                                <li>Pandas</li>
                            </ul>
                        <li>Then I started learning Java and SQL</li>
                        <li>I created a <a href = "https://github.com/amorgan754/Secure-Python-Applications-Lab-8">Flask</a> applications which included login best practices</li>
                        <li>I had the chance to learn and work in <a href = "https://github.com/amorgan754/Secure-Programming-In-the-Cloud-Lab-4">AWS</a> creating CLI applications that manipulated in S3, DynamoDB, and learned about Lambdas</li>
                        <li>I was also working on different Cybersecurity courses to start preparing and planning for the following certifications:</li>
                            <ul>
                                <li>A+</li>
                                <li>Net+</li>
                                <li>Sec+</li>
                                <li>Ethical Hacker</li>
                                <li>Cloud+</li>
                                <li>PenTest+</li>
                            </ul>
                        <li>I finished my <a href = "https://g1games.netlify.app/">capstone</a> in May 2024 by working as a project owner and team lead to create our online game of hangman</li>
                    </ul>
                <li>Began the SavvyCoders Full Stack Web Development Bootcamp January 2024 and finished in April 2024 where I completed a <a href = "https://householdhub.netlify.app/">capstone project</a></li>
                    <ul>
                        <li>I learned more indepth JavaScript, HTML, and CSS</li>
                        <li>Deployed the application using Netlify and Render</li>
                        <li>Used DOM manipulation</li>
                        <li>Created a Node.JS RESTful API to manage data stored in MongoDB</li>
                    </ul>
                <li>Finished my degree in Software Development and Security with a minor in Cybersecurity in May of 2024</li>
            </ul>
        </p>
    </div>
    <div id = "personal">
        <p id = "personalProjects"> My personal projects includes:
            <ul>
                <li>An inprogress revamp of Captain B's Shrimp Shack's website</li>
                <li>A CLI <a href = "https://github.com/amorgan754/Job-Application-Tracker">job application tracker</a> with plans to turn it into a web application</li>
                <li>Template for a <a href = "https://github.com/amorgan754/loginPage">login/registration page</a></li>
                <li>Learning more about mobile application using Flutter following tutorials to create <a href = "https://github.com/amorgan754/flutterBrickBreaker">Brick Breaker</a></li>
                <li>Learning more about Python's Turtle following tutorials to create <a href = "https://github.com/amorgan754/wordle">Wordle</a></li>
            </ul>
        </p>
    </div>
    <div id = "contact">
    <p>Click below to find me on social media</p>
        <a class="contactMe" href="https://github.com/amorgan754/">Github</a>
        <a
        class="contactMe"
        href="https://www.linkedin.com/in/ashley-morgan-92a75111a/"
        >LinkedIn</a>
    </div>
`;