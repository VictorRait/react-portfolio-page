import { useState } from "react";
import Button from "./Button";
import ProjectListItem from "./ProjectListItem";

const works = [
  {
    name: "Shirt Customizer",
    tag: [
      "react",
      "all",
      "html",
      "CSS",
      "framer-motion",
      "Threejs",
      "Valtio",
      "tailwindcss",
    ],
    description:
      "Customize and design your own shirt. See your design live in a 3D shirt model. Upload a picture as a logo or a full texture. You can even ask AI Dream by Wombo to give you a designed image. Please keep AI use to a minimum as its limited generation from the API.",
    image: "../assets/projects_thumbnails/shirt_threejs.png",
    demoLink: "https://snazzy-semifreddo-bcf5c8.netlify.app/",
  },
  {
    name: "The Wild Oasis",
    tag: [
      "react",
      "all",
      "html",
      "CSS",
      "Router",
      "Styled-components",
      "Supabase",
      "React Query",
    ],
    description:
      "An app for employees of a cabin/hotel booking company. The backend is handled with Supabase. The app makes it easier for the users to manage bookings handling creation, editing, and deletion of bookings. Guests are always unconfirmed before check-in but the details of their bookings is kept such as paid or to pay guests. If they included breakfast, and if they have special instructions.",
    image: "../assets/projects_thumbnails/the-wild-oasis.png",
    demoLink: "https://booking-app-oasis.netlify.app/",
  },
  {
    name: "🍕 Fast React Pizza",
    tag: ["react", "all", "html", "CSS", "Router", "tailwindcss"],
    description:
      "A pizza shop delivery app, the site requests the name of the user before seeing the menu which is from an API. You add to cart the pizzas and change the quantity on the menu or on the cart itself. When ordering it requests the phone number and address. There is also a geolocation feature. You are given an orderId, and in the order page details like the estimated time are given to the user. A priority system is implemented in which for an extra fee your order is prioritized.",
    image: "../assets/projects_thumbnails/fast-react-pizza.png",
    demoLink: "https://tubular-naiad-95e787.netlify.app/",
    codeLink: "https://github.com/VictorRait/fast-react-pizza",
  },
  {
    name: "Worldwise",
    tag: ["react", "all", "html", "CSS", "Redux", "vercel", "leafletApi"],
    description:
      "An app to list your journeys around the world and notes about them. It makes use of the leafletAPI to give you a clickable map with geolocation features. It fetches data on the location clicked by the user. Then a form is shown to create notes and automatically takes in the date and details about the city or country.",
    image: "../assets/projects_thumbnails/worldwise.png",
    demoLink: "https://chipper-begonia-5e490c.netlify.app/",
    codeLink: "https://github.com/VictorRait/worldwise",
  },
  {
    name: "UsePopCorn",
    tag: ["all", "html", "CSS", "react"],
    description: "Search and rate your favorite movies. ",
    image: "../assets/projects_thumbnails/usePopCorn.png",
    demoLink: "https://victorrait.github.io/usePopCorn/",
    codeLink: "https://github.com/VictorRait/usePopCorn",
  },
  {
    name: "Forkify",
    tag: ["javascript", "all", "html", "CSS"],
    description: "A recipe app. Make your own or search for it with an API",
    image: "../assets/projects_thumbnails/forkify.png",
    demoLink:
      "https://64ad054eb10e1f4de7af59d1--wondrous-otter-c21d4b.netlify.app/",
    codeLink: "https://github.com/VictorRait/Forkify-v2",
  },

  {
    name: "Space Tourism",
    tag: ["javascript", "all", "html", "SCSS"],
    description:
      "A space tourism site. See your crew and shuttles then select your destination",
    image: "../assets/projects_thumbnails/Space Tourism.png",
    demoLink: "https://victorrait.github.io/Space-tourism/",
    codeLink: "https://github.com/VictorRait/Space-tourism",
  },
  {
    name: "Bootstrap landing page",
    tag: ["all", "html", "bootstrap 5"],
    description: "Tindog. Find the True Love of Your Dog's Life Today. ",
    image: "../assets/projects_thumbnails/bootstrap.png",
    demoLink: "https://classy-treacle-5e0cdb.netlify.app/",
    codeLink: "https://github.com/VictorRait/bootstrapTindog",
  },

  {
    name: "Trillo",
    tag: ["javascript", "all", "html", "CSS"],
    description: "A hotel landing page. Made to master my skills in css",
    image: "../assets/projects_thumbnails/trillo.png",
    demoLink:
      "https://64f6ff50d2a681091e2d4335--coruscating-starship-311b2d.netlify.app/",
    codeLink:
      "https://github.com/VictorRait/Advanced-CSS-and-SASS-course/tree/main/Trillo/css",
  },
  {
    name: "Easybank Landing Page",
    tag: ["javascript", "all", "html", "CSS"],
    description: "Another bank landing page",
    image: "../assets/projects_thumbnails/Easybank2.jpg",
    codeLink: "https://victorrait.github.io/Easybank/",
    demoLink:
      "https://64f6ff50d2a681091e2d4335--coruscating-starship-311b2d.netlify.app/",
  },
  {
    name: "Bankist Landing Page",
    tag: ["javascript", "all", "html", "CSS"],
    description: "A bank landing page",
    image: "../assets/projects_thumbnails/bankist.png",
    codeLink: "https://github.com/VictorRait/fast-react-pizza",
    demoLink: "https://victorrait.github.io/Bankist/",
  },
  {
    name: "My old portfolio page",
    tag: ["javascript", "all", "html", "CSS"],
    description:
      "Here you will find my old portfolio page and some of my old works",
    image: "../assets/projects_thumbnails/old portfolio page.png",
    codeLink: "https://github.com/VictorRait/New-Portfolio-page",
    demoLink: "https://victorrait.github.io/New-Portfolio-page/",
  },
  {
    name: "Blog Site (Wordpress)",
    tag: ["wordpress", "all"],
    description:
      "A Blog site in Wordpress made with OceanWP theme and elementor. Used Simply static plugin to make deployable to netlify",
    image: "../assets/projects_thumbnails/blog site.png",
    demoLink: "https://ephemeral-khapse-7d5c10.netlify.app/",
  },
  {
    name: "Corporate Business Site (Wordpress)",
    tag: ["wordpress", "all"],
    description:
      "A Corporate Business Site in Wordpress made with OceanWP theme and elementor. Used Simply static plugin to make deployable to netlify",
    image: "../assets/projects_thumbnails/Corporate Business Site.png",
    demoLink: "https://prismatic-gecko-5a57f8.netlify.app",
  },
  {
    name: "E-commerce (Wordpress)",
    tag: ["wordpress", "all"],
    description:
      "A shop called onestopshop to order items and add to cart (static version on demo), view the items and their variations in detail in the single page or just view them in the shop arhive page",
    image: "../assets/projects_thumbnails/wordpress ecommerce.png",
    codeLink: "https://github.com/VictorRait/ecommerce",
    demoLink: "https://magenta-fenglisu-8a31d1.netlify.app/",
  },
  {
    name: "Real estate (Wordpress)",
    tag: ["wordpress", "all"],
    description:
      "A real estate site in the UAE, visit categories such as apartments, villas, resorts and cottages. See their price, garage type, location and more.",
    image: "../assets/projects_thumbnails/wordpress real-estate.png",
    codeLink: "https://github.com/VictorRait/real-estate-wordpress",
    demoLink: "https://resplendent-biscotti-9243bc.netlify.app/",
  },
];

function ProjectList({ currentTag, setCurrentPage, currentPage }) {
  const tag = `${currentTag.toLowerCase()}`;

  const PAGE_ITEMS = 6;
  const items = works.filter((work) => work.tag.includes(tag));
  const numOfPages = Math.ceil(items.length / PAGE_ITEMS);
  const returnMap = [];

  function pageList(page) {
    const numStart = page * PAGE_ITEMS;
    const numEnd = page * PAGE_ITEMS + 6;

    const renderList = items.slice(numStart, numEnd);
    return renderList;
  }
  for (let i = 0; i < numOfPages; i++) {
    returnMap.push(i + 1);
  }

  return (
    <>
      <ul className=" mt-10 grid max-w-[950px] grid-cols-1 grid-rows-2 items-center justify-center  gap-y-5 duration-500 sm:grid-cols-2 md:grid-cols-3">
        {pageList(currentPage).map((item) => {
          return <ProjectListItem work={item} key={item.name} />;
        })}
      </ul>
      {numOfPages > 1 && (
        <div className="flex items-center justify-center gap-4 ">
          {returnMap.map((item) => (
            <Button
              type="projects"
              isActiveTag={currentPage === item - 1}
              key={item}
              onClick={() => setCurrentPage(item - 1)}
            >
              {item}
            </Button>
          ))}
        </div>
      )}
    </>
  );
}

export default ProjectList;
