import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

function Home() {
  return (
    <div name="home" className=" h-screen w-full ">
      {/* Container */}
      <div className=" relative z-10 mx-auto -mt-20 flex h-full max-w-[1000px] flex-col justify-center px-8">
        <p className="text-yellow-400">Hi, my name is</p>
        <h1 className="text-5xl font-bold text-slate-300 sm:text-7xl">
          Victor Rait
        </h1>
        <h2 className="text-5xl font-bold text-slate-500 sm:text-7xl">
          {"I'm a Full-stack Web Developer."}
        </h2>
        <p className=" max-w-[600px] py-4 text-slate-500">
          I specialize in building beautiful websites that attracts users by
          giving them a visually pleasing and smooth experience.
        </p>
        <div className="mt-10 hidden items-center  justify-between md:flex">
          <div className="self-start">
            <Link to="projects" smooth={true} duration={500}>
              <button className="group my-2 flex items-center gap-1 border-2 px-6  py-3 text-white   hover:border-yellow-400 hover:text-yellow-400">
                View Work
                <HiArrowNarrowRight className="rotate-90 duration-200 group-hover:translate-y-1.5" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
