import styled from 'styled-components/native'
import PropTypes from 'prop-types'

const color = ({orange, black}) => {
  if (orange) return '#fb5216;'
  else if (black) return 'black;'
  else return 'transparent;'
}

const Column = styled.View`
  flex: ${props => props.ratio};
  background-color: ${props => color(props)};
  justify-content: ${props => props.vcenter ? 'center' : 'flex-start'};
  align-items: ${props => props.hcenter ? 'center' : 'stretch'};
` 

Column.defaultProps = {
  ratio: 1,
  vcenter: false,
  hcenter: false
}

export default Column

