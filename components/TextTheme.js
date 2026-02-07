import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { colors } from '../color';

const TextTheme = ({ children, themeMode, style, ...props }) => {
  const theme = colors[themeMode] || colors.light;
  const styles = getStyles(themeMode);

  return (
    <Text style={[styles.text, style]} {...props}>
      {children}
    </Text>
  );
};

const getStyles = (themeMode) => {
  const theme = colors[themeMode] || colors.light;
  return StyleSheet.create({
    text: {
      color: theme.text,
      fontSize: 16,
    },
  });
};

export default TextTheme;
