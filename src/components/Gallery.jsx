import "../styles/Gallery.css";

import edna from "../assets/images/edna.jpg";

function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="container">

        <h2>Happy Clients</h2>

        <p className="gallery-subtitle">
          A few of the wonderful pets I've had the pleasure of caring for.
        </p>

        <div className="gallery-grid">

          <div className="gallery-card">
            <img src={edna} alt="Edna the cat" />

            <h3>Edna</h3>

            <p>
              Enjoying some sunshine during a home visit.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Gallery;