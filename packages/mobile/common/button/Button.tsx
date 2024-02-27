import React from 'react';
import { Pressable, StyleSheet, ViewStyle } from 'react-native';
import Text from '@mobile/common/text/Text';
import { colors } from '@mobile/theme/colors';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 4,
    elevation: 3,
    borderWidth: 1,
  },
  primary: {
    backgroundColor: colors.primary,
    borderColor: colors.secondary,
  },
  secondary: {
    backgroundColor: colors.secondary,
    borderColor: colors.primary,
  },
});

interface ButtonProps {
  type?: 'primary' | 'secondary';
  children: React.ReactNode;
  onPress: () => void;
  style?: ViewStyle;
}

const Button = ({
  type = 'primary',
  children,
  onPress,
  style,
  ...props
}: ButtonProps): React.JSX.Element => {
  return (
    <Pressable
      style={
        type === 'primary'
          ? {
              ...styles.button,
              ...styles.primary,
              ...style,
            }
          : {
              ...styles.button,
              ...styles.secondary,
              ...style,
            }
      }
      onPress={onPress}
      {...props}>
      <Text type="primary">{children}</Text>
    </Pressable>
  );
};

export default Button;
