import React from 'react';
import { ForecastWidgetsTemp } from './style';

export const WidgetsTemp = ({temp}) => {
  return (
    <ForecastWidgetsTemp>
      <p> 
        {Math.ceil(temp.min)}<span>&#176;</span>
        <span> / </span>  
        {Math.ceil(temp.max)}<span>&#176;</span>
      </p>
    </ForecastWidgetsTemp>
  )
}
