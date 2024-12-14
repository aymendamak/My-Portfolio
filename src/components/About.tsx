const aboutItems = [
  {
    label: "Personnel Project done",
    number: 5,
  },
  {
    label: "Years of experience",
    number: 4,
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[80ch]">
            Welcome! I&apos;m DAMAK Aymen, a seasoned full-stack web developer
            with 4 years of experience in crafting robust and dynamic web
            applications. My expertise lies in harnessing the power of Angular,
            React.js, and Node.js to build seamless, user-centric digital
            experiences. I am passionate about creating high-quality, scalable
            solutions that not only meet business needs but also enhance user
            satisfaction.
            <br />
            By leveraging TypeScript alongside JavaScript, I ensure that my code
            is not only efficient but also maintainable and easy to understand.
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-sky-400 font-semibold">+</span>
                </div>

                <p className="text-sm text-zinc-400"> {label} </p>
              </div>
            ))}

            <img
              src="/images/logo.svg"
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
