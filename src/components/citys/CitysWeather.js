import React, { useContext } from 'react';
import { WidgetItem } from './WidgetItem';
import { Add } from './Add';
import { UiContext } from '../../context/UiContext'
import { Weather } from './style';

export const CitysWeather = () => {
  const {items} = useContext(UiContext);
  return (
    <Weather>
      <div className="citys--weather__widget">
        {
          items.map( item => (
            <WidgetItem
              key={item.id*item.id} 
              item={item}
            />
          ))
        }
      </div>
      <Add />
    </Weather>
  )
}
