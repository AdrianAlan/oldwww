import React, { Component } from "react";
import parse from "html-react-parser";

class Directions extends Component {
  constructor(props) {
    super();
    this.content = props;
  }

  render() {
    return (
      <section className="section reveal fade-left directions" id="directions">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-full">
              <div className="content is-large block is-size-1">
                <h2 className="has-text-centered">
                  {this.content.section3}
                </h2>
                <div className="columns is-centered">
                  <div className="column is-1"></div>
                  <div className="column is-4">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.5280320431157!2d-100.85089992404296!3d21.131374584244828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842b396ed04be78f%3A0x762e7b72784e7cc5!2sLa%20Capilla%20Hotel!5e0!3m2!1sen!2smx!4v1703125656325!5m2!1sen!2smx" width="800" height="800" title="Google Maps" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                  <div className="column is-1"></div>
                  <div className="column is-5 is-size-5">
                    {parse(this.content.directions)}
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
export default Directions;