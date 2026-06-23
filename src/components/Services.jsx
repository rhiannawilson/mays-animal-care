import "../styles/Services.css";

function Services() {
  return (
    <section id="services" className="services">
      <div className="container">

        <h2 className="text-center mb-5">Our Services</h2>

        <div className="row">

          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h3>Dog Walking</h3>
                <ul>
                  <li>30 minute walk</li>
                  <li>60 minute walk</li>
                  <li>Individual attention</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h3>Pet Sitting</h3>
                <ul>
                  <li>In your pet's own home</li>
                  <li>Feeding and companionship</li>
                  <li>Peace of mind while you're away</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h3>Puppy Visits</h3>
                <ul>
                  <li>Feeding</li>
                  <li>Playtime</li>
                  <li>Toilet breaks</li>
                  <li>Midday check-ins</li>
                </ul>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Services;