import React, { useContext } from 'react';
import { WidgetItem } from './WidgetItem';
import { Add } from './Add';
import { UiContext } from '../../context/UiContext'
import { Weather } from './style';

export const CitysWeather = () => {
  const {paris} = useContext(UiContext);
  const { id}  = !!paris && paris
  return (
    <Weather>
      <div className="citys--weather__widget">
          <WidgetItem />
          {
            id &&  <WidgetItem paris={paris}/>
          }
      </div>
      <Add />
    </Weather>
  )
}
