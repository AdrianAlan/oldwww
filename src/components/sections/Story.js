import React, { Component } from "react";
import parse from "html-react-parser";

class Story extends Component {
    constructor(props) {
        super();
        this.content = props;
    }

    render() {
        return (
            <section className="section reveal fade-left story" id="story">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-full">
                            <div className="content is-large block is-size-1">
                                <h2 className="has-text-centered">
                                    {this.content.section1}
                                </h2>
                                <div className="columns is-centered">
                                    <div className="column is-1"></div>
                                    <div className="column is-4">
                                        <img src="./images/avatar3.jpeg" alt=""/>
                                    </div>
                                    <div className="column is-1"></div>
                                    <div className="column is-5 is-size-5">
                                        {parse(this.content.story)}
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

export default Story;
