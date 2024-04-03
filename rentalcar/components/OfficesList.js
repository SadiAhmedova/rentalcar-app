import Image from "next/image";
import offices from "./OfficesData";

export default function OfficesList(){
  return(
    <div>
      {offices.map((office,index) => (
        <p key={index}><Image  src="/images/location-icon.ico" alt="Icon for Location" width={20} height={20}></Image>{office.city}, {office.address}</p>
      ))}
    </div>
  );

  
}