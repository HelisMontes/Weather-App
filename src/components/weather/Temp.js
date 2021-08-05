import React from 'react'
import { WeatherTemp } from './style'

export const Temp = ({main}) => {
  return (
    <WeatherTemp>
      <h2>
          {Math.ceil(main.temp)}
          <span>&#8451;</span>
      </h2>
    </WeatherTemp>
  )
}
