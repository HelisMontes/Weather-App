import styled from '@emotion/styled';
import {bps} from '../../style/bps'

const commonBps=`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 0px
`
export const WeatherInformation = styled.div`
  border-radius: 25px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  padding: 20px 0px;
  width: 68%;
  justify-content: space-between;
  height: auto;

  h2{
    font-size: 18px;
    
    span{
      font-weight: 500;
    }
  }
  ${bps.tablet}{
    ${commonBps}
  }
  ${bps.phonesSmall}{
    ${commonBps}
  }
  ${bps.phonesExtraSmall}{
    width: 100%;
  }
`