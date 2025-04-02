import React from "react";
import { useNavigate } from 'react-router-dom';
import { useFavorites } from '../context/FavoriteContext'

const Card = ({personajes}) =>{

  const navigate = useNavigate(); 
  const {favorites, addFavorite, removeFavorite} = useFavorites();
  const isFavorite = favorites.some(fav => fav.url === personajes.url);
  const handleReadMore = () => {
  navigate(`/personaje/${personajes.id}`, { 
  state: { personaje: personajes } 
  });
  }
  const handleToggleFavorite = () => {
    if (isFavorite) {
        removeFavorite(personajes.url);
    } else {
        addFavorite(personajes);
    }
  };
  // console.log( "personaje desde el Card", personajes.name)
  return(
        <div className="card" style={{'width': '400px'}}>
            <img src= {personajes.Img} className="card-img-top bg-primary" alt="..." style={{width: '400px', height:'200px', objectFit:'cover'}}/>
            <div className="card-body">
                <h4>{personajes.name}</h4>
                <hr />
                <h6>Gender:{personajes.gender}</h6>
                <h6> Hair_Color: {personajes.hair_color}</h6>
                <h6> Eye_Color: {personajes.eye_color}</h6>
                <h7>{personajes.uid}</h7>
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
                          ></i>
                    </button>
                </div>
          </div>
      </div>
  );

}
export default Card;