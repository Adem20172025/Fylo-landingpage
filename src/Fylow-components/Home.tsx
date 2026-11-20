import introImg from "../assets/illustration-intro.png";
export function Home() {
  return (
    <section className="md:max-w-[50%] flex flex-col gap-6 p-7 md:pt-0 md:gap-10 w-full md:items-center">
      <img className="md:w-160" src={introImg} alt="illustration intro" />
      <article className="flex flex-col gap-5 text-white text-center items-center">
        <h1 className="font-bold text-xl opacity-90">
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className="text-[14px] opacity-85">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need share and collaborate with friends
          family, and co-workers.
        </p>
        <button className="bg-linear-to-r from-teal-200 to-cyan-500 w-[80%] md:max-w-70 rounded-full p-1.5 cursor-pointer hover:shadow-[2px_3px_4px_rgb(0,0,0)]">
          Get Started
        </button>
      </article>
    </section>
  );
}
