import React, { useContext } from 'react'
import { VehiculoContext } from '../context/VehiculoContext'
import CardVehicle from './CardVehicle';

const ListaVehicle = () => {

    const { vehiculos } = useContext(VehiculoContext);

  return (
    <div className='container' style={{ overflowX: 'auto' }}>
    <h1>Vehiculos</h1>
    <div className='d-flex flex-row flex-nowrap' style={{ width: 'max-content' }}>
        {Object.values(vehiculos).map((item) => (
            <div key={item.id}>
                <CardVehicle
                    vehiculos={item}
                />
            </div>
        ))};
    </div>
</div>
  )
}

export default ListaVehicle;