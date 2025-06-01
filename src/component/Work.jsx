const Work = () => {
  return (
    <section id="work" className="text-center">
      <div>
        <div>
          <p className="text-4xl font-bold uppercase pb-4">Work Experience</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <p className="uppercase font-medium text-xl py-3">Prefixbox</p>
            <p>Technical Account Manager</p>
            <p>Budapest, Hungary || hybrid</p>
            <p>2025 - currently</p>
            <p></p>
          </div>
          <div>
            <p className="uppercase font-medium text-xl py-3">
              Dialogue Creatives
            </p>
            <p>Frontend Developer</p>
            <p>Budapest, Hungary || hybrid</p>
            <p>2024 - 2025</p>
            <p></p>
          </div>
          <div>
            <p className="uppercase font-medium text-xl py-3">
              Nyelvtudományi Kutatóközpont
              <br />
              Hungarian Research Centre for Linguistics
            </p>
            <p>Software Developer</p>
            <p>Budapest, Hungary || remote</p>
            <p>2023 - 2025</p>
            <p>PostgreSQL, Docker, Tailwind CSS, Next.js, Svelte</p>
          </div>
          <div>
            <p className="uppercase font-medium text-xl py-3">Agco Kft.</p>
            <p>Software Developer</p>
            <p>Budapest, Hungary || hybrid</p>
            <p>2021 - 2023</p>
            <p>PL/SQL, JavaScript, HTML, CSS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
