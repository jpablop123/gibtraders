import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => (
  <>
    <div id="carouselExampleIndicators" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://media.licdn.com/dms/image/D4E0BAQHuobQdZrgk8g/company-logo_200_200/0/1685540090610?e=2147483647&v=beta&t=bNtkIor8rw4RYhnnpAb1HyeeX02q7XBv0wyHX77Raao"
            className="d-block w-100 carousel-image"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img src="..." className="d-block w-100 carousel-image" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="..." className="d-block w-100 carousel-image" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    <br></br>
    <br></br>

    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-4">
          <div className="card">
            <img
              src="https://media.licdn.com/dms/image/D4E0BAQHuobQdZrgk8g/company-logo_200_200/0/1685540090610?e=2147483647&v=beta&t=bNtkIor8rw4RYhnnpAb1HyeeX02q7XBv0wyHX77Raao"
              className="card-img-top"
              alt="..."
            />

            <div className="card-body">
              <h5 className="card-title">servicio 1</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
            <img
              src="https://media.licdn.com/dms/image/D4E0BAQHuobQdZrgk8g/company-logo_200_200/0/1685540090610?e=2147483647&v=beta&t=bNtkIor8rw4RYhnnpAb1HyeeX02q7XBv0wyHX77Raao"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">servicio 2</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button className="buton">Go somewhere</button>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
            <img
              src="https://media.licdn.com/dms/image/D4E0BAQHuobQdZrgk8g/company-logo_200_200/0/1685540090610?e=2147483647&v=beta&t=bNtkIor8rw4RYhnnpAb1HyeeX02q7XBv0wyHX77Raao"
              className="card-img-top"
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title">servicio 3</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br></br>
  </>
);
