import React from 'react'
import { HeaderLogo } from './style'

export const Logo = () => {
  return (
    <HeaderLogo>
      <p>
        <i className="fas fa-map-marker-alt"></i>
        Bogotá
      </p>
      <img src="./assets/img/mountains.svg" alt="imagen" />
    </HeaderLogo>
  )
}
