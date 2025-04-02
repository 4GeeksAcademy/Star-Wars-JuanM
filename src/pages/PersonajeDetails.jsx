import React, { useContext } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';


const PersonajeDetails = () => {
    const { id } = useParams(); // Obtiene el ID de la URL
    const { state } = useLocation();
    const personaje = state?.personaje; // Usa optional chaining (?.)

    return (

    <>
          <NavBar/>
          <div className="d-flex justify-content-center align-items-center flex-column p-5 m-5 ">
              <div className="row g-0">
                {/* Columna de la imagen */}
                <div className="col-md-6">
                  <img 
                    src={personaje.Img} 
                    className="img-fluid rounded-start h-100 " 
                    alt="image" 
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                
                {/* Columna de la descripción */}
                <div className="col-md-6">
                  <div className="card-body h-100 d-flex justify-content-center align-items-center  flex-column">
                    <h4 className="card-title">{personaje.name}</h4>
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
                    <div className="col"><h6 style={{color:'red'}}>{personaje.name}</h6></div>
                  </div>
                  <div className="col">
                    <div className="col"><h5 style={{color:'red'}}>Height</h5></div>
                    <br />
                    <div className="col"><h6 style={{color:'red'}}>{personaje.height}</h6></div>
                  </div>
                  <div className="col">
                    <div className="col"><h5 style={{color:'red'}}>Mass</h5></div>
                    <br />
                    <div className="col"><h6 style={{color:'red'}}>{personaje.mass}</h6></div>
                  </div>
                  <div className="col">
                    <div className="col"><h5 style={{color:'red'}}>Hair_Color</h5></div>
                    <br />
                    <div className="col"><h6 style={{color:'red'}}>{personaje.hair_color}</h6></div>
                  </div>
                  <div className="col">
                    <div className="col"><h5 style={{color:'red'}}>Birth_Year</h5></div>
                    <br />
                    <div className="col"><h6 style={{color:'red'}}>{personaje.birth_year}</h6></div>
                  </div>
                  <div className="col">
                    <div className="col"><h5 style={{color:'red'}}>Skin_Color</h5></div>
                    <br />
                    <div className="col"><h6 style={{color:'red'}}>{personaje.skin_color}</h6></div>
                  </div>
                  <div className="col">
                    <div className="col"><h5 style={{color:'red'}}>Gender</h5></div>
                    <br />
                    <div className="col"><h6 style={{color:'red'}}>{personaje.gender}</h6></div>
                  </div>

                </div>
        
        </>
  
    );
};

export default PersonajeDetails;