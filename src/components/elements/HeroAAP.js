import React from "react";
import Resume from "../../resume.json";
import parse from "html-react-parser";

function Hero() {
  return (
    <section className="hero is-fullheight">
      <div className="hero-body summary-text has-text-left">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-full">
              <div className="content is-large block is-size-1">
                <p className="title is-size-1">
                  <b>{Resume.basics.name}</b>
                </p>
                <div className="columns is-centered">
                  <div className="column is-full">
                    <div className="content is-large block is-size-1">
                      <div className="buttons">
                        <a href="files/Resume_Adrian_Alan_Pol.pdf" className="button is-dark is-outlined has-text-black">Résumé</a>
                        {Resume.basics.profiles.map((value, index) => {
                          return (
                            <a
                              href={value.url}
                              target="blank"
                              className="button is-dark is-outlined"
                              title={value.network}
                            >
                              <span className="icon is-medium">
                                <i className={value.x_icon} > </i>
                              </span>
                              <span className="has-text-black">{value.network}</span>
                            </a>
                          );
                        })}
                      </div>
                      <p className="subtitle is-size-6">
                        <b> {parse(Resume.basics.introduction)}</b>
                      </p>
                    </div>
                  </div>
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
