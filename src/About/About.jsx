import React from "react";
import profilePic from "../pics/profile.jpg";
import { Skills } from "./TechSkills";

export const About = () => {
  return (
    <div>
      {/* Home Page */}
      <section id="home" className="inline-flex pl-40 ms:grid">
        <div>
          <div className="py-20 text-6xl">Welcome!</div>
          <div className="py-8 text-4xl">My name is Zsófia Szaniszló</div>
          <div className="py-8 text-4xl">
            I'm a Software Developer from Hungary
          </div>
        </div>
        <div className="ml-40 pt-20">
          <img style={{ width: "440px" }} src={profilePic} />
        </div>
        {/* Tech Skills */}
      </section>
      <section id="tech_skills" className="lg:block">
        <div className="text-4xl uppercase text-center pt-10 pb-16">
          Tech Skills
        </div>
        <Skills />
      </section>
      {/* Education */}
      <section id="education">
        <div className="text-4xl uppercase text-center pt-10">Education</div>
        <div className="inline-flex justify-center">
          <div className="pr-5">
            <p className="uppercase font-medium text-xl pb-3">Codecool</p>
            <p className="py-2">Junior Full-Stack Software Developer</p>
            <p className="py-2">Budapest, Hungary</p>
            <p className="py-2">2019 - 2020</p>
          </div>
          <div className="inline-block h-[250px] min-h-[1em] w-0.5 self-stretch bg-white opacity-80"></div>
          <div className="pl-5">
            <p className="uppercase font-medium text-xl pb-3">
              IU University of Applied Sciences
            </p>
            <p className="py-2">Bachelor's degree in Computer Science</p>
            <p className="py-2">Located in Germany, taken classes online</p>
            <p className="py-2">2023 - ongoing</p>
          </div>
        </div>
      </section>
      <section id="work">
        <h1>Work Experience</h1>
        <div>
          <p>Agco Kft.</p>
          <p>Budapest, Hungary || hybrid</p>
          <p>2021 - 2023</p>
          <p>PL/SQL, JavaScript, HTML, CSS</p>
        </div>
      </section>
      <section id="language">
        <h1>Languages</h1>

        <div>Hungarian</div>
        <div>mother tounge</div>

        <div>English</div>
        <div>C1 - advanced</div>
      </section>
    </div>
  );
};
