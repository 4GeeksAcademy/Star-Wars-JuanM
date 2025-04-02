import React, { useContext } from 'react'
import { PlanetContext } from '../context/PlanetContext'
import CardPlanet from './CardPlanet';
import { useNavigate } from 'react-router-dom';

const ListaPlanet = () => {

    const {planetas} = useContext(PlanetContext);

  return ( 
        <div className='container' style={{ overflowX: 'auto' }}>
            <h1>Planetas</h1>
            <div className='d-flex flex-row flex-nowrap' style={{ width: 'max-content' }}>
                {Object.values(planetas).map((item) => (
                    <div key={item.id}>
                        <CardPlanet
                            planetas={item}
                        />
                    </div>
                ))};
            </div>
        </div>
    );
  
}

export default ListaPlanet;