import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Text from '@mobile/common/text/Text';
import { colors } from '@mobile/theme/colors';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 4,
    elevation: 3,
    margin: 12,
  },
});

interface ButtonProps {
  type?: 'primary' | 'secondary';
  children: React.ReactNode;
  onPress: () => void;
}

const Button = ({
  type = 'primary',
  children,
  onPress,
  ...props
}: ButtonProps): React.JSX.Element => {
  return (
    <Pressable
      style={{
        ...styles.button,
        backgroundColor:
          type === 'primary'
            ? colors.palette.primary
            : colors.palette.secondary,
      }}
      onPress={onPress}
      {...props}>
      <Text type="primary">{children}</Text>
    </Pressable>
  );
};

export default Button;
