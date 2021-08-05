import React from 'react';
import { Head } from './Head';
import { WeatherReviewers } from './style';
import { Widget } from './Widget';

export const Reviewers = () => {
  return (
    <WeatherReviewers>
      <Head />
      <Widget />
    </WeatherReviewers>
  )
}
