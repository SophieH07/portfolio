const About = () => {
  return (
    <section
      id="about"
      className="text-center md:grid md:grid-flow-col-dense justify-center items-center"
    >
      <div className="mr-0 md:mr-10">
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
          <p>Located in Germany, taking classes online</p>
          <p>2023 - ongoing</p>
        </div>
      </div>
      <div className="ml-0 md:ml-10">
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
