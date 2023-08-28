import React from 'react';

import {HomeScreen} from './src/screens/Home';
import {RecoilRoot} from 'recoil';

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <HomeScreen />
    </RecoilRoot>
  );
};

export default App;
