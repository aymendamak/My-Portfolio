import SkillCard from "./components/SkillCard";

const skillItem = [
  // Programming Languages
  {
    imgSrc: "/images/javascript.svg",
    label: "JavaScript",
    desc: "Programming languages",
  },
  {
    imgSrc: "/images/typescript.svg",
    label: "TypeScript",
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
  // {
  //   imgSrc: "/images/ui-components.svg",
  //   label: "DaisyUI/gluestack-ui",
  //   desc: "UI component libraries",
  // },
  {
    imgSrc: "/images/tailwindcss.svg",
    label: "Tailwind CSS",
    desc: "Utility-first CSS framework for rapid UI development",
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
    imgSrc: "/images/sql.svg",
    label: "SQL",
    desc: "Structured Query Language for managing databases",
  },
  {
    imgSrc: "/images/mySQL.svg",
    label: "MongoDB / MySQL",
    desc: "SGBD",
  },
  {
    imgSrc: "/images/prisma.svg",
    label: "Prisma",
    desc: "ORM (Object-Relational Mapping)",
  },

  // DevOps and Tools
  // {
  //   imgSrc: "/images/docker.svg",
  //   label: "Docker",
  //   desc: "Containerization platform",
  // },
  {
    imgSrc: "/images/postman.svg",
    label: "Postman",
    desc: "API development and testing",
  },
  {
    imgSrc: "/images/git.svg",
    label: "Git",
    desc: "Version control and collaboration",
  },

  // Testing
  {
    imgSrc: "/images/jest.svg",
    label: "Jest",
    desc: "JavaScript testing framework",
  },

  // State Management
  // {
  //   imgSrc: "/images/redux.svg",
  //   label: "Redux",
  //   desc: "State management library",
  // },

  // Cloud Services
  // {
  //   imgSrc: "/images/aws.svg",
  //   label: "AWS",
  //   desc: "Cloud computing platform",
  // },

  // Security
  {
    imgSrc: "/images/owasp.svg",
    label: "OWASP Security Practices",
    desc: "Web application security",
  },

  // Development Tools
  {
    imgSrc: "/images/vs-code.svg",
    label: "Visual Studio Code",
    desc: "Powerful code editor for web development",
  },
];

const Skill = () => {
  return (
    <section className="section" id="skills">
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
