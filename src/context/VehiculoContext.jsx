import React, { createContext, useEffect, useState } from 'react'
import { ImgVehicles } from '../store/complementos';

export const VehiculoContext = createContext();

const VehiculoProvider = ({children}) => {

    const [vehiculos, setVehiculos] = useState([]);

    const fetchData =async()=>{
        try{
            const response = await fetch("https://swapi.dev/api/vehicles/");
            if(!response.ok){
                throw new Error("error al importar la data")
            }
            const data = await response.json();
            setVehiculos(data.results)

               data.results.forEach((objeto, index) => {
                objeto.ImgVehicles =  ImgVehicles[index]; 
                });
           

        }catch(error){
            console.log(error)
        }

    }

    useEffect(()=>{fetchData()}, []);

  return (
    <VehiculoContext.Provider value={{vehiculos, setVehiculos}}>
            {children}
    </VehiculoContext.Provider>
  )
}

export default VehiculoProvider;