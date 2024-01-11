import React from "react";
import "../styles/Projects.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import "react-bootstrap/dist/react-bootstrap.min.css";

const projects = {
    "Baldemort": {
      title: "Baldemort",
      description: "test",
      technologies: "Unity, C#, Git",
      image: "./assets/Baldemort.png",
      link: "https://facebook.com"
    },
    Portfolio: {
      title: "Baldemort2",
      description: "test2",
      technologies: "Unity, C#, Gits",
      image: "./assets/baldemort.png",
      link: "https://google.com/"
    }
  };

class Projects extends React.Component {
    constructor() {
      super();
      this.state = {
        expanded: true,
        activeKey: "1",
        currentSlide: 0,
      };
      this.handleSelect = this.handleSelect.bind(this);
      this.handleArrowClick = this.handleArrowClick.bind(this);
    }
  
    handleSelect(eventKey) {
      this.setState({
        activeKey: eventKey,
      });
    }
  
    handleArrowClick(direction) {
      const { currentSlide } = this.state;
      const totalSlides = Object.keys(projects).length;
  
      if (direction === "prev") {
        this.setState({
          currentSlide: (currentSlide - 1 + totalSlides) % totalSlides,
        });
      } else if (direction === "next") {
        this.setState({
          currentSlide: (currentSlide + 1) % totalSlides,
        });
      }
    }
  
    render() {
      const { currentSlide } = this.state;
      return (
        <div id="projects">
          <div className="section-header">
            <span className="section-title">/ pet projects</span>
          </div>
          <Carousel
            selectedItem={currentSlide}
            onChange={(index) => this.setState({ currentSlide: index })}
            autoPlay
            infiniteLoop
            interval={3000}
            showArrows
            showThumbs={false}
          >
            {Object.keys(projects).map((key, i) => (
              <Carousel.Item key={i}>
                <img
                  className="d-block w-100"
                  src={projects[key]["image"]}
                  alt={key}
                />
                <div className="caption-bg">
                  <Carousel.Caption>
                    <h3>{projects[key]["title"]}</h3>
                    <p>
                      {projects[key]["desc"]}
                      <p className="techStack">{projects[key]["techStack"]}</p>
                    </p>
                    <a
                      href={projects[key]["link"]}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {projects[key]["link"]}
                    </a>
                  </Carousel.Caption>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
          <div className="carousel-controls">
            <button onClick={() => this.handleArrowClick("prev")}>Prev</button>
            <button onClick={() => this.handleArrowClick("next")}>Next</button>
          </div>
        </div>
      );
    }
  }
  
  export default Projects;