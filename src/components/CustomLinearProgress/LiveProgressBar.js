import React, { Component } from "react";

import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.js";



export default class LiveProgressBar extends Component  {
  
  state = {
    scrollPostion: 0
  }

  listenToScrollEvent = () => {
    document.addEventListener("scroll", () => {
      requestAnimationFrame(() => {
        this.calculateScrollDistance();
      });
    });
  }

  calculateScrollDistance = () => {
    const scrollTop = window.pageYOffset; // how much the user has scrolled by
    const winHeight = window.innerHeight;
    const docHeight = this.getDocHeight();

    const totalDocScrollLength = docHeight - winHeight;
    const scrollPostion = Math.floor(scrollTop / totalDocScrollLength * 100)

    this.setState({
      scrollPostion,
    });
  }

  getDocHeight = () => {
    return Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
  }

  componentDidMount() {
    this.listenToScrollEvent();
  }

  render() {
    const scrollPostion = this.state.scrollPostion;
    if(scrollPostion >= 0 && scrollPostion < 20){
      return (
        <div className="App">
          <CustomLinearProgress
                  variant="determinate"
                  color="cyan50"
                  value={scrollPostion}
                />
        </div>
      );
    }
    if(scrollPostion >= 20 && scrollPostion <40){
      return (
        <div className="App">
          <CustomLinearProgress
                  variant="determinate"
                  color="cyan100"
                  value={scrollPostion}
                />
        </div>
      );
    }
    if(scrollPostion >= 40 && scrollPostion <60){
      return (
        <div className="App">
          <CustomLinearProgress
                  variant="determinate"
                  color="cyan200"
                  value={scrollPostion}
                />
        </div>
      );
    }
    if(scrollPostion >= 60 && scrollPostion <80){
      return (
        <div className="App">
          <CustomLinearProgress
                  variant="determinate"
                  color="cyan300"
                  value={scrollPostion}
                />
        </div>
      );
    }
    if(scrollPostion >= 80 && scrollPostion <= 100){
      return (
        <div className="App">
          <CustomLinearProgress
                  variant="determinate"
                  color="cyan400"
                  value={scrollPostion}
                />
        </div>
      );
    }
  }
}
