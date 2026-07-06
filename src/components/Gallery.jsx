import "../styles/Gallery.css";

import edna from "../assets/images/edna.jpg";
import chocco from "../assets/images/chocco.jpeg";
import mia from "../assets/images/mia.jpeg";
import rra from "../assets/images/rra.jpeg";

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

          {/* Mia*/}
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

        </div>
      </div>
    </section>
  );
}

export default Gallery;