import React from 'react'
import { WeatherWidgetItemFooter } from './style'

export const WidgetItemFooter = ({data}) => {
  const{ humidity, weather, wind } = data
  return (
    <WeatherWidgetItemFooter>
      <span>Húmedad {humidity}%</span>
      <span>{weather}</span>
      <span>{wind}Km/h</span>
    </WeatherWidgetItemFooter>
  )
}
