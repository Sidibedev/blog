import React from "react";
import { Link } from "gatsby";

const Projects = () => {
  const Background =
    "https://images.unsplash.com/photo-1494366222322-387658a1a976?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";
  return (
    <section className="hero-section">
      <div className="card-grid">
        <a className="cardProject" href="#">
          <div
            className="card__background"
            style={{
              backgroundImage: `url(${Background})`,
            }}
          ></div>
          <div className="card__content">
            <p className="card__category">Category</p>
            <h3 className="card__heading">Studio Exam</h3>
          </div>
        </a>
        <a className="cardProject" href="#">
          <div
            className="card__background"
            style={{
              backgroundImage: `url(${Background})`,
            }}
          ></div>
          <div className="card__content">
            <p className="card__category">Category</p>
            <h3 className="card__heading">Koxer</h3>
          </div>
        </a>
        <a className="cardProject" href="#">
          <div
            className="card__background"
            style={{
              backgroundImage: `url(${Background})`,
            }}
          ></div>
          <div className="card__content">
            <p className="card__category">Category</p>
            <h3 className="card__heading">DopeTicket</h3>
          </div>
        </a>
        <a className="cardProject" href="#">
          <div
            className="card__background"
            style={{
              backgroundImage: `url(${Background})`,
            }}
          ></div>
          <div className="card__content">
            <p className="card__category">Category</p>
            <h3 className="card__heading">Abo Sur mesure</h3>
          </div>
        </a>
      </div>
    </section>
  );
};
export default Projects;
