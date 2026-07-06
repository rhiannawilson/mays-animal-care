import "../styles/Gallery.css";

import edna from "../assets/images/edna.jpg";
import chocco from "../assets/images/chocco.jpeg";
import mia from "../assets/images/mia.jpeg";
import rra from "../assets/images/rra.jpeg";
import willowwhiskey from "../assets/images/willowwhiskey.jpeg"; 
import bob from "../assets/images/bob.jpeg";
import mapleswindow from "../assets/images/mapleswindow.jpeg";
import mittens from "../assets/images/mittens.jpg";
import misty from "../assets/images/misty.jpg";


function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2>Happy Pets</h2>

        <p className="gallery-subtitle">
          A few of the wonderful pets I've had the pleasure of caring for.
        </p>

        <div className="gallery-grid">

          {/* Edna */}
          <div className="gallery-card">
            <img src={edna} alt="Edna the cat" />
            <h3>Edna</h3>
            <p>Enjoying some sunshine during a home visit.</p>
          </div>

          {/* Chocco */}
          <div className="gallery-card">
            <img src={chocco} alt="Chocco the Shih Tzu" />
            <h3>Chocco</h3>
            <p>
              Balcony pats during a boarding stay at my home.
            </p>
          </div>
          
          {/* maples in window */}
          <div className="gallery-card">
            <img src={mapleswindow} alt="a cat inside the window" />
            <h3>Maples</h3>
            <p>Please don't go!</p>
          </div>

          {/* Mia */}
           <div className="gallery-card">
            <img src={mia} alt="Mia the dog" />
            <h3>Mia</h3>
            <p>Getting ready to stick her little nose out of the car window, safety first!</p>
          </div>

          {/* Roger, Rosie and Archer */}
          <div className="gallery-card">
            <img src={rra} alt="Roger, Rosie and Archer, three dogs" />
            <h3>Roger, Rosie and Archer</h3>
            <p> The Three Musketeers</p>
          </div>

          {/* Willow Whiskey */}
          <div className="gallery-card">
            <img src={willowwhiskey} alt="two kittens" />
            <h3>Willow & Whiskey</h3>
            <p>Foster Kittens</p>
          </div>


          {/* bob */}
          <div className="gallery-card">
            <img src={bob} alt="a dog" />
            <h3>Bob</h3>
            <p>Home visit poses</p>
          </div>

          {/* mittens */}
          <div className="gallery-card">
            <img src={mittens} alt="a cat" />
            <h3>Mittens</h3>
            <p>to write</p>
          </div>

          {/* misty */}
          <div className="gallery-card">
            <img src={misty} alt="a cat" />
            <h3>Misty</h3>
            <p>to write</p>
          </div>


        </div>
      </div>
    </section>
  );
}

export default Gallery;