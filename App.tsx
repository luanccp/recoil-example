import React from 'react';

import {HomeScreen} from './src/screens/Home';
import {RecoilRoot} from 'recoil';
import {TamaguiProvider} from '@tamagui/core';
import config from './tamagui.config';

const App: React.FC = () => {
  return (
    <TamaguiProvider config={config}>
      <RecoilRoot>
        <HomeScreen />
      </RecoilRoot>
    </TamaguiProvider>
  );
};

export default App;
