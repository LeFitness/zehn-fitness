import React from 'react';
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextStyle,
  InputModeOptions,
} from 'react-native';
import { colors } from '@mobile/theme/colors';

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    padding: 10,
    color: colors.white,
    backgroundColor: colors.palette.primary,
    borderColor: colors.palette.secondary,
  },
});

interface TextInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  style?: TextStyle;
  inputMode?: InputModeOptions;
}

const TextInput = ({
  placeholder,
  value,
  onChangeText,
  style,
  inputMode,
  ...props
}: TextInputProps): React.JSX.Element => {
  return (
    <RNTextInput
      style={{ ...styles.textInput, ...style }}
      placeholder={placeholder}
      placeholderTextColor={colors.white}
      value={value}
      onChangeText={onChangeText}
      inputMode={inputMode}
      {...props}
    />
  );
};

export default TextInput;
