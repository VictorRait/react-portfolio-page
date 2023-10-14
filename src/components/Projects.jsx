import { useState } from "react";
import ProjectHeading from "./ProjectHeading";
import ProjectList from "./ProjectList";

function Projects() {
  const [currentTag, setCurrentTag] = useState("All");
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <div
      name="projects"
      className="flex min-h-screen w-full items-center justify-center p-4 pb-10 "
    >
      <div className="relative  z-10 flex  w-full max-w-[1000px] flex-col text-left">
        <ProjectHeading
          setCurrentTag={setCurrentTag}
          onSetCurrentPage={setCurrentPage}
        />
        <ProjectList
          currentTag={currentTag}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

export default Projects;
