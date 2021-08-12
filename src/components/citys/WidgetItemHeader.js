import React from 'react'
import { WeatherWidgetItemHeader, WeatherWidgetItemHeaderCity, WeatherWidgetItemHeaderIcon, WeatherWidgetItemHeaderTemp } from './style'

export const WidgetItemHeader = ({data}) => {
  const{ weather,name, temp } = data
  return (
    <WeatherWidgetItemHeader>
      <WeatherWidgetItemHeaderIcon>
        {
          weather === 'Clear'
            ?<i className="fas fa-cloud-sun"></i>
            :<i className="fas fa-cloud-showers-heavy"></i> 
        }
      </WeatherWidgetItemHeaderIcon>
      <WeatherWidgetItemHeaderTemp>
        <h3>{Math.ceil(temp)}
          <span>&#8451;</span>
        </h3>
      </WeatherWidgetItemHeaderTemp>
      <WeatherWidgetItemHeaderCity>
        <h3>{name}</h3>
        <p>Francia</p>
      </WeatherWidgetItemHeaderCity>
    </WeatherWidgetItemHeader>
  )
}
