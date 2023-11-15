import { useState } from "react";
import Button from "./Button";

function ProjectHeading({ setCurrentTag, onSetCurrentPage }) {
  const [isActiveTag, setIsActiveTag] = useState(0);

  return (
    <div className="text-slate-300">
      <h2 className="inline border-b-4 border-yellow-400 p-1 text-4xl font-bold">
        Projects
      </h2>
      <p className="mt-4">{"// Have a look at some of my recent works"}</p>
      <div className="mt-4 flex gap-3">
        <Button
          isActiveTag={isActiveTag === 0}
          onClick={() => {
            setCurrentTag("All"), setIsActiveTag(0), onSetCurrentPage(0);
          }}
        >
          # All
        </Button>
        <Button
          isActiveTag={isActiveTag === 1}
          onClick={() => {
            setCurrentTag("Full-stack"), setIsActiveTag(1), onSetCurrentPage(0);
          }}
        >
          # Full-stack
        </Button>
        <Button
          isActiveTag={isActiveTag === 2}
          onClick={() => {
            setCurrentTag("React"), setIsActiveTag(2), onSetCurrentPage(0);
          }}
        >
          # React
        </Button>
        <Button
          isActiveTag={isActiveTag === 3}
          onClick={() => {
            setCurrentTag("Javascript"), setIsActiveTag(3), onSetCurrentPage(0);
          }}
        >
          # Javascript
        </Button>
        <Button
          isActiveTag={isActiveTag === 4}
          onClick={() => {
            setCurrentTag("wordpress"), setIsActiveTag(4), onSetCurrentPage(0);
          }}
        >
          # Wordpress
        </Button>
      </div>
    </div>
  );
}

export default ProjectHeading;
