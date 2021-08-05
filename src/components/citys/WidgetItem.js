import React from 'react';
import { WidgetItemHeader } from './WidgetItemHeader';
import { WidgetItemFooter } from './WidgetItemFooter';
import { WeatherWidgetItem } from './style';

export const WidgetItem = ({paris}) => {
  const {name, main} = !!paris && paris
  return (
    <WeatherWidgetItem>
      <WidgetItemHeader data={{name, main}}/>
      <WidgetItemFooter />
    </WeatherWidgetItem>
  )
}
