import IconAnimation from "./animation/IconAnimation";
function Skills() {
  return (
    <div
      name="skills"
      className="relative z-10  mx-auto flex h-[20rem] max-w-[1000px] flex-col text-slate-300 "
    >
      <div className="mb-8 flex flex-col ">
        <div>
          <p className="inline border-b-4 border-yellow-400 text-4xl font-bold">
            Skills
          </p>
        </div>
        <div className="mt-4">// Here are the technologies I use:</div>
      </div>
      <div className="grid grid-cols-3 gap-12">
        <div className="text-center">
          <div className="inline border-b-2 border-slate-400 pb-1 text-lg font-bold">
            Front-end
          </div>
          <div className="headerIcons  ">
            <IconAnimation path={"../assets/react.svg"} altName={"react"} />
            <IconAnimation
              path={"../assets/icons8-tailwind-css.svg"}
              altName={"tailwind"}
            />
            <IconAnimation
              path={"../assets/javascript.svg"}
              altName={"javascript"}
            />
            <IconAnimation path={"../assets/html.svg"} altName="html" />
            <IconAnimation path={"../assets/css.svg"} altName="css" />
            <IconAnimation path={"../assets/sass.svg"} altName="sass" />
            <IconAnimation
              path={"../assets/icons8-bootstrap.svg"}
              altName="bootstrap"
            />
          </div>
        </div>
        <div className="text-center">
          <div className="inline border-b-2 border-slate-400 pb-1 text-lg font-bold">
            Back-end
          </div>
          <div className="headerIcons">
            <IconAnimation path={"../assets/mongodb.png"} altName={"mongodb"} />
            <IconAnimation
              path={"../assets/icons8-express-js.svg"}
              altName={"express"}
            />
            <IconAnimation
              path={"../assets/icons8-nodejs.svg"}
              altName={"nodejs"}
            />
          </div>
        </div>
        <div className="text-center">
          <div className="inline border-b-2 border-slate-400 pb-1 text-lg font-bold">
            Others
          </div>
          <div className="headerIcons">
            <IconAnimation
              path={"../assets/icons8-wordpress.svg"}
              altName="wordpress"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
