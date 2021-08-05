import React, { useContext } from 'react';
import { ButtonWeather } from './style';
import { Icon } from './Icon';
import { Temp } from './Temp';
import { UiContext} from '../../context/UiContext';

export const Weather = () => {
  const {bogota} = useContext(UiContext);
  const {weather: clima, main} = !!bogota && bogota
  return (
    <ButtonWeather>
      {
        clima
          && <Icon clima={clima}/>
      }
      {
        main 
          && <Temp main={main}/>
      }
    </ButtonWeather>
  )
}
