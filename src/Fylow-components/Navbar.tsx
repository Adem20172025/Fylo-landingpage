import logo from "../assets/logo.svg";
export function Navbar() {
  return (
    <header className="w-full text-white flex justify-between items-center text-[12px] md:text-lg px-5 py-4 md:pb-0 md:pt-12 md:px-15">
      <img className="w-17 md:w-25" src={logo} alt="Fylo logo" />
      <nav className="flex gap-4.5 ">
        <a className="cursor-pointer opacity-50 hover:opacity-100 duration-100" href="#">Features</a>
        <a className="cursor-pointer opacity-50 hover:opacity-100 duration-100" href="#">Team</a>
        <a className="cursor-pointer opacity-50 hover:opacity-100 duration-100" href="#">Sign in</a>
      </nav>
    </header>
  );
}
