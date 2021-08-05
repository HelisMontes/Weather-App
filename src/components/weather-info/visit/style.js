import styled from '@emotion/styled';
import { commonWeatherInfo } from '../forecast/style';
import { bps } from '../../../style/bps';


export const WeatherVisit = styled.section`
  min-width: 145px;
  position: relative;
  width: 32%;
  
  p{
    color: var(--white);
    font-size: 15px;
    font-weight: bold;
    left: 15px;
    position: absolute;
    top: 50px;
    
    i{
      margin-right:3px;
    }
    
    span{
      left: 15px;
      position: absolute;
      top: 20px;
    }
  }
  
  img{
    border-radius: 20px;
    height: 225px;
    margin-top: 10px;
    object-fit: cover;
    width: 100%;
  }
  ${bps.phonesSmall}{
    ${commonWeatherInfo}
  }
  ${bps.phonesExtraSmall}{
    ${commonWeatherInfo}
    padding: 0px 10px;
  }
`