export function GetAccess() {
  return (
    <section className="relative px-4 -mb-40 md:-mb-25 z-50 w-full md:max-w-[60%]">
      <article className="bg-850 p-7 rounded-lg shadow flex flex-col gap-4 text-white items-center text-center ">
        <h2 className="font-bold text-lg">Get early access today</h2>
        <p className="text-[14px]">
          it only takes a minute to sign up and our free starter tier is
          extremely generous. if you have any questions, our support team would
          be happy to help you.
        </p>
        <form className=" flex flex-col md:flex-row gap-5 w-full items-center">
          <input
            className="bg-white placeholder:text-gray-500 p-2.5 w-[98%] rounded-full pl-7 placeholder:text-[12px] md:w-2/3 outline-0"
            type="email"
            placeholder="email@example.com"
          />
          <button className="md:w-1/3 bg-linear-to-r from-teal-200 to-cyan-500 w-[98%] rounded-full p-2.5 cursor-pointer hover:shadow-[2px_3px_4px_rgb(0,0,0)] text-white">
            Get Started For Free
          </button>
        </form>
      </article>
    </section>
  );
}
