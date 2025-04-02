import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';

const PlanetaDetails = () => {

  const { id } = useParams(); // Obtiene el ID de la URL
  const { state } = useLocation();
  const planeta = state?.planeta; // Usa optional chaining (?.)



  return (
    <div>
              <NavBar/>
            <div className="d-flex justify-content-center align-items-center flex-column p-5 m-5 ">
              <div className="row g-0">
                {/* Columna de la imagen */}
                <div className="col-md-6">
                  <img 
                    src={planeta.ImgPlanet} 
                    className="img-fluid rounded-start h-100 " 
                    alt="image" 
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                
                {/* Columna de la descripción */}
                <div className="col-md-6">
                  <div className="card-body h-100 d-flex justify-content-center align-items-center  flex-column">
                    <h4 className="card-title">{planeta.name}</h4>
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
                    <div className="col"><h6 style={{color:'red'}}>{planeta.name}</h6></div>
                  </div>
                  <div className="col">
                    <div className="col"><h5 style={{color:'red'}}>Rotation_Period</h5></div>
                    <br />
                    <div className="col"><h6 style={{color:'red'}}>{planeta.rotation_period}</h6></div>
                  </div>
                  <div className="col">
                    <div className="col"><h5 style={{color:'red'}}>Orbital_Period</h5></div>
                    <br />
                    <div className="col"><h6 style={{color:'red'}}>{planeta.orbital_period}</h6></div>
                  </div>
                  <div className="col">
                    <div className="col"><h5 style={{color:'red'}}>Diameter</h5></div>
                    <br />
                    <div className="col"><h6 style={{color:'red'}}>{planeta.diameter}</h6></div>
                  </div>
                  <div className="col">
                    <div className="col"><h5 style={{color:'red'}}>Climate</h5></div>
                    <br />
                    <div className="col"><h6 style={{color:'red'}}>{planeta.climate}</h6></div>
                  </div>
                  <div className="col">
                    <div className="col"><h5 style={{color:'red'}}>Gravity</h5></div>
                    <br />
                    <div className="col"><h6 style={{color:'red'}}>{planeta.gravity}</h6></div>
                  </div>
                  <div className="col">
                    <div className="col"><h5 style={{color:'red'}}>Surface_W+ater</h5></div>
                    <br />
                    <div className="col"><h6 style={{color:'red'}}>{planeta.surface_water}</h6></div>
                  </div>

                </div>
    
    </div>
  )
}

export default PlanetaDetails;