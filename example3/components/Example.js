import React from 'react'
import { Text } from 'react-native'

import { Grid, Row, Column } from './grid'

const Example = (props) => {

  return(
    <Grid>
      <Row>
        <Column orange={!props.inverse} black={props.inverse} vcenter hcenter>
          <Text>Meetup</Text>
        </Column>
        <Column black venter hcenter>
          <Text style={{color: '#FFF', fontSize: 20}}>beer.js</Text>
        </Column>
      </Row>
      <Row>
        <Column ratio={2} black>
          <Text style={{color: '#FFF'}}>beer.js</Text>
        </Column>
        <Column>
          <Text>React Native</Text>
        </Column>
      </Row>
    </Grid>
  ) 
}

export default Example