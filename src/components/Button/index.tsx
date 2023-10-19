import React from 'react';
import {Stack, Text, styled} from '@tamagui/core';
export const ButtonFrame = styled(Stack, {
  // the name indicates to use the sub-theme `Button`

  // since we defined light_Button, if our theme is light, this component

  // will always use the values from our `light_Button` theme

  name: 'Button',
  alignItems: 'center',

  flexDirection: 'row',
  // our $ prefixed values look for theme first, then fallback to tokens

  backgroundColor: '$background', // #ccc

  hoverStyle: {
    backgroundColor: '$backgroundHover', // #ddd
  },

  pressStyle: {
    backgroundColor: '$backgroundPress', // #bbb
  },
  // these all use tokens

  // note that size tokens are used only for these properties:

  //   width, height, minWidth, minHeight, maxWidth and maxHeight

  height: '$md', // 46
  // meanwhile our radius token is used here

  borderRadius: '$md', // 8
  // and space tokens are used for all others

  paddingHorizontal: '$sm', // 25
});

export const ButtonText = styled(Text, {
  name: 'ButtonText',
  color: '$color',
  fontFamily: '$body',
  fontSize: '$md',
  lineHeight: 20,
  userSelect: 'none',
});

export default () => (
  <ButtonFrame>
    <ButtonText>Hello words</ButtonText>
  </ButtonFrame>
);
