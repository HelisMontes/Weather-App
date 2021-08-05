import React from 'react'
import { WeatherWidgetItemHeader, WeatherWidgetItemHeaderCity, WeatherWidgetItemHeaderIcon, WeatherWidgetItemHeaderTemp } from './style'

export const WidgetItemHeader = ({data}) => {
  const{name, main} = !!data && data
  return (
    <WeatherWidgetItemHeader>
      <WeatherWidgetItemHeaderIcon>
        <i className="fas fa-cloud-sun"></i>
      </WeatherWidgetItemHeaderIcon>
      <WeatherWidgetItemHeaderTemp>
        <h3>{main ? Math.ceil(main.temp) : '18'}
          <span>&#8451;</span>
        </h3>
      </WeatherWidgetItemHeaderTemp>
      <WeatherWidgetItemHeaderCity>
        <h3>{name ? name : 'Lion'}</h3>
        <p>Francia</p>
      </WeatherWidgetItemHeaderCity>
    </WeatherWidgetItemHeader>
  )
}
