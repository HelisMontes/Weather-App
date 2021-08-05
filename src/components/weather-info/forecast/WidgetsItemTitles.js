import React from 'react'
import { ForecastWidgetsItemTitles } from './style'

export const WidgetsItemTitles = ({date, weather}) => {
  return (
    <ForecastWidgetsItemTitles>
      <h3>{date}</h3>
      <p>{weather[0].main}</p>
    </ForecastWidgetsItemTitles>
  )
}
