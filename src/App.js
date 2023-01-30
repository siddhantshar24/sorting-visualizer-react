import React, { Component } from "react";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import SortingVisualisation from "./components/sortingvisualizerSetState";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <NavBar />
        <main className="container">
          <SortingVisualisation></SortingVisualisation>
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
