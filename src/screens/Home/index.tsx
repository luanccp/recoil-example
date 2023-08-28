import React from 'react';

import {Text, TextInput, View} from 'react-native';
import {atom, selector, useRecoilState, useRecoilValue} from 'recoil';

const textState = atom({
  key: 'inputText', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});

const charCountState = selector({
  key: 'charCountState', // unique ID (with respect to other atoms/selectors)
  get: ({get}) => {
    const text = get(textState);

    return text.length;
  },
});

const Counter: React.FC = () => {
  const [text, setText] = useRecoilState(textState);
  const count = useRecoilValue(charCountState);

  return (
    <View>
      <Text> Characters: {count} </Text>
      <TextInput
        value={text}
        onChangeText={value => setText(value)}
        placeholder="type here"
      />

      <View>
        <Text>Echo: {text}</Text>
      </View>
    </View>
  );
};

export const HomeScreen: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink',
      }}>
      <Counter />
    </View>
  );
};
