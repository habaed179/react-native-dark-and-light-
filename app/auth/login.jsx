import { StyleSheet, View, useColorScheme, TextInput, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import TextTheme from '../../components/TextTheme'
import { colors } from '../../color'

export default function Login() {
  const router = useRouter()
  const theme = useColorScheme() || 'light'
  const styles = getStyles(theme)

  return (
    <View style={styles.container}>
      <TextTheme themeMode={theme} style={styles.title}>
        Login
      </TextTheme>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={colors[theme].text}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={colors[theme].text}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/auth/register')}>
        <Text style={[styles.link, { color: colors[theme].text }]}>Don't have an account? Register</Text>
      </TouchableOpacity>
    </View>
  )
}

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      justifyContent: 'center',
      backgroundColor: colors[theme].background,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 30,
      textAlign: 'center',
    },
    input: {
      borderWidth: 1,
      borderColor: colors[theme].linkBorder,
      padding: 12,
      marginBottom: 15,
      borderRadius: 8,
      color: colors[theme].text,
      backgroundColor: colors[theme].linkBackground,
    },
    button: {
      backgroundColor: colors[theme].linkBackground,
      padding: 12,
      borderRadius: 8,
      alignItems: 'center',
      marginTop: 20,
      borderWidth: 1,
      borderColor: colors[theme].linkBorder,
    },
    buttonText: {
      color: colors[theme].linkText,
      fontSize: 18,
      fontWeight: 'bold',
    },
    link: {
      textAlign: 'center',
      marginTop: 15,
      color: colors[theme].linkText,
    },
  })