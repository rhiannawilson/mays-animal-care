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
    description: "Enjoying some sunshine during a home visit."
  },

  {
    name: "Chocco",
    image: chocco,
    alt: "Chocco the Shih Tzu",
    description: "Balcony pats during a boarding stay at my home."
  },

  {
    name: "Maples",
    image: mapleswindow,
    alt: "A cat inside a window",
    description: "Please don't go!"
  },

  {
    name: "Mia",
    image: mia,
    alt: "Mia the dog",
    description:
      "Getting ready to stick her little nose out of the car window, safety first!"
  },

  {
    name: "Willow & Whiskey",
    image: willowwhiskey,
    alt: "Two foster kittens",
    description: "Foster Kittens"
  },

  {
    name: "Roger, Rosie & Archer",
    image: rogerRosieArcher,
    alt: "Three dogs",
    description: "The Three Musketeers"
  },

  {
    name: "Mittens",
    image: mittens,
    alt: "Mittens the cat",
    description: "On the 'Not so' naughty step for this Princess"
  },

  {
    name: "Bob",
    image: bob,
    alt: "Bob the dog",
    description: "Home visit poses featuring Bob"
  },

  {
    name: "Misty",
    image: misty,
    alt: "Misty the cat",
    description: "A little darling Maine Coon–Siamese cross"
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