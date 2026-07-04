import "../styles/Gallery.css";

import edna from "../assets/images/edna.jpg";
import chocco from "../assets/images/chocco.jpeg";

function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2>Happy Pets</h2>
        <p className="gallery-subtitle">
          A few of the wonderful pets I've had the pleasure of caring for.
        </p>
        {/* Gallery - EDNA */}
        <div className="gallery-grid">
          <div className="gallery-card">
            <img src={edna} alt="Edna the cat" />
            <h3>Edna</h3>
            <p>
              Enjoying some sunshine during a home visit.
            </p>
          </div>


        {/* Gallery - Chocco */}
        <div className="gallery-grid">
          <div className="gallery-card">
            <img src={chocco} alt="Chocco the Shitzu" />
            <h3>Chocco</h3>
            <p>
              Enjoying my company on the balcony during a boarding stay at my home.
            </p>
          </div>

        </div>
        </div>

      </div>
    </section>
  );
}

export default Gallery;