import { useRef, useState } from "react";
import { useEffect } from "react";
import { CgOptions } from "react-icons/cg";
import "./animation/animateEnter.css";
import Modal from "./Modal";
import ProjectItemDetails from "./ProjectItemDetails";

function ProjectListItem({ work }) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [linkBtn, setLinkBtn] = useState(0);
  // const lists = document.querySelectorAll(".projectItem");

  const revealList = function (entries, observer) {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };
  const options = {
    root: null,

    threshold: 1,
  };

  useEffect(() => {
    let sectionObserver = new IntersectionObserver(revealList, options);
    if (containerRef.current) {
      sectionObserver.observe(containerRef.current);
    }
    if (isVisible) {
      setIsAnimating(true);

      setLinkBtn(0);
    }
    // clicked for details btns

    return () => {
      if (containerRef.current) {
        sectionObserver.unobserve(containerRef.current);
      }
    };
  }, [containerRef, isVisible]);

  return (
    <Modal>
      <Modal.Open opens="details">
        <li
          ref={containerRef}
          className={`opacity-0 ${
            isAnimating && "animateEnterRight"
          } group h-[200px] w-[300px] justify-self-center  rounded-md shadow-lg shadow-[#00000080] brightness-[.3]  duration-300 hover:brightness-[.8]`}
          style={{
            backgroundImage: `url('${work.image}')`,
            backgroundSize: "cover",
          }}
        ></li>
      </Modal.Open>
      <Modal.Window name="details">
        <ProjectItemDetails
          work={work}
          linkBtn={linkBtn}
          onLinkBtn={setLinkBtn}
        />
      </Modal.Window>
    </Modal>
  );
}

export default ProjectListItem;
