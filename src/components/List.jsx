import React, { useContext } from 'react';
import Card from './Card';
import PersonajeContext from '../context/PersonajeContext.jsx';


const List = () => {

    const { personajes } = useContext(PersonajeContext);

    return (
    <div className='container' style={{ overflowX: 'auto' }}>
        <h1>Personajes</h1>
        <div className='d-flex flex-row flex-nowrap' style={{ width: 'max-content' }}>
            {Object.values(personajes).map((item) => (
                <div key={item.id}>
                    <Card
                        personajes={item}
                    />
                </div>
            ))};
        </div>
        </div>
    );
};

export default List;