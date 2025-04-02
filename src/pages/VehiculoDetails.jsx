import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';

const VehiculoDetails = () => {

  const { id } = useParams(); 
  const { state } = useLocation();
  const vehiculo = state?.vehiculo; 

  return (

    <>
      <NavBar/>
    <div className="d-flex justify-content-center align-items-center flex-column p-5 m-5 ">
        <div className="row g-0">
          {/* Columna de la imagen */}
          <div className="col-md-6">
            <img 
              src={vehiculo.ImgVehicles} 
              className="img-fluid rounded-start h-100 " 
              alt="image" 
              style={{ objectFit: 'cover' }}
            />
          </div>
          
          {/* Columna de la descripción */}
          <div className="col-md-6">
            <div className="card-body h-100 d-flex justify-content-center align-items-center  flex-column">
              <h4 className="card-title">{vehiculo.name}</h4>
                  <br />
              <p className="card-text flex-grow-1 ms-5" style={{fontSize:'24px'}}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet rem suscipit quidem corporis doloribus iusto optio eos, id quibusdam animi earum possimus eaque deleniti molestias ipsum explicabo consequatur fugiat numquam.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet rem suscipit quidem corporis doloribus iusto optio eos, id quibusdam animi earum possimus eaque deleniti molestias ipsum explicabo consequatur fugiat numquam.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr style={{backgroundColor:'red', height: '5px'}} />

      <div class=" row d-flex d-flex justify-content-center m-5">

            <div className="col">
              <div className="col"><h5 style={{color:'red'}}>Name</h5></div>
              <br />
              <div className="col"><h6 style={{color:'red'}}>{vehiculo.name}</h6></div>
            </div>
            <div className="col">
              <div className="col"><h5 style={{color:'red'}}>Model</h5></div>
              <br />
              <div className="col"><h6 style={{color:'red'}}>{vehiculo.model}</h6></div>
            </div>
            <div className="col">
              <div className="col"><h5 style={{color:'red'}}>Manufacturer</h5></div>
              <br />
              <div className="col"><h6 style={{color:'red'}}>{vehiculo.manufacturer}</h6></div>
            </div>
            <div className="col">
              <div className="col"><h5 style={{color:'red'}}>Cost_in_Credits</h5></div>
              <br />
              <div className="col"><h6 style={{color:'red'}}>{vehiculo.cost_in_credits}</h6></div>
            </div>
            <div className="col">
              <div className="col"><h5 style={{color:'red'}}>Length</h5></div>
              <br />
              <div className="col"><h6 style={{color:'red'}}>{vehiculo.length}</h6></div>
            </div>
            <div className="col">
              <div className="col"><h5 style={{color:'red'}}>Cargo_Capacity</h5></div>
              <br />
              <div className="col"><h6 style={{color:'red'}}>{vehiculo.cargo_capacity}</h6></div>
            </div>
            <div className="col">
              <div className="col"><h5 style={{color:'red'}}>Vehicle_Class</h5></div>
              <br />
              <div className="col"><h6 style={{color:'red'}}>{vehiculo.vehicle_class}</h6></div>
            </div>

          </div>
  
  </>
    
  )
}

export default VehiculoDetails;