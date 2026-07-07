import "../styles/Gallery.css";

import edna from "../assets/images/edna.jpg";
import chocco from "../assets/images/chocco.jpeg";
import mia from "../assets/images/mia.jpeg";
import rogerRosieArcher from "../assets/images/rogerRosieArcher.jpeg";
import willowwhiskey from "../assets/images/willowwhiskey.jpeg"; 
import bob from "../assets/images/bob.jpeg";
import mapleswindow from "../assets/images/mapleswindow.jpeg";
import mittens from "../assets/images/mittens.jpg";
import misty from "../assets/images/misty.jpg";

const pets = [
  {
    name: "Edna",
    image: edna,
    alt: "Edna the cat",
    description: "Home Visits"
  },

  {
    name: "Chocco",
    image: chocco,
    alt: "Chocco the Shih Tzu",
    description: "Overnight Boarding"
  },

  {
    name: "Maples",
    image: mapleswindow,
    alt: "A cat inside a window",
    description: "Home Visits"
  },

  {
    name: "Mia",
    image: mia,
    alt: "Mia the dog",
    description:
      "Dog Walking"
  },

  {
    name: "Willow & Whiskey",
    image: willowwhiskey,
    alt: "Two foster kittens",
    description: "Foster Kitten Care"
  },

  {
    name: "Roger, Rosie & Archer",
    image: rogerRosieArcher,
    alt: "Three dogs",
    description: "Multi-dog household care"
  },

  {
    name: "Mittens",
    image: mittens,
    alt: "Mittens the cat",
    description: "Home Visits"
  },

  {
    name: "Bob",
    image: bob,
    alt: "Bob the dog",
    description: "Home Visits"
  },

  {
    name: "Misty",
    image: misty,
    alt: "Misty the cat",
    description: "Home Visits"
  }
];


function Gallery() {
  return (
      <div className="gallery-grid">

  {pets.map((pet) => (

    <div className="gallery-card" key={pet.name}>

      <img
        src={pet.image}
        alt={pet.alt}
      />

      <h3>{pet.name}</h3>

      <p>{pet.description}</p>

    </div>

  ))}

</div>
  );
}

export default Gallery;