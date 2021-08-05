import React from 'react'
import { WeatherIcon } from './style'

export const Icon = ({main}) => {
  return (
    <WeatherIcon>
      {
        main === 'Clear'
          ?<i className="fas fa-cloud-sun"></i>
          :<i className="fas fa-cloud-showers-heavy"></i> 
      }
    </WeatherIcon>
  )
}
