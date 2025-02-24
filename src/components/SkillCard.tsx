interface Props {
  imgSrc: string;
  label: string;
  desc: string;
  classes?: string;
}

const SkillCard = ({ imgSrc, label, desc, classes }: Props) => {
  return (
    <div
      className={
        "group relative flex items-center gap-4 p-4 rounded-2xl " +
        "bg-zinc-900/30 backdrop-blur-sm border border-zinc-600 " +
        "hover:bg-zinc-800/50 hover:border-zinc-700/50 " +
        "transition-all duration-300 ease-out " +
        "transform hover:scale-[1.02] " +
        classes
      }
    >
      <figure
        className="relative w-14 h-14 rounded-xl p-2.5
        bg-gradient-to-br from-zinc-800 to-zinc-900
        group-hover:from-zinc-700 group-hover:to-zinc-800
        transition-colors duration-300 overflow-hidden
        shadow-lg shadow-zinc-950/20"
      >
        <img
          src={imgSrc}
          alt={label}
          width={32}
          height={32}
          className="w-full h-full object-contain
          transform group-hover:scale-110 transition-transform duration-300"
        />
      </figure>

      <div className="space-y-1">
        <h3
          className="font-medium text-zinc-100 group-hover:text-white
          transition-colors duration-300"
        >
          {label}
        </h3>
      </div>
    </div>
  );
};

export default SkillCard;
