import React from 'react';

import {Text, View} from 'react-native';

export const HomeScreen: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink',
      }}>
      <Text> Hello world</Text>
    </View>
  );
};
