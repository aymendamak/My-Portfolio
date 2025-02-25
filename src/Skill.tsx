import SkillCard from "./components/SkillCard";

type Skill = {
  category: string;
  imgSrc: string;
  label: string;
};

const skills: Skill[] = [
  {
    category: "Programming Languages",
    imgSrc: "/images/javascript.svg",
    label: "JavaScript",
  },
  {
    category: "Programming Languages",
    imgSrc: "/images/typescript.svg",
    label: "TypeScript",
  },
  { category: "Frontend", imgSrc: "/images/react.svg", label: "React" },
  { category: "Frontend", imgSrc: "/images/angular.svg", label: "Angular" },
  {
    category: "Frontend",
    imgSrc: "/images/tailwindcss.svg",
    label: "Tailwind CSS",
  },
  { category: "Backend", imgSrc: "/images/nodejs.svg", label: "Node.js" },
  { category: "Backend", imgSrc: "/images/expressjs.svg", label: "Express.js" },
  { category: "Databases", imgSrc: "/images/sql.svg", label: "SQL" },
  {
    category: "Databases",
    imgSrc: "/images/mySQL.svg",
    label: "MongoDB / MySQL",
  },
  { category: "Databases", imgSrc: "/images/prisma.svg", label: "Prisma" },
  { category: "Tools", imgSrc: "/images/postman.svg", label: "Postman" },
  { category: "Tools", imgSrc: "/images/git.svg", label: "Git" },
  { category: "Tools", imgSrc: "/images/jenkins-logo.png", label: "Jenkins" },
  { category: "Testing", imgSrc: "/images/jest.svg", label: "Jest" },
  {
    category: "Security",
    imgSrc: "/images/owasp-logo.png ",
    label: "OWASP Security",
  },
  {
    category: "Development Tools",
    imgSrc: "/images/vs-code.svg",
    label: "VS Code",
  },
];

const groupedSkills = skills.reduce((acc, skill) => {
  acc[skill.category] = acc[skill.category] || [];
  acc[skill.category].push(skill);
  return acc;
}, {} as Record<string, Skill[]>);

const Skill = () => {
  return (
    <section className="section" id="skills">
      <div className="container text-center reveal-up">
        <h2 className="headline-2">Essential Tools I Use</h2>
        <p className="text-zinc-400 mt-3 mb-6 max-w-[50ch] mx-auto">
          The key technologies and tools that help me build high-performance
          applications.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
          {Object.entries(groupedSkills).map(([category, skills]) => (
            <div
              key={category}
              className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-700/50 shadow-sm hover:shadow-md transition-all reveal-up"
            >
              <h3 className="text-sm font-semibold text-zinc-300 mb-3 uppercase tracking-wide">
                {category}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map(({ imgSrc, label }, key) => (
                  <SkillCard key={key} imgSrc={imgSrc} label={label} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
