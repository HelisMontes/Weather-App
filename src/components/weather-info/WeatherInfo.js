import React from 'react'
import { WeatherInformation } from './style'
import { Forecast } from './forecast/Forecast'
import { Reviewers } from './reviewers/Reviewers'
import { Visit } from './visit/Visit'

export const WeatherInfo = () => {
  return (
    <WeatherInformation>
      <Forecast />
      <Visit />
      < Reviewers />
    </WeatherInformation>
  )
}
