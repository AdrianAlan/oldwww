import React from "react";
import { useSearchParams } from 'react-router-dom';
import content from "../../content.json";

function Hero() {
  const [searchParams, setSearchParams] = useSearchParams();

  var c = {};
  if (searchParams.get('lang') === 'es') {
    c = content.es;
  } else if (searchParams.get('lang') === 'pl') {
    c = content.pl;
  } else {
    c = content.en;
  }

  return (
    <section className="hero is-fullheight has-bg-image">
      <nav>
        <div className="navbar">
          <div className="nav-container">
            <input className="checkbox" type="checkbox" name="" id="" />
            <div className="hamburger-lines has-text-white">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>
            <div className="menu-items">
              <li><a href="#story"><span className="has-text-white is-size-2">{c.section1}</span></a></li>
              <li><a href="#program"><span className="has-text-white is-size-2">{c.section2}</span></a></li>
              <li><a href="#directions"><span className="has-text-white is-size-2">{c.section3}</span></a></li>
              <li><a href="#logement"><span className="has-text-white is-size-2">{c.section4}</span></a></li>
              <li><a href="#tips"><span className="has-text-white is-size-2">{c.section5}</span></a></li>
              <li><a href="#gifts"><span className="has-text-white is-size-2">{c.section6}</span></a></li>
              <li><a href="#request"><span className="has-text-white is-size-2">{c.section7}</span></a></li>
            </div>
          </div>
        </div>
      </nav>
      <div className="hero-body summary-text has-text-left has-text-white">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-full">
              <div className="content is-large block is-size-1 has-text-white">

                <p className="subtitle is-size-4 has-text-white">
                  <b>{c.intro1}</b>
                </p>
                <p className="subtitle has-text-right is-size-6 has-text-white">{c.intro2}</p>
                <h1 className="has-text-white">
                  <span className="has-text-white" is="type-async" id="typetext"></span><span className="blinking">.</span>
                </h1>
              </div>
            </div>
          </div>
          <div className="columns is-centered">
            <div className="column is-full">
              <div className="content is-large block is-size-1 has-text-white">
                <div className="buttons">
                  <a className="button is-light is-responsive is-outlined" href="/wedding?lang=en">
                    <span className="icon">
                      <img className="image is-16x16" src="./images/uk.png" alt="" />
                    </span>
                    <span>English</span>
                  </a>
                  <a className="button is-light is-responsive is-outlined" href="/wedding?lang=es">
                    <span className="icon">
                      <img className="image is-16x16" src="./images/es.png" alt="" />
                    </span>
                    <span>Español</span>
                  </a>
                  <a className="button is-light is-responsive is-outlined" href="/wedding?lang=pl">
                    <span className="icon">
                      <img className="image is-16x16" src="./images/pl.png" alt="" />
                    </span>
                    <span>Polski</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
