import { useState } from "react";
import logo from "./assets/react.svg";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar } from "react-bootstrap";
import Intro from "./components/Intro";
import Services from "./components/Services";
import Products from "./components/Products";
import WhyUs from "./components/WhyUs";
import Contact from "./components/Contact";
import Blog from "./components/Blog";

function App() {
  const [active, setActive] = useState("");

  return (
    <>
      <div className="App">
        <Navbar
          className="navbar"
          bg="primary"
          variant="dark"
          sticky="top"
          expand="sm"
          collapseOnSelect
        >
          <Navbar.Brand className="header logo">
            <a
              href="#intro"
              style={{ textDecoration: "none", color: "white" }}
              onClick={() => setActive("intro")}
            >
              <img src={logo} className="logo-image" /> داده پردازی سپهر
            </a>
          </Navbar.Brand>

          <Navbar.Toggle className="coloring" />
          <Navbar.Collapse>
            <Nav>
              <a
                onClick={() => setActive("intro")}
                className={"nav-link " + (active === "intro" ? "active" : null)}
                href="#intro"
              >
                صفحه اصلی
              </a>
              <a
                onClick={() => setActive("services")}
                className={
                  "nav-link " + (active === "services" ? "active" : null)
                }
                href="#services"
              >
                سرویس ها
              </a>
              <a
                onClick={() => setActive("products")}
                className={
                  "nav-link " + (active === "products" ? "active" : null)
                }
                href="#products"
              >
                محصولات
              </a>
              <a
                onClick={() => setActive("whyus")}
                className={"nav-link " + (active === "whyus" ? "active" : null)}
                href="#whyus"
              >
                چرا داده پردازی سپهر؟
              </a>
              <a
                onClick={() => setActive("blog")}
                className={"nav-link " + (active === "blog" ? "active" : null)}
                href="#blog"
              >
                بلاگ
              </a>
              <a
                onClick={() => setActive("contact")}
                className={
                  "nav-link " + (active === "contact" ? "active" : null)
                }
                href="#contact"
              >
                تماس با ما
              </a>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div
          className="container content"
          onMouseOver={() => setActive("intro")}
        >
          <a className="anchor" id="intro"></a>
          <Intro />
        </div>
        <div
          className="container content"
          onMouseOver={() => setActive("services")}
        >
          <a className="anchor" id="services"></a>
          <Services />
        </div>
        <div
          className="container content"
          onMouseOver={() => setActive("products")}
        >
          <a className="anchor" id="products"></a>
          <Products />
        </div>
        <div
          className="container content"
          onMouseOver={() => setActive("whyus")}
        >
          <a className="anchor" id="whyus"></a>
          <WhyUs />
        </div>
        <div
          className="container content"
          onMouseOver={() => setActive("blog")}
        >
          <a className="anchor" id="blog"></a>
          <Blog />
        </div>
        <div
          className="container content"
          onMouseOver={() => setActive("contact")}
        >
          <a className="anchor" id="contact"></a>
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
