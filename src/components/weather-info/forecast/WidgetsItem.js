import React from 'react';
import moment from 'moment';
import { WidgetsItemTitles } from './WidgetsItemTitles';
import { WidgetsTemp } from './WidgetsTemp';
import { ForecastWidgetsItem } from './style';


export const WidgetsItem = ({daily}) => {
  const date = moment.unix(daily.dt).format('dddd');
  return (
    <ForecastWidgetsItem>
      {
        daily.weather === 'Clear'
        ?<i className="fas fa-cloud-sun"></i>
        :<i className="fas fa-cloud-showers-heavy"></i>
      }
      <WidgetsItemTitles date={date} weather={daily.weather}/>
      <WidgetsTemp temp={daily.temp}/>
    </ForecastWidgetsItem>
  )
}
