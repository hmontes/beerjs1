import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'

const color = ({orange, black}) => {
  if (orange) return '#fb5216;'
  else if (black) return 'black;'
  else return 'transparent;'
}

const Grid = styled.View`
  flex: 1;
  flex-direction: row; 
`

const Column = styled.View`
  flex: 1;
  background-color: ${props => color(props)}
`

Grid.Column = Column

export default Grid