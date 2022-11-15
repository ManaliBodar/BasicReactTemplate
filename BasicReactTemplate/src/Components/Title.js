import React, { Component }  from "react";

//create an array for different titles
const TITLES = [
  "A frontend Web developer",
  "An enthusiatic learner",
  "Focused Oritend Person",
  "Straight Forward to work",
];

class Title extends Component {
  state = { titleIndex: 0, fadeIn: true };
  //all method write before render
  //componentdidmount() for title

  componentDidMount() {
    //settimeout for each and every title
    this.timeOut = setTimeout(() => {
      this.setState({ fadeIn: false });
    }, 2000);
    this.animationTitles();
  }

  animationTitles = () => {
    this.titleInterval = setInterval(() => {
      const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
      this.setState({ titleIndex, fadeIn: true });

      this.timeOut = setTimeout(() => {
        this.setState({ fadeIn: false });
      }, 2000);
    }, 4000);
    
  };

  componentWillUnmount() {
    clearInterval(this.titleInterval);
    clearTimeout(this.timeOut); 
  }

  render() {
    const { fadeIn, titleIndex } = this.state;
    const title = TITLES[titleIndex];

    return (
      <p className={fadeIn ? "title-fade-in" : "title-fade-out"}>
        {" "}
        I am {title}
      </p>
    );
  }
}

export default Title;
