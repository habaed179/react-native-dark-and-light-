import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../color';

const LinkTheme = ({ children, themeMode, onPress, style, ...props }) => {
  const theme = colors[themeMode] || colors.light;
  const styles = getStyles(themeMode);

  return (
    <TouchableOpacity 
      style={[styles.link, style]} 
      onPress={onPress}
      activeOpacity={0.7}
      {...props}
    >
      <Text style={styles.linkText}>{children}</Text>
    </TouchableOpacity>
  );
};

const getStyles = (themeMode) => {
  const theme = colors[themeMode] || colors.light;
  return StyleSheet.create({
    link: {
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 8,
      backgroundColor: theme.linkBackground,
      borderWidth: 1,
      borderColor: theme.linkBorder,
      marginBottom: 12,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: theme.shadow,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 5,
    },
    linkText: {
      color: theme.linkText,
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
};

export default LinkTheme;
