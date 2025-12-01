import * as React from 'react'
import styled from 'styled-components'

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
  background: ${(props) => props.color || 'grey'};
  border-radius: 50%;
  cursor: pointer;
`

export const CustomPort = (props) => {
  // Get the linkColor from the port's properties, default to grey if not found
  const linkColor = props.port.properties?.linkColor || 'grey';

  return (
    <PortDefaultOuter {...props}>
      <PortDefaultInner
        // Pass the color to the styled component
        color={linkColor}
      />
    </PortDefaultOuter>
  )
}