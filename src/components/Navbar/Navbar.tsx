import Images from "../../Images/Index";
import "./Navar.scss";
import { useState, useEffect, useRef } from "react";
function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  const observer: any = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust as needed
    };

    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    const sections = document.querySelectorAll(".content-section");

    sections.forEach((section) => {
      observer.current.observe(section);
    });

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg sticky-top
      "
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={Images.logo} alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activeSection === "Home" ? "active" : ""
                  }`}
                  href="#Home"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activeSection === "About" ? "active" : ""
                  }`}
                  href="#About"
                >
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activeSection === "Services" ? "active" : ""
                  }`}
                  href="#Services"
                >
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activeSection === "Portfolio" ? "active" : ""
                  }`}
                  href="#Portfolio"
                >
                  Portfolio
                </a>
              </li>{" "}
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activeSection === "Free" ? "active" : ""
                  }`}
                  href="#Free"
                >
                  Get A Quote
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activeSection === "Book" ? "active" : ""
                  }`}
                  href="#Book"
                >
                  Book Free Consultation
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
