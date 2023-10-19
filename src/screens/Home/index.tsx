import React from 'react';

import {Text, TextInput, View} from 'react-native';
import {
  AtomEffect,
  DefaultValue,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import Button from '../../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

const localForageEffect: AtomEffect<any> = ({node, setSelf, onSet}) => {
  AsyncStorage.getItem(node.key).then(
    savedValue => {
      setSelf(savedValue != null ? JSON.parse(savedValue) : new DefaultValue());
    }, // Abort initialization if no value was stored
  );

  // Subscribe to state changes and persist them to AsyncStorage
  onSet((newValue, _, isReset) => {
    isReset
      ? AsyncStorage.removeItem(node.key)
      : AsyncStorage.setItem(node.key, JSON.stringify(newValue));
  });
};

const textState = atom({
  key: 'inputText', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
  effects: [localForageEffect],
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

      <Button />
    </View>
  );
};
