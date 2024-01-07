import "./normalize.css";
import "./global.css";
import { Header } from "./components/header/Header";
import { Hero } from "./components/hero/Hero";
import { About } from "./components/about/About";
import { Projects } from "./components/projects/Projects";
import { Contacts } from "./components/contacts/Contacts";
import { Footer } from "./components/footer/Footer";
import { MobileMenu } from "./components/mobile-menu/MobileMenu";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

function App() {
  const [openMobile, setOpenMobile] = useState(false);

  useEffect(() => {
    const lazyImages = document.querySelectorAll(".lazy");
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let img = entry.target as HTMLImageElement;
          img.src = `${img.dataset.src}`;
          img.classList.remove("loading");
          img.classList.add("loaded");
          observer.unobserve(img);
        }
      });
    });

    lazyImages.forEach((image) => observer.observe(image));
  }, []);

  useEffect(() => {
    if (openMobile) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [openMobile]);

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      document.body.classList.add("light-mode");
    }
  }, []);

  const openMobileMenu = () => {
    setOpenMobile(!openMobile);
  };

  const toggleDarkMode = () => {
    document.body.classList.toggle("light-mode");
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", "light-mode");
    } else {
      localStorage.removeItem("theme");
    }
  };

  return (
    <div className="App">
      {openMobile &&
        createPortal(
          <MobileMenu
            openMobileMenu={openMobileMenu}
            toggleDarkMode={toggleDarkMode}
          />,
          document.body
        )}
      <Header openMobileMenu={openMobileMenu} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <About />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
