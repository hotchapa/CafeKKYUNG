import Image from 'next/image'
import styled from 'styled-components'
import Logo from '@/common/styles/logo.png'
import media from '../styles/media'

const LogoWrapper = styled.div`
  /* width: 10.3125em;
  height: 6.0625em; */
  width: 7em;
  height: 4.2em;
  position: relative;
  margin-bottom: 1em;
  padding: 1em;
  margin-left: 5em;

  ${media.small`
    display: none;
  `};
`

export default function ServiceLogo() {
  return (
    <LogoWrapper>
      <Image src={Logo} alt="Logo" fill style={{ objectFit: 'contain' }} />
    </LogoWrapper>
  )
}
