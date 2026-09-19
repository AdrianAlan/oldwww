import React, { Component } from "react";
import parse from "html-react-parser";

class Request extends Component {
    constructor(props) {
        super();
        this.content = props;
    }

    render() {
        return (
            <section className="section reveal fade-left request" id="request">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-full">
                            <div className="content is-large block is-size-1">
                                <h2 className="has-text-centered">
                                    {this.content.section7}
                                </h2>
                                <div className="columns is-centered">
                                    <div className="column is-1"></div>
                                    <div className="column is-4">
                                        <img src="./images/avatar4.jpg" alt=""/>
                                    </div>
                                    <div className="column is-1"></div>
                                    <div className="column is-5 is-size-5">
                                        
                                            <p>{parse(this.content.request)}</p>
                                        
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

export default Request;
