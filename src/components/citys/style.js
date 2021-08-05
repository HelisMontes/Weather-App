import styled from '@emotion/styled';
import { bps } from '../../style/bps';

const common = `
  flex: 1 1 auto;
  margin: auto;
  padding: 15px;
  text-align: center;
`
const commonAddImg = `
  display: block;
  height: 40px;
  margin: auto;
`

const commonAddButton = `
  display: block;
  font-size: 10px;
  padding: 5px;
`
const commonBpsWeather = (width, direction) =>`
  position: initial;
  display: flex;
  flex-direction: ${direction};
  justify-content: space-between;
  width: ${width};
  height: auto;
  align-items: center;
`
const commonBpsWeatherItem = (width ='100%') =>`
  width: ${width};
  height: auto;
  margin-bottom: 0px;
  
  :first-of-type{
    margin-top: 15px;
  }
`
export const Weather = styled.section`
  background-color: transparent;
  bottom: 80px;
  height: 380px;
  position: absolute;
  right: 60px;
  width: 24.5%;
  
  ${bps.tablet}{
    ${commonBpsWeather('100%', 'row-reverse')}
  }
  ${bps.phonesSmall}{
    ${commonBpsWeather('90%', 'column')}
    margin-top: 30px;
  }
  ${bps.phonesExtraSmall}{
    ${commonBpsWeather('90%', 'column')}
    margin-top: 30px;
  }
`
export const WeatherWidgetItem = styled.div`
  background-color: var(--white);
  border-radius: 15px;
  box-shadow: var(--sombra);
  box-shadow: 0px 5px 10px 0px grey;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;
  ${bps.tablet}{
    ${commonBpsWeatherItem('90%')}
  }
  ${bps.phonesSmall}{
    ${commonBpsWeatherItem()}
  }
  ${bps.phonesExtraSmall}{
    ${commonBpsWeatherItem()}
  }
`
export const WeatherWidgetItemHeader = styled.div`
  background-color: var(--white);
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`
export const WeatherWidgetItemHeaderIcon = styled.div`
  ${common}
  background-color: #dce8f4;
  border-radius: 15px;
  color: var(--secondary);
  font-size: 28px;
`
export const WeatherWidgetItemHeaderTemp = styled.div`
  ${common}
  font-size: 14px;
  border-right: 1px solid rgba(180, 180, 180, 0.6);
`
export const WeatherWidgetItemHeaderCity = styled.div`
  ${common}
  h3{
    font-size: 14px;
    text-align: left;
  }
  p{
    text-align: left;
    font-size: 10px;
  }
`
export const WeatherWidgetItemFooter = styled.div`
  display: flex;
  font-size: 12px;
  justify-content: space-around;
`
export const AddCity = styled.div`
  border-radius: 10px;
  border: 1px dashed grey;
  height: auto;
  padding: 10px;
  
  button{
    background-color: #efeefc;
    border-radius: 15px;
    border: 0px;
    color: var(--secondary);
    display: block;
    font-size: 13px;
    font-weight: bold;
    margin: auto;
    padding: 10px;
    
    ${bps.phonesSmall}{
      ${commonAddButton}
    }
    ${bps.phonesExtraSmall}{
      ${commonAddButton}
    }
  }

  img{
    display: block;
    height: 80px;
    margin: auto;
    ${bps.phonesSmall}{
      ${commonAddImg}
    }
    ${bps.phonesExtraSmall}{
      ${commonAddImg}
    }
  }
  ${bps.tablet}{
    width: 30%;    
  }
  ${bps.phonesSmall}{
    margin-top: 20px;
    width: 70%;
  }
  ${bps.phonesExtraSmall}{
    margin-top: 20px;
    width: 70%;
  }
`