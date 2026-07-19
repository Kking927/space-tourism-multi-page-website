// ==========================================================================
// PLANET DATA MATRIX (CodePen Absolute Image Paths)
// ==========================================================================
const destinationData = [
  {
    name: "Moon",
    images: {
      png: "https://github.com/Kking927/space-tourism-multi-page-website/blob/main/images/destination/image-moon.png?raw=true",
      webp: "https://github.com/Kking927/space-tourism-multi-page-website/blob/main/images/destination/image-moon.webp?raw=true"
    },
    description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days"
  },
  {
    name: "Mars",
    images: {
      png: "https://github.com/Kking927/space-tourism-multi-page-website/blob/main/images/destination/image-mars.png?raw=true",
      webp: "https://github.com/Kking927/space-tourism-multi-page-website/blob/main/images/destination/image-mars.webp?raw=true"
    },
    description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 mil. km",
    travel: "9 months"
  },
  {
    name: "Europa",
    images: {
      png: "https://github.com/Kking927/space-tourism-multi-page-website/blob/main/images/destination/image-europa.png?raw=true",
      webp: "https://github.com/Kking927/space-tourism-multi-page-website/blob/main/images/destination/image-europa.webp?raw=true"
    },
    description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travel: "3 years"
  },
  {
    name: "Titan",
    images: {
      png: "https://github.com/Kking927/space-tourism-multi-page-website/blob/main/images/destination/image-titan.png?raw=true",
      webp: "https://github.com/Kking927/space-tourism-multi-page-website/blob/main/images/destination/image-titan.webp?raw=true"
    },
    description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travel: "7 years"
  }
];

// ==========================================================================
// DYNAMIC PLANET DATA SWAPPING ENGINE
// ==========================================================================
const tabButtons = document.querySelectorAll('.planet-selector__btn');
const planetImg = document.getElementById('planet-img');
const planetWebp = document.getElementById('planet-webp');
const planetName = document.getElementById('planet-name');
const planetDescription = document.getElementById('planet-description');
const planetDistance = document.getElementById('planet-distance');
const planetTravel = document.getElementById('planet-travel');

if (tabButtons.length > 0) {
  tabButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const targetPlanetName = e.target.getAttribute('data-target');
      
      // Match the clicked target name attribute with our data matrix array
      const planetMatch = destinationData.find(p => p.name === targetPlanetName);
      
      if (planetMatch) {
        // Toggle the active underline visual style class
        tabButtons.forEach(btn => btn.classList.remove('planet-selector__btn--active'));
        e.target.classList.add('planet-selector__btn--active');
        
        // Inject the text payloads seamlessly
        planetName.textContent = planetMatch.name;
        planetDescription.textContent = planetMatch.description;
        planetDistance.textContent = planetMatch.distance;
        planetTravel.textContent = planetMatch.travel;
        
        // Update the absolute image URLs for CodePen views
        if (planetImg) {
          planetImg.src = planetMatch.images.png;
          planetImg.alt = `${planetMatch.name} planetary view`;
        }
        if (planetWebp) {
          planetWebp.srcset = planetMatch.images.webp;
        }
      }
    });
  });
}
