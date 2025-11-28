import * as React from 'react'
import styled from 'styled-components'
import { IConfig, IPort } from '../../'


const PortDefaultOuter = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`

const PortDefaultInner = styled.div`
  width: 12px;
  height: 12px;
  cursor: pointer;
`

export const CustomPort = ( isLinkSelected, isLinkHovered, config, className ) => (
  <PortDefaultOuter className={className}>
    <PortDefaultInner
    />
  </PortDefaultOuter>
)