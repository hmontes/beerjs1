import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components/native'
import PropTypes from 'prop-types'

const Grid = styled.View`
  flex: 1;
`

const Row = styled.View`
  flex: 1;
  flex-direction: row;
`

const Column = styled.View`
  flex: ${props => props.ratio};
  justify-content: center;
  align-items: center;
  border-width: 1;
  border-color: #000;
`

const Texto = styled.Text`
  font-size: 20;
`

const LiveExample = () => (
  <Grid>
    <Row>
      <Column>
        <Texto>Hola Mundo</Texto>
      </Column><Column>
        <Texto>Beer.js</Texto>
      </Column>
    </Row>
    <Row>
      <Column ratio={2}>
        <Texto>Hola Mundo</Texto>
      </Column><Column>
        <Texto>Beer.js</Texto>
      </Column>
    </Row>
  </Grid>
)

LiveExample.defaultProps = {
  ratio: 1
}

export default LiveExample