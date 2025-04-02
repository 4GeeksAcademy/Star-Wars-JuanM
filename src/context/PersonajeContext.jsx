
import React, { createContext, useEffect, useState } from 'react';
import Img from '../store/complementos';

const PersonajeContext = createContext();

const PersonajeProvider = ({ children }) => {
    const [personajes, setPersonajes] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch('https://swapi.dev/api/people/');
            if (!response.ok) {
                throw new Error('Error al importar los datos de la API');
            }
            const data = await response.json();
            setPersonajes(data.results)

            data.results.forEach((objeto, index) => {
                objeto.Img = Img[index]; 
              });

            console.log('esta son las c imagenes',data.results)

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <PersonajeContext.Provider value={{ personajes, setPersonajes }}>
            {children}
        </PersonajeContext.Provider>
    );
};

export { PersonajeProvider };
export default PersonajeContext;