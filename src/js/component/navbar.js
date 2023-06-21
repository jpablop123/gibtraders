import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

const Navbar = () => {
  const menuToggle = () => {
    let menuHolder = document.getElementById("menuHolder");
    let siteBrand = document.getElementById("siteBrand");
    function menuToggle() {
      if (menuHolder.className === "drawMenu") menuHolder.className = "";
      else menuHolder.className = "drawMenu";
    }
    if (window.innerWidth < 426) siteBrand.innerHTML = "MAS";
    window.onresize = function () {
      if (window.innerWidth < 420) siteBrand.innerHTML = "MAS";
      else siteBrand.innerHTML = "MY AWESOME WEBSITE";
    };
  };

  return (
    <nav>
      <div className="superNav border-bottom py-2 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 centerOnMobile">
              <select className="me-3 border-0 bg-light">
                <option value="en-us">EN-US</option>
              </select>
              <span className="d-none d-lg-inline-block d-md-inline-block d-sm-inline-block d-xs-none me-3">
                <strong>felipepint@gibtraders.com</strong>
              </span>
              <span className="me-3">
                <i className="fa-solid fa-phone me-1 .text-secondary"></i>{" "}
                <strong>+1-786-474-2836</strong>
              </span>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 d-none d-lg-block d-md-block-d-sm-block d-xs-none text-end">
              <span className="me-3">
                <i className="fa-solid fa-truck text-muted me-1"></i>
                <a
                  className="text-muted"
                  href="https://globuscargo.com/registrate/"
                >
                  Registrate
                </a>
              </span>
              <span className="me-3">
                <i className="fa-solid fa-file text-muted me-2"></i>
                <a
                  className="text-muted"
                  href="https://globuscargo.com/ingreso-a-casillero/"
                >
                  Casillero
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg bg-white sticky-top navbar-light p-3 shadow-sm">
        <div className="container">
          <a className="navbar-brand" href="#">
            {" "}
            <img
              className="imagengib"
              src="https://media.licdn.com/dms/image/D4E0BAQHuobQdZrgk8g/company-logo_200_200/0/1685540090610?e=1694649600&v=beta&t=xC1BxaHDWHH1P0b_7Gmf-GFjmnNzfbPEGTibEOvD9Rw"
            ></img>
            <i className=""></i>{" "}
            <strong className="strong">Gib Traders Corp</strong>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="mx-auto my-3 d-lg-none d-sm-block d-xs-block">
            <div className="input-group">
              <span className="border-warning input-group-text bg-warning text-white">
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
            </div>
          </div>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <div className="ms-auto d-none d-lg-block"></div>
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <a
                  className="nav-link mx-2 text-uppercase active"
                  aria-current="page"
                  href="https://globuscargo.com/ingreso-a-casillero/"
                >
                  Casillero
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2 text-uppercase" href="#">
                  Ubicacion
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link mx-2 text-uppercase" href="#">
                  Servicios
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2 text-uppercase" href="#">
                  Acerca de Gib Traders
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item"></li>
              <li className="nav-item">
                <a className="nav-link mx-2 text-uppercase" href="#">
                  <a
                    href="https://globuscargo.com/registrate/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Registrate
                  </a>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </nav>
  );
};
export default Navbar;
