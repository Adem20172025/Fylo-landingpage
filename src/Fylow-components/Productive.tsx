import productive from "../assets/illustration-stay-productive.png"
import arrow from "../assets/icon-arrow.svg"
export function Productive() {
  return (
    <section className="w-full flex flex-col md:flex-row gap-4 px-5 text-white md:max-w-[75%] md:items-center md:gap-15">
      <img className="md:w-130" src={productive} alt="productive image" />
      <article className="flex flex-col gap-4">
        <h2 className="text-lg md:text-4xl font-bold">Stay productive, wherever you are</h2>
        <p className="text-[14px]">
          Never let location e an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p className="text-[14px]">
          Securely share files and folders friends. family and colleagues for
          live collaboration. No email attachments required.
        </p>
        <div className="flex gap-2 items-center text-[14px] w-fit border-b-2 border-b-teal-500 text-teal-500 cursor-pointer opacity-60 hover:opacity-100 duration-200 pb-0.5">
            <p>See how Fylow works</p>
            <img src={arrow} alt="arrow image" />
        </div>
      </article>
    </section>
  );
}
