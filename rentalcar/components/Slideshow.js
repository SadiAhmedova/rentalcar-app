import { useRef, useEffect } from 'react';
import carsData from "./CarsData";

export default function Slideshow() {
  const slideIndexRef = useRef(0);

  useEffect(() => {
    function showSlides() {
      const slides = document.getElementsByClassName("mySlides");
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      
      slideIndexRef.current++;
      if (slideIndexRef.current >= slides.length) {
        slideIndexRef.current = 0;
      }
      
      slides[slideIndexRef.current].style.display = "block";
    };

    const slideInterval = setInterval(showSlides, 3000);

    
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div id="slideshow">
      {carsData.map((car, index) => (
        <div key={index} className="mySlides fade">
          <img src={`images/${car.image}`} alt={`${car.brand} ${car.model}`} />
        </div>
      ))}
    </div>
  );
}
