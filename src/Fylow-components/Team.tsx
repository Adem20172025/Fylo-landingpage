import quote from "../assets/bg-quotes.png";
import satish from "../assets/profile-1.jpg";
import bruce from "../assets/profile-2.jpg";
import iva from "../assets/profile-3.jpg"
export function Team() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center px-7 text-white gap-7 md:max-w-[75%]">
      <article className="bg-navy-800 p-5 relative flex flex-col gap-5 rounded-lg">
        <img
          className="absolute w-5 bottom-full left-2"
          src={quote}
          alt="quote icon"
        />
        <p className="text-[14px]">
          Fylo has improved our team productivity by an order of magnitude .
          since making the swich our team has become a well-oiled collaboration
          machine.
        </p>
        <div className="flex items-center gap-3">
          <img className="w-8 rounded-full" src={satish} alt="satish patel" />
          <div>
            <h3 className="text-md">Satish Patel</h3>
            <p className="text-[10px]">Founder & CEO, Huddle</p>
          </div>
        </div>
      </article>
      <article className="bg-navy-800 p-5 flex flex-col gap-5 rounded-lg">
        <p className="text-[14px]">
          Fylo has improved our team productivity by an order of magnitude .
          since making the swich our team has become a well-oiled collaboration
          machine.
        </p>
        <div className="flex items-center gap-3">
          <img className="w-8 rounded-full" src={bruce} alt="bruce McKenzie" />
          <div>
            <h3 className="text-md">Bruce McKenzie</h3>
            <p className="text-[10px]">Founder & CEO, Huddle</p>
          </div>
        </div>
      </article>
      <article className="bg-navy-800 p-5 flex flex-col gap-5 rounded-lg">
        <p className="text-[14px]">
          Fylo has improved our team productivity by an order of magnitude .
          since making the swich our team has become a well-oiled collaboration
          machine.
        </p>
        <div className="flex items-center gap-3">
          <img className="w-8 rounded-full" src={iva} alt="Iva Boyd" />
          <div>
            <h3 className="text-md">Iva Boyd</h3>
            <p className="text-[10px]">Founder & CEO, Huddle</p>
          </div>
        </div>
      </article>
    </section>
  );
}
