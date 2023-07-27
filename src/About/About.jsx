import React from "react";

export const About = () => {
  return (
    <div>
      <div>
        <h3>Hello on my website!</h3>
        <h2>My name is Zsófia Szaniszló</h2>
        <h3>I'm a Software Developer from Hungary</h3>
      </div>
      <div id="tech_skills">
        <h1>Tech Skills</h1>
        <div>
          <p>React, Redux, PL/SQL</p>
        </div>
      </div>
      <div id="education">
        <h1>Education</h1>
        <div>
          <div>
            <p>IU University of Applied Sciences</p>
            <p>Located in Germany, taken classes online</p>
            <p>2023 - ongoing</p>
            <p>Computer Science, Bachelor's degree</p>
          </div>
        </div>
        <div>
          <p>Codecool</p>
          <p>Junior Full Stack Software Developer</p>
          <p>Budapest, Hungary 2019 - 2020</p>
        </div>
      </div>
      <div id="work">
        <h1>Work Experience</h1>
        <div>
          <p>Agco Kft.</p>
          <p>Budapest, Hungary || hybrid</p>
          <p>2021 - 2023</p>
          <p>PL/SQL, JavaScript, HTML, CSS</p>
        </div>
      </div>
      <div id="language">
        <h1>Languages</h1>

        <div>Hungarian</div>
        <div>mother tounge</div>

        <div>English</div>
        <div>C1 - advanced</div>
      </div>
    </div>
  );
};
