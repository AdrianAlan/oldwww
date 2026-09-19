import React, { Component } from "react";
import Header from "./components/structure/Header";
import Content from "./components/structure/Content";
import Footer from "./components/structure/Footer";

class Wedding extends Component {
  componentDidMount(){
    document.title = "Let's Get Married!";
    document.querySelector("link[rel*='icon']").href = "./images/favicon/icon-30.png";
    
  }
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default Wedding;
