import React from 'react';
import { StyleSheet, Text as RNText, TextStyle } from 'react-native';
import { colors } from '@mobile/theme/colors';

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    letterSpacing: 0.25,
  },
  primary: {
    color: colors.white,
  },
  secondary: {
    color: colors.secondary,
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
      style={
        type === 'primary'
          ? {
              ...styles.text,
              ...styles.primary,
              ...style,
            }
          : {
              ...styles.text,
              ...styles.secondary,
              ...style,
            }
      }
      {...props}>
      {children}
    </RNText>
  );
};

export default Text;
