import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { colors } from '../color'

const contact = () => {
  const theme = useColorScheme()
  const styles = getStyles(theme)
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>contact</Text>
      <Link style={styles.link} href="/" >go to home</Link>
    </View>
  )
}

export default contact

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors[theme].background,
    },

    title: {
      fontSize: 50,
      marginBottom: 20,
      fontWeight: 'bold',
      color: colors[theme].title,
      textShadowRadius: 10,
      textShadowColor: colors[theme].shadow,
    },

    link: {
      fontSize: 18,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 8,
      fontWeight: 'bold',
      marginBottom: 12,
      opacity: 0.9,

      color: colors[theme].linkText,
      backgroundColor: colors[theme].linkBackground,
      borderColor: colors[theme].linkBorder,
      borderWidth: 1,

      // Shadow compatible with RN
      shadowColor: colors[theme].shadow,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 5,
    },
  })