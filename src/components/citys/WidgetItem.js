import React from 'react';
import { WidgetItemHeader } from './WidgetItemHeader';
import { WidgetItemFooter } from './WidgetItemFooter';
import { WeatherWidgetItem } from './style';

export const WidgetItem = ({item}) => {
  const {humidity, name, temp, weather, wind} = item
  return (
    <WeatherWidgetItem>
      <WidgetItemHeader data={{weather, name, temp}} />
      <WidgetItemFooter data={{humidity, weather, wind}} />
    </WeatherWidgetItem>
  )
}
