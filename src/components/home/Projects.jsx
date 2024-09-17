import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "../../scss/light-slider.scss";
import AwesomeSliderStyles2 from "../../scss/dark-slider.scss";
import { Jumbotron } from "./migration";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";

const Projects = () => {
  const [deps, setDeps] = useState({});
  const [detailsModalShow, setDetailsModalShow] = useState(false);
  const resumeProjects = [
    {
      title: "Limelight Website Design",
      startDate: "2024",
      description:
        "The most expanded application I had opportunity to work with. I've learned many technologies and my code was reviewed by awesome curator. Application handles all adoption processess and allows to store all evidence on adopting animals from animal shelter.",
      images: [
        `${process.env.PUBLIC_URL}/images/projects/limelight-design/img-1.png`,
        `${process.env.PUBLIC_URL}/images/projects/limelight-design/img-2.png`,
        `${process.env.PUBLIC_URL}/images/projects/limelight-design/img-3.png`,
        `${process.env.PUBLIC_URL}/images/projects/limelight-design/img-4.png`,
        `${process.env.PUBLIC_URL}/images/projects/limelight-design/img-5.png`,
        `${process.env.PUBLIC_URL}/images/projects/limelight-design/img-6.png`,
        `${process.env.PUBLIC_URL}/images/projects/limelight-design/img-7.png`,
        `${process.env.PUBLIC_URL}/images/projects/limelight-design/img-8.png`,
        `${process.env.PUBLIC_URL}/images/projects/limelight-design/img-9.png`,
      ],
      url: "",
      technologies: [
        {
          class: "devicon-angularjs-plain",
          name: "Figma",
        },
      ],
    },
    {
      title: "Gaia Studio Dashboard",
      startDate: "2024",
      description:
        "The most expanded application I had opportunity to work with. I've learned many technologies and my code was reviewed by awesome curator. Application handles all adoption processess and allows to store all evidence on adopting animals from animal shelter.",
      images: [
        `${process.env.PUBLIC_URL}/images/projects/gaiastudio-dashboard/img-1.png`,
        `${process.env.PUBLIC_URL}/images/projects/gaiastudio-dashboard/img-2.png`,
        `${process.env.PUBLIC_URL}/images/projects/gaiastudio-dashboard/img-3.png`,
        `${process.env.PUBLIC_URL}/images/projects/gaiastudio-dashboard/img-4.png`,
        `${process.env.PUBLIC_URL}/images/projects/gaiastudio-dashboard/img-5.png`,
        `${process.env.PUBLIC_URL}/images/projects/gaiastudio-dashboard/img-6.png`,
      ],
      url: "",
      technologies: [
        {
          class: "devicon-angularjs-plain",
          name: "React",
        },
        {
          class: "devicon-angularjs-plain",
          name: "Javascript",
        },
        {
          class: "devicon-typescript-plain",
          name: "Laravel",
        },
        {
          class: "devicon-typescript-plain",
          name: "PHP",
        },
      ],
    },
    {
      title: "Gaia Studio",
      startDate: "2024",
      description:
        "The most expanded application I had opportunity to work with. I've learned many technologies and my code was reviewed by awesome curator. Application handles all adoption processess and allows to store all evidence on adopting animals from animal shelter.",
      images: [
        `${process.env.PUBLIC_URL}/images/projects/gaiastudio/img-2.png`,
        `${process.env.PUBLIC_URL}/images/projects/gaiastudio/img-1.png`,
        `${process.env.PUBLIC_URL}/images/projects/gaiastudio/img-3.png`,
        `${process.env.PUBLIC_URL}/images/projects/gaiastudio/img-4.png`,
        `${process.env.PUBLIC_URL}/images/projects/gaiastudio/img-5.png`,
        `${process.env.PUBLIC_URL}/images/projects/gaiastudio/img-6.png`,
      ],
      url: "",
      technologies: [
        {
          class: "devicon-angularjs-plain",
          name: "React",
        },
        {
          class: "devicon-angularjs-plain",
          name: "Javascript",
        },
        {
          class: "devicon-typescript-plain",
          name: "Laravel",
        },
        {
          class: "devicon-typescript-plain",
          name: "PHP",
        },
      ],
    },
    {
      title: "E-Learning Cipta App",
      startDate: "2024",
      description:
        "Personal project for study subject. I was responsible for testing photography application that optimizes images with popular algorithms used by graphic editors like Pixlr or Adobe Photoshop. I've earned A grade :)",
      images: [
        `${process.env.PUBLIC_URL}/images/projects/cipta-mobile/img-1.png`,
        `${process.env.PUBLIC_URL}/images/projects/cipta-mobile/img-2.png`,
        `${process.env.PUBLIC_URL}/images/projects/cipta-mobile/img-3.png`,
        `${process.env.PUBLIC_URL}/images/projects/cipta-mobile/img-4.png`,
        `${process.env.PUBLIC_URL}/images/projects/cipta-mobile/img-5.png`,
        `${process.env.PUBLIC_URL}/images/projects/cipta-mobile/img-6.png`,
        `${process.env.PUBLIC_URL}/images/projects/cipta-mobile/img-7.png`,
        `${process.env.PUBLIC_URL}/images/projects/cipta-mobile/img-8.png`,
      ],
      url: "https://github.com",
      technologies: [
        {
          class: "devicon-react-original",
          name: "Flutter",
        },
        {
          class: "devicon-javascript-plain",
          name: "Dart",
        },
      ],
    },
    {
      title: "E-Learning Cipta Admin Site",
      startDate: "2024",
      description:
        "Personal project for study subject. I was responsible for testing photography application that optimizes images with popular algorithms used by graphic editors like Pixlr or Adobe Photoshop. I've earned A grade :)",
      images: [
        `${process.env.PUBLIC_URL}/images/projects/cipta-web/img-1.png`,
        `${process.env.PUBLIC_URL}/images/projects/cipta-web/img-2.png`,
        `${process.env.PUBLIC_URL}/images/projects/cipta-web/img-3.png`,
        `${process.env.PUBLIC_URL}/images/projects/cipta-web/img-4.png`,
        `${process.env.PUBLIC_URL}/images/projects/cipta-web/img-5.png`,
      ],
      url: "https://github.com",
      technologies: [
        {
          class: "devicon-react-original",
          name: "Flutter",
        },
        {
          class: "devicon-javascript-plain",
          name: "Dart",
        },
      ],
    },
    {
      title: "Seminar Unpam",
      startDate: "2015",
      description:
        "One of the first apps I was working on my internship. I had to develop front-end implementation for app that shows 3D models of known buildings. This was also my first project in Angular framework. I've learned a lot!",
      images: [
        `${process.env.PUBLIC_URL}/images/projects/seminar-unpam/img-1.png`,
        `${process.env.PUBLIC_URL}/images/projects/seminar-unpam/img-2.png`,
        `${process.env.PUBLIC_URL}/images/projects/seminar-unpam/img-3.png`,
        `${process.env.PUBLIC_URL}/images/projects/seminar-unpam/img-4.png`,
        `${process.env.PUBLIC_URL}/images/projects/seminar-unpam/img-5.png`,
      ],

      url: "https://github.com",
      technologies: [
        {
          class: "devicon-angularjs-plain",
          name: "React",
        },
        {
          class: "devicon-angularjs-plain",
          name: "Javascript",
        },
        {
          class: "devicon-typescript-plain",
          name: "Laravel",
        },
        {
          class: "devicon-typescript-plain",
          name: "PHP",
        },
      ],
    },
  ];

  const detailsModalShowHandler = (data) => {
    setDeps(data);
    setDetailsModalShow(true);
  };

  const detailsModalCloseHandler = () => setDetailsModalShow(false);

  let sectionName;
  let projects;

  if (resumeProjects) {
    sectionName = "Projects";
    projects = resumeProjects.map((project) => (
      <div
        className="col-sm-12 col-md-6 col-lg-4"
        key={project.title}
        style={{ cursor: "pointer" }}
      >
        <span className="portfolio-item d-block">
          <div
            className="foto"
            onClick={() => detailsModalShowHandler(project)}
          >
            <div>
              <img
                src={project.images[0]}
                alt="projectImages"
                className="object-fit-contain"
                height="230"
                style={{
                  marginBottom: 0,
                  paddingBottom: 0,
                  position: "relative",
                }}
              />
              <span className="project-date">{project.startDate}</span>
              <br />
              <p className="project-title-settings mt-3">{project.title}</p>
            </div>
          </div>
        </span>
      </div>
    ));
  }

  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <section id="portfolio">
        <div className="col-md-12">
          <h2 className="display-4 pb-5 text-center">
            <span>{sectionName}</span>
          </h2>
          {/* <h2 ref={skillsTabRef} className="display-4 pb-5 text-center">
          {sectionName}
        </h2> */}
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto">{projects}</div>
          </div>
          <ProjectDetailsModal
            show={detailsModalShow}
            onHide={detailsModalCloseHandler}
            data={deps}
          />
        </div>
      </section>
    </Jumbotron>
  );
};

const ProjectDetailsModal = ({ data, onHide, ...props }) => {
  if (!data) {
    return null;
  }

  const { technologies, images, title, description, url } = data;

  const tech = technologies?.map((icons, i) => (
    <li className="list-inline-item mx-3" key={i}>
      <span>
        <div className="text-center">
          <i className={icons.class} style={{ fontSize: "300%" }}>
            <p className="text-center" style={{ fontSize: "30%" }}>
              {icons.name}
            </p>
          </i>
        </div>
      </span>
    </li>
  ));

  const img = images?.map((elem, i) => {
    return <div key={i} data-src={elem} />;
  });

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-inside"
    >
      <span onClick={onHide} className="modal-close">
        <i className="fas fa-times fa-3x close-icon"></i>
      </span>
      <div className="col-md-12">
        <div className="col-md-10 mx-auto" style={{ paddingBottom: "50px" }}>
          <div className="slider-tab">
            <span
              className="iconify slider-iconfiy"
              data-icon="emojione:red-circle"
              data-inline="false"
              style={{ marginLeft: "5px" }}
            ></span>{" "}
            &nbsp;{" "}
            <span
              className="iconify slider-iconfiy"
              data-icon="twemoji:yellow-circle"
              data-inline="false"
            ></span>{" "}
            &nbsp;{" "}
            <span
              className="iconify slider-iconfiy"
              data-icon="twemoji:green-circle"
              data-inline="false"
            ></span>
          </div>
          <AwesomeSlider
            cssModule={[AwesomeSliderStyles, AwesomeSliderStyles2]}
            animation="scaleOutAnimation"
            className="slider-image"
          >
            {img}
          </AwesomeSlider>
        </div>
        <div className="col-md-10 mx-auto">
          <h3 style={{ padding: "5px 5px 0 5px" }}>
            {title}
            {url && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-href"
              >
                <i
                  className="fas fa-external-link-alt"
                  style={{ marginLeft: "10px" }}
                ></i>
              </a>
            )}
          </h3>
          <p className="modal-description">{description}</p>
          <div className="col-md-12 text-center">
            <ul className="list-inline mx-auto">{tech}</ul>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Projects;
