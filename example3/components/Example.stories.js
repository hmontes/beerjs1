import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Example from './Example';
import LiveExample from './LiveExample';

storiesOf('Grids', module)
  .add('Grid 1', () => (
    <Example />
  ))
  .add('Grid 2', () => (
    <Example inverse/>
  ));

storiesOf('Ejemplo en vivo', module)
  .add('Grid Fácil', () => (
    <LiveExample />
  ))