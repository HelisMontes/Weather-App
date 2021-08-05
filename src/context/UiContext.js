import React, {createContext} from 'react';
import { useFetch } from '../hook/useFetch';

export const UiContext = createContext();

export const UiProvider = ({children}) => {
  const {data: bogota, loading} = useFetch('Bogota');
  const {data: paris, loading: load} = useFetch('Paris');
  if(loading || load) return <h1>Cargando....</h1>
  return (
    <UiContext.Provider value={{bogota, paris}}>
      { children }
    </UiContext.Provider>
  )
}
