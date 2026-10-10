import { useEffect, useState } from "react";
import Starfield from "./components/Starfield";
import Sidebar from "./components/Sidebar";
import Resume from "./components/Resume";
import Projects from "./components/Projects";

export default function App() {
  const [active, setActive] = useState("resume");

  // Highlight the nav link for whichever section is in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    document.querySelectorAll(".section").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="sky" aria-hidden="true" />
      <Starfield />
      <div className="layout">
        <Sidebar active={active} />
        <main className="content">
          <Resume />
          <Projects />
          <footer className="footer">© {new Date().getFullYear()} Anna Fatsevych</footer>
        </main>
      </div>
    </>
  );
}
