// Data matrix
const technologyData = [
  {
    name: "Launch vehicle",
    images: {
      portrait:
        "https://github.com/Kking927/space-tourism-multi-page-website/blob/main/images/technology/image-launch-vehicle-portrait.jpg?raw=true",
      landscape:
        "https://github.com/Kking927/space-tourism-multi-page-website/blob/main/images/technology/image-launch-vehicle-landscape.jpg?raw=true",
    },
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    name: "Spaceport",
    images: {
      portrait:
        "https://github.com/Kking927/space-tourism-multi-page-website/blob/main/images/technology/image-spaceport-portrait.jpg?raw=true",
      landscape:
        "https://github.com/Kking927/space-tourism-multi-page-website/blob/main/images/technology/image-spaceport-landscape.jpg?raw=true",
    },
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  {
    name: "Space capsule",
    images: {
      portrait:
        "https://github.com/Kking927/space-tourism-multi-page-website/blob/main/images/technology/image-space-capsule-portrait.jpg?raw=true",
      landscape:
        "https://github.com/Kking927/space-tourism-multi-page-website/blob/main/images/technology/image-space-capsule-landscape.jpg?raw=true",
    },
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];

// DOM Elements
const tabButtons = document.querySelectorAll(".tech-tab__btn");
const techName = document.querySelector(".tech__details-name");
const techBio = document.querySelector(".tech__details-bio");
const portraitSource = document.querySelector(".tech__image-wrapper source");
const landscapeImage = document.querySelector(".tech__image");

// Function to update content based on index
function updateTechnologyContent(index) {
  const item = technologyData[index];

  // Update text content
  techName.textContent = item.name;
  techBio.textContent = item.description;

  // Update image sources (both responsive portrait <source> and landscape <img>)
  portraitSource.srcset = item.images.portrait;
  landscapeImage.src = item.images.landscape;
  landscapeImage.alt = item.name;

  // Update tab ARIA and active class states
  tabButtons.forEach((btn, i) => {
    const isActive = i === index;
    btn.classList.toggle("tech-tab__btn--active", isActive);
    btn.setAttribute("aria-selected", isActive ? "true" : "false");
  });
}

// Add event listeners to each tab button
tabButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const index = parseInt(e.target.getAttribute("data-index"), 10);
    updateTechnologyContent(index);
  });
});
