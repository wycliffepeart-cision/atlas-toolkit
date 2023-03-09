import {IconButton, Icons} from '@storybook/components';
import React from 'react'

export function Toolbar() {
  return ({active}) => {

    console.log('active', active)

    return (
      <IconButton active={active} title="Show a Storybook toolbar">
        <Icons icon="outline" />
      </IconButton>
    )
  };
}