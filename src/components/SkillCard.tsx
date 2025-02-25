interface Props {
  imgSrc: string;
  label: string;
  desc?: string;
  classes?: string;
}

const SkillCard = ({ imgSrc, label, classes }: Props) => {
  return (
    <div
      className={`group flex items-center gap-4 p-3 rounded-xl bg-zinc-900/50 shadow-sm
      hover:bg-zinc-800 hover:shadow-md transition-all duration-300 ${classes}`}
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-zinc-800">
        <img
          src={imgSrc}
          alt={label}
          className="w-9 h-9 object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="text-base font-medium text-zinc-300 group-hover:text-white transition-colors">
        {label}
      </h3>
    </div>
  );
};

export default SkillCard;
