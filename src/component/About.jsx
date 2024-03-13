const About = () => {
  return (
    <section
      id="about"
      className="text-center md:grid md:grid-flow-col-dense justify-center items-center mx-10"
    >
      <div className="pt-8 md:mr-4 lg:mr-4 xl:mr-4">
        <div>
          <p className="text-4xl font-bold uppercase pb-4">Education</p>
        </div>
        <div>
          <p className="uppercase font-medium text-xl py-3">Codecool</p>
          <p>Junior Full-Stack Software Developer</p>
          <p>Budapest, Hungary</p>
          <p>2019 - 2020</p>
        </div>
        <div>
          <p className="uppercase font-medium text-xl py-3">
            IU University of Applied Sciences
          </p>
          <p>Bachelor's degree in Computer Science</p>
          <p>Located in Germany, taken classes online</p>
          <p>2023 - ongoing</p>
        </div>
      </div>
      <div className="pt-8">
        <div>
          <p className="text-4xl font-bold uppercase pb-4">Work Experience</p>
        </div>
        <div>
          <p className="uppercase font-medium text-xl py-3">
            Nyelvtudományi Kutatóközpont
            <br />
            Hungarian Research Cendive for Linguistics
          </p>
          <p>Budapest, Hungary || remote</p>
          <p>2023 - currently</p>
          <p>PostgreSQL, Docker, Tailwind CSS, Next.js, Svelte</p>
        </div>
        <div>
          <p className="uppercase font-medium text-xl py-3">Agco Kft.</p>
          <p>Budapest, Hungary || hybrid</p>
          <p>2021 - 2023</p>
          <p>PL/SQL, JavaScript, HTML, CSS</p>
        </div>
      </div>
      <div className="pt-8 md:ml-4 lg:ml-4 xl:ml-4">
        <div>
          <p className="text-4xl font-bold uppercase pb-4">Languages</p>
        </div>
        <div>
          <p className="uppercase font-medium text-xl py-3">Hungarian</p>
          <p>Mother Tongue</p>
        </div>
        <div>
          <p className="uppercase font-medium text-xl py-3">English</p>
          <p>C1 Advanced</p>
        </div>
      </div>
    </section>
  );
};

export default About;
