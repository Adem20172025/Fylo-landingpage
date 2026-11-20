import { Features } from "./Fylow-components/Features";
import { Footer } from "./Fylow-components/Footer";
import { GetAccess } from "./Fylow-components/Getaccess";
import { Home } from "./Fylow-components/Home";
import { Navbar } from "./Fylow-components/Navbar";
import { Productive } from "./Fylow-components/Productive";
import { Team } from "./Fylow-components/Team";

export default function App() {
  return (
    <main className="flex flex-col items-center gap-20">
      <section className="w-full items-center flex flex-col gap-0">
        <Navbar />
        <Home />
      </section>
      <Features />
      <Productive />
      <Team />
      <section className="w-full items-center flex flex-col">
        <GetAccess />
        <Footer />
      </section>
    </main>
  );
}
