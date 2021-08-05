import React from 'react';
import { UiProvider } from '../context/UiContext';
import { CitysWeather } from './citys/CitysWeather';
import { Header } from './header/Header';
import { WeatherInfo } from './weather-info/WeatherInfo';
import { Weather } from './weather/Weather';

export const Container = () => {
  return (
    <UiProvider>
      <div className="container">
        <Header />
        <Weather />
        <main>
          <WeatherInfo />
          <CitysWeather />
        </main>
      </div>
    </UiProvider>
  )
}

