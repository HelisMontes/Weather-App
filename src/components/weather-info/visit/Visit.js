import React from 'react'
import { WeatherVisit } from './style'

export const Visit = () => {
  return (
    <WeatherVisit>
      <h2>Place to <span>Visit</span></h2>
      <p>
        <i className="fas fa-map-marker-alt"></i>
        Arab Street<span>Singapore</span>
      </p>
      <img src="./assets/img/singapore.jpg" alt="arabia saudita"></img>
    </WeatherVisit>
  )
}
