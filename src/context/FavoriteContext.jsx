import { createContext, useContext, useReducer, useState } from "react";

const FavoriteContext = createContext();
const FAVORITES_ACTIONS = {
  ADD: 'ADD_FAVORITE',
  REMOVE: 'REMOVE_FAVORITE'
};
const initialFavorites = [];
const favoritesReducer = (state, action) => { 
  switch (action.type) {
    case FAVORITES_ACTIONS.ADD:
      
      if (state.some(char => char.url === action.payload.url)) {
        return state;
      }
      return [...state, action.payload];

    case FAVORITES_ACTIONS.REMOVE:
      return state.filter(char => char.url !== action.payload);

    default:
      return state;
  }
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, dispatch] = useReducer(favoritesReducer, initialFavorites);
  const [isfavorite, setIsFavorite]=useState(false)
  console.log("desde el contexto favorito", favorites);
  const addFavorite = (personaje) => {
    dispatch({ type: FAVORITES_ACTIONS.ADD, payload: personaje });
  };
  const removeFavorite = (id) => {
    dispatch({ type: FAVORITES_ACTIONS.REMOVE, payload: id });

  };

  return (
    <FavoriteContext.Provider value={{ favorites, addFavorite, removeFavorite, setIsFavorite,isfavorite}}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorites = () => {
  return useContext(FavoriteContext);
};