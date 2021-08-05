import React from 'react'
import { ReviewersHead, ReviewersHeadUsers } from './style'

export const Head = () => {
  return (
    <ReviewersHead>
      <p>+ Top reviewer</p>
      <ReviewersHeadUsers>
        <img src="./assets/img/avatar-1.jpg" alt="avatar-1" />
        <img src="./assets/img/avatar-2.jpg" alt="avatar-2" />
        <img src="./assets/img/avatar-3.jpg" alt="avatar-3" />
        <a href="http://localhost:3000/">6+</a>
      </ReviewersHeadUsers>
    </ReviewersHead>
  )
}
