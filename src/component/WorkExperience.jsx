const WorkExperience = () => {
  return (
    <section id="work">
      <div className="text-4xl font-bold uppercase">Work Experience</div>
      <div className="text-center">
        <p>
          Nyelvtudományi Kutatóközpont - Hungarian Research Centre for
          Linguistics
        </p>
        <p>Budapest, Hungary || remote</p>
        <p>2023 - currently</p>
        <p>PostgreSQL, Docker, Tailwind CSS, Next.js, Svelte</p>
      </div>
      <hr className="h-0.5 w-1/2 bg-neutral-100 opacity-80" />
      <div className="text-center">
        <p>Agco Kft.</p>
        <p>Budapest, Hungary || hybrid</p>
        <p>2021 - 2023</p>
        <p>PL/SQL, JavaScript, HTML, CSS</p>
      </div>
    </section>
  );
};

export default WorkExperience;
