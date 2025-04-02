import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useFavorites } from '../context/FavoriteContext'

const CardPlanet = ({planetas}) => {

  const navigate = useNavigate(); 
  const {favorites, addFavorite, removeFavorite} = useFavorites();
  const isFavorite = favorites.some(fav => fav.url === planetas.url);
      
  const handleReadMore = () => {
      navigate(`/planeta/${planetas.id}`, { 
        state: { planeta: planetas } // Pasa el objeto completo
      });
    };

  const handleToggleFavorite = () => {
    if (isFavorite) {
        removeFavorite(planetas.url);
    
    } else {
        addFavorite(planetas);
    }
  };

  return (
          <div className="card" style={{'Width': '400px'}}>
              <img src={planetas.ImgPlanet} className="card-img-top bg-primary" style={{'width': '400px', 'height':'200px'}} alt="..."/>
              <div className="card-body">
                  <h4>{planetas.name}</h4>
                  <hr />
                  <h6>Population: {planetas.population}</h6>
                  <h6>Terrain: {planetas.terrain}</h6>
                  <div className="d-flex justify-content-between ">
                    <button className='btn btn-info btn-outline-primary' onClick={()=>{handleReadMore()}}>
                        Leer mas
                    </button>
                    <button  
                      onClick={() => handleToggleFavorite()}
                      className="btn btn-link"   
                    >
                      <i 
                        className={`bi bi-heart-fill ${isFavorite ? 'text-danger' : 'text-secondary'}`}
                      >
                      </i>
                    </button>
                  </div>   
              </div>
          </div>
  );
};

export default CardPlanet;