import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '../color';

const ViewTheme = ({ children, themeMode, style, ...props }) => {
  const theme = colors[themeMode] || colors.light;
  const styles = getStyles(themeMode);

  return (
    <View style={[styles.container, style]} {...props}>
      {children}
    </View>
  );
};

const getStyles = (themeMode) => {
  const theme = colors[themeMode] || colors.light;
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};

export default ViewTheme;
