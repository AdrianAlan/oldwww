import React, { Component } from "react";
import parse from "html-react-parser";

class Program extends Component {
  constructor(props) {
    super();
    this.content = props;
  }

  render() {
    return (
      <section className="section reveal fade-right program" id="program">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-full">
              <div className="content is-large block is-size-1">
                <h2 className="has-text-centered">
                  {this.content.section2}
                </h2>
                <p className="is-size-5">{this.content.programtop}</p>
                <div className="columns is-centered">
                  <div className="column is-1"></div>
                  <div className="column is-5 is-size-5">
                    <div className="tabs is-centered">
                      <ul>
                        <li></li>
                        <li className="linkFriday is-active"><a><b><span>{parse(this.content.day1)}</span></b></a></li>
                        <li className="linkSaturday"><a><b><span>{parse(this.content.day2)}</span></b></a></li>
                        <li className="linkSunday"><a><b><span>{parse(this.content.day3)}</span></b></a></li>
                      </ul>
                    </div>
                    <div className="box is-large boxFriday">
                      {parse(this.content.contentday1)}
                    </div>
                    <div className="box is-large boxSaturday is-hidden">
                      {parse(this.content.contentday2)}
                    </div>
                    <div className="box is-large boxSunday is-hidden">
                      {parse(this.content.contentday3)}
                    </div>
                  </div>
                  <div className="column is-1"></div>
                  <div className="column is-4">
                    <img src="./images/avatar2.jpg" alt=""/>
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

export default Program;
