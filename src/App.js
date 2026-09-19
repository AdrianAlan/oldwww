import React, { Component } from "react";
import Header from "./components/structure/HeaderAAP";
import Content from "./components/structure/ContentAAP";
import Footer from "./components/structure/FooterAAP";

class App extends Component {
  componentDidMount(){
    document.title = "Adrian Alan Pol"
    document.querySelector("link[rel*='icon']").href = "./images/faviconaap/favicon-16x16.png";
  }
  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;