import html from "html-literal";

export default () => html`
    <div id="about">
        <p id="aboutMe">
            I currently live in Washington with plans to move back to the midwest.
            I have been programming since 2021 starting in python and
            slowly learned more about different languages which lead me to start my
            degree in Software Development and Security with a minor in
            cybersecurity. I enjoy learning more about different coding projects
            and applications as well as validating the security of different
            applications. Coding gives a bunch of different problems with even
            more ways to solve them. The challenge that surrounds it excites me
            and I love learning something new each time I work on any project! Fun
            fact about me: I'm obsessed with pigs! 
        </p>
    </div>
    <div id="education">
        <p id="educationPath">
            <ul>
                <li>Started programming in Python in 2021</li>
                <li>Began my Bachelors of Science in 2022</li>
                    <ul>
                        <li>I started working in python in 2022 during my education</li>
                        <li>Then I started learning Java and SQL</li>
                        <li>I created <a href = "https://github.com/amorgan754/Secure-Python-Applications-Lab-8">Flask</a> applications which included login best practices</li>
                        <li>I had the chance to learn and work in <a href = "https://github.com/amorgan754/Secure-Programming-In-the-Cloud-Lab-4">AWS</a> creating CLI applications that manipulated in S3, DynamoDB, and learned about Lambdas</li>
                        <li>I finished my <a href = "https://g1games.netlify.app/">capstone</a> by working as a project owner and team lead to create our online game of hangman</li>
                    </ul>
                <li>I began the SavvyCoders Full Stack Web Development Bootcamp January 2024 and finished in April 2024</li>
                <li>I got my degree in Software Development and Security with a minor in Cybersecurity in May of 2024</li>
            </ul>
        </p>
    </div>
    <div id = "personal">
        <p id = "personalProjects"> My personal projects include:
            <ul>
                <li>An inprogress revamp of Captain B's Shrimp Shack's website</li>
                <li>A <a href = "https://github.com/amorgan754/Job-Application-Tracker">job application tracker</a> that is currently CLI but will become a web application</li>
                <li>Template for a <a href = "https://github.com/amorgan754/loginPage">login/registration page</a></li>
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