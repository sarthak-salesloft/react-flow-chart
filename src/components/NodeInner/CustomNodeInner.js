import * as React from 'react'
import styled from 'styled-components'
import { IConfig, INode } from '../..'

const Outer = styled.div`
  padding: 40px 30px;
  margin-top: 10px 10px;
`

export const CustomNodeInner = ({ node }) => {
  return (
    <Outer>
      <div>{node.type}</div>
    </Outer>
  )
}