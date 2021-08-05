import styled from '@emotion/styled'
import { bps } from '../../style/bps'

export const ButtonWeather = styled.div`
  background-color: var(--secondary);
  width: 90px;
  height: 175px;
  position: absolute;
  left: 0px;
  top: 95px;
  border-top-right-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;

  ::before {
    content: "";
    position: absolute;
    background-color: transparent;
    top: -30px;
    height: 30px;
    width: 30px;
    border-bottom-left-radius: 10px;
    box-shadow: 0px 10px var(--primary);
  }
  
  ::after {
    content: "";
    position: absolute;
    background-color: transparent;
    bottom: -30px;
    height: 30px;
    width: 30px;
    border-top-left-radius: 10px;
    box-shadow: 0px -10px 0px 0px var(--secondary);
  }
  ${bps.phonesExtraSmall}{
    width: 60px;
    top: 40px;
  }
`

export const WeatherIcon = styled.div`
  background-color: var(--primary);
  border-bottom-right-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  color: var(--white);
  font-size: 2.5rem;
  height: 95px;
  text-align: center;
  width: 90px;
  
  i{
    margin-top: 1.5rem;
  }
  ${bps.phonesExtraSmall}{
    width: 60px;
    font-size: 30px;
  }  
`
export const WeatherTemp = styled.div`
  text-align: center;
  
  h2 {
    color: var(--white);
    font-weight: 600;
    margin-left: -0.8rem;
    margin-top: 1.5rem;

    span {
      font-size: 0.8rem;
      line-height: 0;
      margin-top: 15px;
      margin-left: 3px;
      position: absolute;
    }
  }
`