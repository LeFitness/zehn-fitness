import React from 'react';
import { StyleSheet, Text as RNText, TextStyle } from 'react-native';
import { colors } from '@mobile/theme/colors';

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    letterSpacing: 0.25,
    zIndex: 100,
  },
});

interface TextProps {
  type?: 'primary' | 'secondary';
  children: React.ReactNode;
  style?: TextStyle;
}

const Text = ({
  type = 'primary',
  children,
  style,
  ...props
}: TextProps): React.JSX.Element => {
  return (
    <RNText
      style={{
        ...styles.text,
        ...style,
        color: type === 'primary' ? colors.white : colors.palette.secondary,
      }}
      {...props}>
      {children}
    </RNText>
  );
};

export default Text;
