const Education = () => {
  return (
    <section id="education">
      <div className="text-4xl font-bold uppercase">Education</div>
      <div className="flex">
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
  );
};

export default Education;
