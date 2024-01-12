// Carousel.js

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/carousel.css"; // Import the CSS file
import FadeInSection from "./FadeInSection";
import GitHubIcon from "@material-ui/icons/GitHub";

const projects = {
  "Baldemort": {
    title: "Baldemort",
    description: "2D Game made in Unity where you play as a wizard that has to defeat the evil wizard Baldemort. It includes a procedurally generated map section to explore.",
    technologies: "Unity, C#, Git",
    image: "./assets/Baldemort.png",
    repoLink: "https://github.com/joseinfante/Baldemort"
  },
  Portfolio: {
    title: "Portfolio",
    description: "This website! Built with React.js and Bootstrap. It is a single page application that uses React Router to navigate between sections.",
    technologies: "React.js, Bootstrap, Git, GitHub Pages",
    image: "./assets/Portfolio.png",
    repoLink: "https://github.com/joseinfante/joseinfante.github.io"
  }
};

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => setCurrentIndex(next),
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === Object.keys(projects).length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleGitHubClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div id="projects">
    <FadeInSection>
    <h1 Id="projects-section">./projects</h1>
    <div className="carousel-container">
      <Slider {...settings}>
        {Object.values(projects).map((project, index) => (
          <div key={index} className="carousel-slide">
            <div className="carousel-content">
              <h3 className="carousel-title">{project.title}</h3>
              <p className="carousel-description">{project.description}</p>
              <p className="carousel-technologies">{project.technologies}</p>
              <GitHubIcon
            className="github-button"
            onClick={() => {
              handleGitHubClick(project.repoLink);
            }}
          ></GitHubIcon>
            </div>
            <img
              src={project.image}
              alt={project.title}
              className="carousel-image"
            />
          </div>
        ))}
      </Slider>
    </div>
    </FadeInSection>
    </div>
  );
};

export default Carousel;