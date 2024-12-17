import React from "react";

const Skills = () => {
  const skills = {
    frontend: [
      { path: "logos/html.svg", name: "HTML" },
      { path: "logos/css.svg", name: "CSS" },
      { path: "logos/javascript.svg", name: "JavaScript" },
      { path: "logos/react.svg", name: "React" },
      { path: "logos/angular.png", name: "Angular" },
    ],
    backend: [
      { path: "logos/java.svg", name: "Java" },
      { path: "logos/nodejs.svg", name: "Node.js" },
      { path: "logos/mysql.svg", name: "MySQL" },
      { path: "logos/sqloff.svg", name: "SQL" },
    ],
    // Agrega las demás categorías aquí...
  };

  const renderSkills = (category) => {
    return skills[category].map((skill) => (
      <div className="skill" key={skill.name}>
        <img src={skill.path} alt={skill.name} />
        <h3>{skill.name}</h3>
      </div>
    ));
  };

  return (
    <section id="skills">
      <div className="category">
        <h2>Frontend</h2>
        <div className="skills-tech">{renderSkills("frontend")}</div>
      </div>
      <div className="category">
        <h2>Backend</h2>
        <div className="skills-tech">{renderSkills("backend")}</div>
      </div>
    </section>
  );
};

export default Skills;
