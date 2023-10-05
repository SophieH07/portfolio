const Language = () => {
  return (
    <section id="language">
      <div className="text-4xl font-bold uppercase">Languages</div>
      {/* <div className="text-center uppercase">
        <div className="lg:text-xl font-medium">Hungarian</div>
        <div>mother tounge</div>
        <hr className="sm:my-2 md:my-6 lg:my-12 h-0.5 border-t-0 w-52 bg-neutral-100 opacity-100 dark:opacity-50" />
        <div className="lg:text-xl font-medium">English</div>
        <div>C1 - advanced</div>
        <hr className="sm:my-2 md:my-6 lg:my-12 h-0.5 border-t-0 w-52 bg-neutral-100 opacity-100 dark:opacity-50" />
        <div className="lg:text-xl font-medium">French</div>
        <div>A1 - curently learning</div>
      </div> */}
      <div className="text-center uppercase">
        <div className="lg:text-xl font-medium">Hungarian</div>
        <div className="p-1">mother tounge</div>
        <hr className=" h-0.5 border-t-0 w-52 bg-neutral-100 opacity-100 dark:opacity-50" />
        <div className="p-2 lg:text-xl font-medium">English</div>
        <div className="p-1">C1 - advanced</div>
        <hr className="h-0.5 border-t-0 w-52 bg-neutral-100 opacity-100 dark:opacity-50" />
        <div className="p-2 lg:text-xl font-medium">French</div>
        <div className="p-1">A1 - curently learning</div>
      </div>
    </section>
  );
};

export default Language;
