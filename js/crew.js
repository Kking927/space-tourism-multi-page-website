// Crew Data Matrix
const crewData = [
  {
    name: "Douglas Hurley",
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    image: "https://github.com/Kking927/space-tourism-multi-page-website/blob/main/images/crew/image-douglas-hurley.webp?raw=true"
  },
  {
    name: "Mark Shuttleworth",
    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    image: "https://github.com/Kking927/space-tourism-multi-page-website/blob/main/images/crew/image-mark-shuttleworth.webp?raw=true"
  },
  {
    name: "Victor Glover",
    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.",
    image: "https://github.com/Kking927/space-tourism-multi-page-website/blob/main/images/crew/image-victor-glover.webp?raw=true"
  },
  {
    name: "Anousheh Ansari",
    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    image: "https://github.com/Kking927/space-tourism-multi-page-website/blob/main/images/crew/image-anousheh-ansari.webp?raw=true"
  }
];

// Target the exact crew DOM elements from your HTML
const sliderDots = document.querySelectorAll('.crew-slider__dot');
const crewRole = document.querySelector('.crew__details-role');
const crewName = document.querySelector('.crew__details-name');
const crewBio = document.querySelector('.crew__details-bio');
const crewImage = document.querySelector('.crew__image');

// Slider Event Listener Setup
sliderDots.forEach(dot => {
  dot.addEventListener('click', (e) => {
    // Read the data-index property (0, 1, 2, or 3) from the clicked button
    const targetIndex = e.target.getAttribute('data-index');
    const member = crewData[targetIndex];

    if (member) {
      // 1. Swap active visual indicator states
      sliderDots.forEach(d => {
        d.classList.remove('crew-slider__dot--active');
        d.setAttribute('aria-selected', 'false');
      });
      dot.classList.add('crew-slider__dot--active');
      dot.setAttribute('aria-selected', 'true');

      // 2. Inject the data cleanly into the layout
      crewRole.textContent = member.role;
      crewName.textContent = member.name;
      crewBio.textContent = member.bio;
      
      // 3. Swap the image asset address seamlessly
      crewImage.setAttribute('src', member.image);
      crewImage.setAttribute('alt', member.name);
    }
  });
});
