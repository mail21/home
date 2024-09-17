import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SkillsTab from "./SkillsTab";
import Row from "react-bootstrap/Row";
import { Jumbotron } from "./migration";
import { Container } from "react-bootstrap";
import { useScrollPosition } from "../../hooks/useScrollPosition";

const Skills = React.forwardRef(({ heading, hardSkills, softSkills }, ref) => {
  const skills = [
    // skills can be added or removed
    // if there are no skills, Skills section won't show up
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Redux",
    "Tailwind CSS",
    "Material UI",
    "Git",
    "CI/CD",
    "Jest",
    "React Testing Library",
    "Python",
    "Laravel",
    "PHP",
    "Flutter",
    "Dart",
  ];

  const skillsTabRef = React.useRef(null);
  const [isScrolled, setIsScrolled] = React.useState(false);
  //const navbarDimensions = useResizeObserver(navbarMenuRef);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!isScrolled && currPos.y - 400 < 0) setIsScrolled(true);
    },
    [],
    skillsTabRef
  );
  return (
    <Jumbotron ref={skillsTabRef} fluid className="bg-white m-0" id="skills">
      <Container className="p-5 ">
        <h2 ref={skillsTabRef} className="display-4 pb-5 text-center">
          {heading}
        </h2>
        <ul className="skills__list">
          {skills.map((skill) => (
            <li
              key={crypto.randomUUID()}
              className="skills__list-item btn_skill btn--plain"
            >
              {skill}
            </li>
          ))}
        </ul>
      </Container>
    </Jumbotron>
  );
});

export default Skills;
