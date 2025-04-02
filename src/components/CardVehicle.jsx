import { useNavigate } from 'react-router-dom';
import { useFavorites } from '../context/FavoriteContext'

const CardVehicle = ({vehiculos}) => {
    const navigate = useNavigate(); 
    const {favorites, addFavorite, removeFavorite} = useFavorites();
    const isFavorite = favorites.some(fav => fav.url === vehiculos.url);
    const handleReadMore = () => {
      navigate(`/vehiculo/${vehiculos.id}`, { 
        state: { vehiculo: vehiculos } 
      });
    };
    const handleToggleFavorite = () => {
      if (isFavorite) {
          removeFavorite(vehiculos.url);
     
      } else {
          addFavorite(vehiculos);
       
      }
    };
  return (
    <div className="card" style={{'Width': '400px'}}>
      <img src= {vehiculos.ImgVehicles} className="card-img-top bg-primary" alt="..." style={{'width': '400px', 'height':'200px'}}/>
      <div className="card-body">
          <h4>{vehiculos.name}</h4>
          <hr />
          <h6>Model:{vehiculos.model}</h6>
          <h6> Lenght(m): {vehiculos.length}</h6>
          <h6> Passengers: {vehiculos.passengers}</h6>
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
  )
}
export default CardVehicle;