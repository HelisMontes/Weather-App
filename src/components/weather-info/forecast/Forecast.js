import React from 'react';
import { WidgetsItem } from './WidgetsItem';
import { WeatherForecast } from './style';
import { useFetchForecast } from '../../../hook/useFetchForecast';

export const Forecast = () => {
  const data  = useFetchForecast();
  return (
    <WeatherForecast>
       <h2>3 Days <span>Forecast</span></h2>
       <div className="weather--forecast__widgets">
        { 
          data.map(daily =>(
            <WidgetsItem
              key={daily.dt}
              daily={daily}
            />
          ))
        }
       </div>
    </WeatherForecast>
  )
}
