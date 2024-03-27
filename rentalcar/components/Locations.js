import offices from "./OfficesData";

export default function Locations() {
  function showMap(index) {
      const officeElement = document.getElementById(`office-${index}`);
      if (officeElement) {
          officeElement.classList.add('flipped');
      }
  }

  function hideMap(index) {
      const officeElement = document.getElementById(`office-${index}`);
      if (officeElement) {
          officeElement.classList.remove('flipped');
      }
  }

  return (
      <div className="collection" id="our-locations">
          {offices.map((office, index) => (
              <div className="office" key={index} id={`office-${index}`}>
                  <div className="front">
                      <h2>{office.city} - {office.address}</h2>
                      <button className="btn" onClick={() => showMap(index)}>Directions</button>
                  </div>

                  <div className="back">
                      <iframe src={office.src} width="280" height="150" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                      <button className="btn" onClick={() => hideMap(index)}>Close</button>
                  </div>
              </div>
          ))}
      </div>
  );
}


