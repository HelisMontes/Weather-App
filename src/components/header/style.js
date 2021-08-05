import styled from '@emotion/styled'
import { bps } from '../../style/bps'

export const Head = styled.header`
  background-image: url('./assets/img/banner.jpg');
  background-size: cover;
  border-radius: 25px;
  height: 260px;
  padding: 20px;
  position: relative;
`
export const HeaderLogo = styled.div`
  height: auto;
  font-size: 22px;
  font-weight: 600;
  left: 9%;
  top: 60px;
  width: 110px;
  position: absolute;
  
  p{
    color: var(--secondary);
  }
  
  i{
    margin-right: 5px;
  }
  
  img{
    height: 90px;
    margin-top: 20px;
  }
  ${bps.phonesExtraSmall}{
    left: 32%;
  }
`