const About = () => {
  return (
    <section id="about" className="px-5 md:flex justify-center md:bg-slate-400">
      <div className="mb-10 md:pr-5 lg:max-w-5xl">
        <h2 className="hidden md:block md:pt-3 md:pb-16 md:text-4xl">Sobre</h2>
        <h3 className="text-4xl font-bold mb-5">Leonardo Buziki</h3>
        <p className="">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque dolor, commodi aut
          assumenda officia porro est error ipsa. Officia alias architecto at consequuntur tempore
          officiis, voluptatum eaque possimus atque libero!
        </p>
      </div>
      <img
        src="/images/photos/imagem de exemplo.jpg"
        alt="Foto do Leonardo"
        className="w-full md:max-w-72 md:py-14"
      />
    </section>
  );
};

export { About };