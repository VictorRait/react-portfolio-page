function About() {
  return (
    <div name="about" className="h-screen w-full  text-slate-300">
      <div className="  flex h-full w-full flex-col items-center justify-center ">
        <div className="relative z-10 grid w-full max-w-[1000px] grid-cols-2 gap-8">
          <div className="pb-8 pl-4 sm:text-right">
            <p className="inline border-b-4 border-yellow-400 text-4xl font-bold">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="relative z-10  grid w-full max-w-[1000px] gap-5 px-4 sm:grid-cols-2">
          <div className="font- mr-3 sm:text-right">
            <p className=" text-4xl font-bold">
              {"I hope you had a nice day :)"}
            </p>
          </div>
          <div>
            <span className="  text-md  leading-6 tracking-wide  text-slate-400 ">
              {`I am passionate about coding, like a video game it has caused me to level up and because of it I am excited about what the future will bring. I have made projects below to showcase my ability and drive. If you like some of it, let's work together! `}
              {/* {` I am pursuing my passion for web development. I am mostly self-taught and most of my knowledge is from tutorials I have scoured from the web. I am driven and motivated as I code everyday. Now, I am seeking internship or entry-level positions to make my skills more real-world. Below are some of my works if you like it. Let's work
            together!`} */}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
