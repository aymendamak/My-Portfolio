import { ButtonOutline, ButtonPrimary } from "./Button";

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container lg:grid lg:grid-cols-2 lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="/images/avatar-1.jpg"
                width={40}
                height={40}
                alt=""
                className="img-cover"
              />
            </figure>
            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for work
            </div>
          </div>
          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            Building FullStack Scalable And Modern Web Apps the Future
          </h2>
          <div className="flex items-center gap-3">
            <ButtonPrimary label="Download CV" icon="download" />
            <ButtonOutline
              href="#about"
              label="Scroll down"
              icon="arrow_downward"
            ></ButtonOutline>
          </div>
          <div className="flex flex-col pt-6 gap-3">
            <div className="flex flex-row">
              <a
                target="_blank"
                className="w-10 h-10 grid place-items-center 
             ring-inset ring-2 ring-zinc-50/50 rounded-lg 
             hover:bg-zinc-50 hover:text-zinc-950 active:bg-zinc-50/50"
              >
                <span className="material-symbols-rounded">mail</span>
              </a>
              <p className="m-2 md:text-lg md:max-w-[80ch]">
                aymendamak2@gmail.com
              </p>
            </div>
            <div className="flex flex-row">
              <a
                target="_blank"
                className="w-10 h-10 grid place-items-center 
             ring-inset ring-2 ring-zinc-50/50 rounded-lg 
             hover:bg-zinc-50 hover:text-zinc-950 active:bg-zinc-50/50"
              >
                <span className="material-symbols-rounded">phone</span>
              </a>
              <p className="m-2 md:text-lg md:max-w-[80ch]">
                +33 06 19 49 68 67
              </p>
            </div>
            <div className="flex flex-row">
              <a
                target="_blank"
                className="w-10 h-10 grid place-items-center 
             ring-inset ring-2 ring-zinc-50/50 rounded-lg 
             hover:bg-zinc-50 hover:text-zinc-950 active:bg-zinc-50/50"
              >
                <span className="material-symbols-rounded">location_on</span>
              </a>
              <p className="m-2 md:text-lg md:max-w-[80ch]">
                Marseille, France
              </p>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <figure
            className="w-full max-w-[480px] ml-auto bg-gradient-to-t 
          from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden"
          >
            <img
              src="/images/hero-banner.png"
              width={656}
              height={800}
              alt=""
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
