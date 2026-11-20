import logo from "../assets/logo.svg";
import location from "../assets/icon-location.svg";
import phone from "../assets/icon-phone.svg";
import email from "../assets/icon-email.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
export function Footer() {
  return (
    <footer className="bg-navy-950 text-gray-300 p-7 flex flex-col md:flex-row md:justify-between gap-15 text-[14px] font-semibold pt-50 z-10 w-full md:px-20">
      <div className="flex flex-col md:flex-row gap-5 md:justify-between">
        <article className="flex flex-col gap-7 md:max-w-100 ">
          <img className="w-40" src={logo} alt="logo icon" />
          <div className="flex gap-5 items-start">
            <img className="size-4" src={location} alt="location icon" />
            <a
              href="https://www.google.com/maps/search/?api=1&query=Adama%2C+Ethiopia"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline decoration-teal-500"
            >
              Adama, Oromia, Ethiopia — a vibrant city located southeast of
              Addis Ababa.
            </a>
          </div>
        </article>
        <article className="flex flex-col gap-4">
          <div className="flex gap-5 items-center ">
            <img className="size-4" src={phone} alt="phone icon" />
            <a
              href="tel:+251996676521"
              className="hover:underline underline-offset-5 decoration-teal-500"
            >
              +251-996-67-6521
            </a>
          </div>
          <div className="flex gap-5 items-center">
            <img className="size-4" src={email} alt="email icon" />
            <a
              href="mailto:ademhussein2015@gmail.com"
              className="hover:underline underline-offset-5 decoration-teal-500"
            >
              ademhussein2015@gmail.com
            </a>
          </div>
        </article>
      </div>
      <ul className="flex flex-col gap-3">
        <li className="cursor-pointer opacity-70 hover:opacity-100 transition-all">
          Aout Us
        </li>
        <li className="cursor-pointer opacity-70 hover:opacity-100 transition-all">
          Jobs
        </li>
        <li className="cursor-pointer opacity-70 hover:opacity-100 transition-all">
          Press
        </li>
        <li className="cursor-pointer opacity-70 hover:opacity-100 transition-all">
          Blog
        </li>
      </ul>
      <ul className="flex flex-col gap-3">
        <li className="cursor-pointer opacity-70 hover:opacity-100 transition-all">
          Contact Us
        </li>
        <li className="cursor-pointer opacity-70 hover:opacity-100 transition-all">
          Terms
        </li>
        <li className="cursor-pointer opacity-70 hover:opacity-100 transition-all">
          Privacy
        </li>
      </ul>
      <div className="flex justify-center gap-4">
        <FontAwesomeIcon
          icon={faFacebookF}
          className="cursor-pointer border rounded-full p-1.5 hover:text-blue-500 transition-all "
        />
        <FontAwesomeIcon
          icon={faTwitter}
          className="cursor-pointer border rounded-full p-1.5 hover:text-sky-300 transition-all"
        />
        <FontAwesomeIcon
          icon={faInstagram}
          className="cursor-pointer border rounded-full p-1.5 hover:text-pink-400 transition-all"
        />
      </div>
    </footer>
  );
}
