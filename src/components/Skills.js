import html from "../assets/html.svg";
import css from "../assets/css.svg";
import js from "../assets/js.svg";
import react from "../assets/react.svg";
import sass from "../assets/sass.svg";
import node from "../assets/node.svg";
import express from "../assets/express.svg";
import mongo from "../assets/mongodb.svg";
import tailwind from "../assets/tailwind.svg";

const Skills = () => {
  return (
    <div
      className="skills"
      id="skills"
    >
      <h1 className="skills__header">SKILLS</h1>

      <div className="skills__icon">
        <li className="card">
          <img
            src={html}
            alt=""
          />
        </li>
        <li className="card">
          <img
            src={css}
            alt=""
          />
        </li>
        <li className="card">
          <img
            src={js}
            alt=""
          />
        </li>
        <li className="card">
          <img
            src={react}
            alt=""
          />
        </li>
        <li className="card">
          <img
            src={sass}
            alt=""
          />
        </li>
        <li className="card">
          <img
            src={tailwind}
            alt=""
          />
        </li>
        <li className="card">
          <img
            src={node}
            alt=""
          />
        </li>
        <li className="card">
          <img
            src={express}
            alt=""
          />
        </li>
        <li className="card">
          <img
            src={mongo}
            alt=""
          />
        </li>
      </div>
    </div>
  );
};

export default Skills;
