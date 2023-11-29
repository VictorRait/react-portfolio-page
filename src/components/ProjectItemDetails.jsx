import { useEffect, useState } from "react";
import Button from "./Button";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function ProjectItemDetails({ work, linkBtn, onLinkBtn }) {
  function handleLink(btnNum) {
    onLinkBtn(btnNum);
  }

  return (
    <div className="grid w-[70vw]  gap-4 text-slate-300 sm:grid-cols-2">
      {/* image */}
      <div>
        {work.name === "Weather App" ? (
          <Carousel
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            showIndicators={false}
          >
            {work.image.map((image, index) => (
              <div key={index}>
                <img
                  className="max-w-[200px] rounded-md shadow-lg shadow-[#00000080]"
                  src={image}
                  alt={`workImage-${index}`}
                />
              </div>
            ))}
          </Carousel>
        ) : (
          <img
            className="max-h-[300px] rounded-md shadow-lg shadow-[#00000080]"
            src={work.image}
            alt="workImage"
          />
        )}
      </div>
      {/* description and btns */}
      <div className="flex flex-col justify-between px-5 py-1">
        <div>{work.description}</div>
        <div>
          <span className="mt-8">
            Tools used:{" "}
            {work.tag
              .filter((tag) => tag !== "all" && tag !== "full-stack")
              .map((t) => t.slice(0, 1).toUpperCase() + t.slice(1))
              .join(" / ")}
          </span>

          <div className="mt-2 flex gap-4">
            {work.codeLink && (
              <a href={work.codeLink}>
                <Button onClick={() => handleLink(1)}>
                  {linkBtn === 1 ? "..." : "Code"}
                </Button>
              </a>
            )}
            {work.demoLink && (
              <a href={work.demoLink}>
                <Button onClick={() => handleLink(2)}>
                  {linkBtn === 2 ? "..." : "Demo"}
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectItemDetails;
