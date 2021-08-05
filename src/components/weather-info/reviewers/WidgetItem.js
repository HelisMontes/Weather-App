import React from 'react'
import { Plus, ReviewersWidgetItem } from './style'

export const WidgetItem = ({showButton}) => {
  return (
    <ReviewersWidgetItem>
      <p>
        <i className="fas fa-map-marker-alt"></i>
        Tokio<span>Japon</span>
      </p>
      <img src="./assets/img/japon.jpg" alt="japon" />
      {
        showButton 
          && <Plus> 
            <span>+</span>
          </Plus>
      }
    </ReviewersWidgetItem>
  )
}
