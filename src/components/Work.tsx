import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/todo-app.png",
    title: "To Do App",
    tags: ["ReactJS", "Vite", "TypeScript", "TailWindCSS"],
    projectLink: "https://todo-app-rho-opal-82.vercel.app/",
  },
];

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My portfolio highlights</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
