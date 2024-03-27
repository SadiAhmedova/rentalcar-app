import {useRouter} from "next/router";
import Image from "next/image";
import carsData from "./CarsData";


export default function CarsList(){
    const router = useRouter();
    

    function rentCar(brand, model, price){
        const searchInfo = JSON.parse(localStorage.getItem('searchInfo'));
        

        if (searchInfo && Object.keys(searchInfo).length !== 0) {
            const oneDay = 24 * 60 * 60 * 1000;
            const pickupDateTime = new Date(searchInfo.pickupDate).getTime();
            const returnDateTime = new Date(searchInfo.returnDate).getTime();

            const totalDays = Math.round(Math.abs((returnDateTime - pickupDateTime) / oneDay));

            const modal = document.querySelector('.modal');
            const rentalInfoElement = document.getElementById('rental-info');
            const thankyouElement = document.getElementById('thank-you');

            rentalInfoElement.textContent = `Price: $${price}/day | Rent for ${totalDays} days: $${price * totalDays}.`;
            thankyouElement.textContent = `${brand} - ${model} will be waiting for you!`;

            modal.style.display = 'block';

            const closeModal = document.querySelector('.close');
            closeModal.addEventListener('click', function () {
                modal.style.display = 'none';
                router.push('/');
                localStorage.removeItem('searchInfo');
            });

            window.addEventListener('click', function (event) {
                if (event.target === modal) {
                    modal.style.display = 'none';

                    router.push('/');
                    localStorage.removeItem('searchInfo');
                }
            });

        } else {
            alert('Please select your pick up and drop off information!');
            router.push('/our-cars');            
        }
    }


    return(
        <div className="collection" id="our-current-cars">
            {carsData.map((car,index)=>(
            <div className="car" key={index} id={`office-${index}`}>
             <Image
                alt={`${car.brand} ${car.model}`}
                src={`/images/${car.image}`}
                width={200}
                height={100}
            />
                <div>
                    <h2>{car.brand} {car.model} - {car.year}</h2>
                    <p>Price: ${car.price}/day</p>
                    <button className="btn" onClick={() => rentCar(car.brand, car.model, car.price)}>Rent</button>
                </div>
            </div>
            ))}
            	<div className="modal">
          <div className="modal-content">
              <span className="close">&times;</span>
              <h2>Thank you for trusting us!</h2>
              <p id="car-info"></p>
              <p id="rental-info"></p>
              <p id="thank-you"></p>
          </div>
       </div>  
    </div>
    );

}