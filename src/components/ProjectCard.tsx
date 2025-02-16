interface Props {
  imgSrc: string;
  tags: string[];
  title: string;
  projectLink: string[];
  classes?: string;
}

const ProjectCard = ({ imgSrc, tags, title, projectLink, classes }: Props) => {
  return (
    <div
      className={
        "relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 " +
        "active:bgzinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors" +
        classes
      }
    >
      <figure className="img-box aspect-square rounded-lg mb-4">
        <img src={imgSrc} alt={title} loading="lazy" className="img-cover" />
      </figure>

      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="title-1 mb-3">{title}</h3>

          <div className="flex flex-wrap items-center gap-2">
            {tags.map((label, key) => (
              <span
                className="h-8 text-sm text-zinc-400 bg-zinc-50/5 
                grid items-center px-3 rounded-lg"
                key={key}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-2 pt-4">
        {projectLink.map((link, index) => (
          <a
            key={index}
            href={link}
            target="_blank"
            className="w-11 h-11 rounded-lg grid place-items-center 
                bg-sky-400 text-zinc-950 shrink-0 hover:bg-sky-500 transition-colors"
          >
            <span className="material-symbols-outlined">
              {index === 1 ? "storefront" : "dns"}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
