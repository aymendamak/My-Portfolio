import React from "react";
import SkillCard from "./components/SkillCard";

const skillItem = [
  // Programming Languages
  {
    imgSrc: "/images/typescript.svg",
    label: "TypeScript / JavaScript",
    desc: "Programming languages",
  },

  // Frontend Development
  {
    imgSrc: "/images/react.svg",
    label: "React JS",
    desc: "JavaScript Library",
  },
  {
    imgSrc: "/images/angular.svg",
    label: "Angular",
    desc: "Web framework",
  },
  {
    imgSrc: "/images/ui-components.svg",
    label: "DaisyUI/gluestack-ui",
    desc: "UI component libraries",
  },
  {
    imgSrc: "/images/css3.svg",
    label: "CSS",
    desc: "Styling language",
  },

  // Backend Development
  {
    imgSrc: "/images/nodejs.svg",
    label: "NodeJS",
    desc: "Runtime environment",
  },
  {
    imgSrc: "/images/expressjs.svg",
    label: "ExpressJS",
    desc: "Web application framework",
  },

  // Databases and ORM
  {
    imgSrc: "/images/mongodb.svg",
    label: "MongoDB / MySQL",
    desc: "Database",
  },
  {
    imgSrc: "/images/prisma.svg",
    label: "Prisma",
    desc: "ORM (Object-Relational Mapping)",
  },
];

const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Essential Tools I use</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>
        <div
          className="grid gap-3 
        grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]"
        >
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes="reveal-up"
            ></SkillCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
