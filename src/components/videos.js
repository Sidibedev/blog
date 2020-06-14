import React from "react";
import { Link } from "gatsby";
import video1 from "../images/video1.png";
const Videos = () => {
  const Background = video1;
  return (
    <section className="hero-section">
      <div className="card-grid">
        <Link className="cardVideo">
          <div
            className="card__backgroundVideo"
            style={{
              backgroundImage: `url(${Background})`,
            }}
          ></div>
          <div className="card__content"></div>
        </Link>
        <a className="cardVideo">
          <div
            className="card__backgroundVideo"
            style={{
              backgroundImage: `url(${Background})`,
            }}
          ></div>
          <div className="card__content">
            <p className="card__category">Category</p>
            <h3 className="card__heading">Koxer</h3>
          </div>
        </a>
        <a className="cardVideo">
          <div
            className="card__backgroundVideo"
            style={{
              backgroundImage: `url(${Background})`,
            }}
          ></div>
          <div className="card__content">
            <p className="card__category">Category</p>
            <h3 className="card__heading">DopeTicket</h3>
          </div>
        </a>
        <a className="cardVideo">
          <div
            className="card__backgroundVideo"
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
export default Videos;
