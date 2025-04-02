import React, { createContext, useEffect, useState } from "react";
import {ImgPlanet} from '../store/complementos';

export const PlanetContext = createContext();

const PlanetaProvider =  ({children}) =>{

    const [planetas, setPlaneta] = useState([]);

    const fetchData = async() =>{
        try{
            const response = await fetch('https://swapi.dev/api/planets/');
            const data = await response.json();
            console.log( 'Estos son los planetas:', data)
            setPlaneta(data.results)

            data.results.forEach((objeto, index) => {
                objeto. ImgPlanet =  ImgPlanet[index]; 
              });

            console.log(planetas)

        }catch(error){

        };
    };

        useEffect(() => {
            fetchData();
        }, []);

    return(
        <PlanetContext.Provider value={{planetas, setPlaneta}}>
            {children}
        </PlanetContext.Provider>
    )



}

export default PlanetaProvider;