import React, { Component } from "react";
import parse from "html-react-parser";

class Logement extends Component {
  constructor(props) {
    super();
    this.content = props;
  }

  render() {
    return (
      <section className="section reveal fade-right logement" id="logement">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-full">
              <div className="content is-large block is-size-1">
                <h2 className="has-text-centered">
                  {this.content.section4}
                </h2>
                <div className="columns is-centered">
                  <div className="column is-1"></div>
                  <div className="column is-5 is-size-5">
                    {parse(this.content.hotel)}
                  </div>
                  <div className="column is-1"></div>
                  <div className="column is-4">
                  <div className="overlap">
                      <img className="imgremix" src="./images/capilla-remix.png" alt=""/>
                      <img className="" src="./images/capilla.jpg" alt=""/>
                    </div>
                  </div>
                  <div className="column is-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
    );
  }
}

export default Logement;
