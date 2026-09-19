import React, { Component } from "react";
import parse from "html-react-parser";

class Gifts extends Component {
  constructor(props) {
    super();
    this.content = props;
  }

  render() {
    return (
      <section className="section reveal fade-right gifts" id="gifts">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-full">
              <div className="content is-large block is-size-1">
                <h2 className="has-text-centered">
                  {this.content.section6}
                </h2>
                <div className="columns is-centered">
                  <div className="column is-1"></div>
                  <div className="column is-5 is-size-5">
                    {parse(this.content.gifts)}
                  </div>
                  <div className="column is-1"></div>
                  <div className="column is-4">
                    <img src="./images/avatar1.jpg" alt=""/>
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

export default Gifts;
