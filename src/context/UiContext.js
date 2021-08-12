import React, {createContext} from 'react';
import { useFetch } from '../hook/useFetch';

export const UiContext = createContext();

export const UiProvider = ({children}) => {
  const {data: bogota, loading} = useFetch('Bogota');
  const {data: paris, loading: load} = useFetch('Paris');

  if(loading || load) return <h1>Cargando....</h1>
  const WidgetItem = [
    {
      humidity: '46',
      id: 2980000,
      name: 'Lion',
      temp: '20.06',
      weather: 'Clouds',
      wind: '2.06'
    },
    {
      humidity: paris?.main.humidity,
      id: paris?.id,
      name: paris?.name,
      temp: paris?.main.temp,
      weather: paris?.weather[0].main,
      wind: paris?.wind.speed
    }
  ]
  return (
    <UiContext.Provider value={{bogota, items:WidgetItem}}>
      { children }
    </UiContext.Provider>
  )
}
