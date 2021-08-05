import styled from '@emotion/styled';
import { commonWeatherInfo } from '../forecast/style';
import { bps } from '../../../style/bps';


export const WeatherReviewers = styled.section`
  width: 32%;
  min-width: 145px;
  
  p{
    color: grey;
    font-size: 14px;
  }
  ${bps.phonesSmall}{
    ${commonWeatherInfo}
  }
  ${bps.phonesExtraSmall}{
    ${commonWeatherInfo}
    padding: 0px 10px;
  }
`

export const ReviewersHead = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ReviewersHeadUsers = styled.div`
  align-items: flex-start;
  display: flex;
  
  img{
    border-radius: 5px;
    margin-right: 3px;
    width: 21px;
  }
  
  a{
    background-color: #b4a7f7;
    border-radius: 5px;
    color: var(--white);
    font-size: 16px;
    padding: 2px;
    text-decoration: none;
  }
`
export const ReviewersWidgetItem = styled.div`
  position: relative;
  
  p{
    color: var(--white);
    font-size: 15px;
    font-weight: bold;
    left: 15px;
    position: absolute;
    top: 25px;
    
    ${bps.tablet}{
      color: var(--white);
    }
    ${bps.phonesSmall}{
      color: var(--white);
    }
    ${bps.phonesExtraSmall}{
      color: var(--white);
    }
    
    i{
      margin-right:3px;
    }
    
    span{
      left: 15px;
      position: absolute;
      top: 18px;
    }
  }
  
  img{
    border-radius: 25px;
    height: 130px;
    margin-top: 10px;
    object-fit: cover;
    width: 100%;
  }
  
  :first-of-type img{
    height: 85px;
  }
`
export const Plus = styled.div`
  background-color: var(--secondary);
  border-radius: 25px;
  height: 90%;
  position: absolute;
  right: 0px;
  top: 10px;
  width: 60px;

  span{
    color: var(--white);
    display: block;
    font-size: 35px;
    font-weight: bold;
    margin-top: 65%;
    text-align: center;
  }
`