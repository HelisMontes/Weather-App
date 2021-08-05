import styled from '@emotion/styled';
import { bps } from '../../../style/bps';

export const commonWeatherInfo = `
  width: 100%;
  min-width: 145px;
  margin-top: 30px;
`
export const WeatherForecast = styled.section`
  width: 32%;
  min-width: 142px;
  ${bps.phonesSmall}{
    ${commonWeatherInfo}
  }
  ${bps.phonesExtraSmall}{
    ${commonWeatherInfo}
    padding: 0px 10px;
  }
`
export const ForecastWidgetsItem = styled.div`
  align-items: center;
  display: flex;
  box-shadow: var(--sombra);
  border-radius: 15px;
  height: 70px;
  justify-content: space-between;
  margin-top: 10px;
  padding-left: 5px;

  i{
    color: var(--secondary);
    font-size: 30px;
  }
`
export const ForecastWidgetsItemTitles = styled.div`
  h3{
    font-size: 13px;
  }
  p{
    font-size: 12px;
  }
`
export const ForecastWidgetsTemp = styled.div`
  align-items: center;
  background-color: var(--secondary);
  border-radius: 15px;
  color: var(--white);
  display: flex;
  font-size: 15px;
  font-weight: 600;
  height: 100%;
  padding: 0px 2px;
  
  span{
    font-size: 12px;
  }
`