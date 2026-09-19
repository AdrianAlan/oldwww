import React, { Component } from "react";
import parse from "html-react-parser";

class Tips extends Component {
  constructor(props) {
    super();
    this.content = props;
  }

  render() {
    return (
      <section className="section reveal fade-left tips" id="tips">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-full">
              <div className="content is-large block is-size-1">
                <h2 className="has-text-centered">
                {this.content.section5}
                </h2>
                <div className="columns is-centered">
                  <div className="column is-1"></div>
                  <div className="column is-4">
                    <div className="overlap">
                      <img className="imgremix" src="./images/sanmiguel-remix.png" alt=""/>
                      <img className="" src="./images/sanmiguel.jpg" alt=""/>
                    </div>
                  </div>
                  <div className="column is-1"></div>
                  <div className="column is-5 is-size-5">
                   {parse(this.content.tips)}
                  </div>
                  <div className="column is-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Tips;
