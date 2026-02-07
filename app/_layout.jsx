import { StyleSheet, useColorScheme } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { colors } from '../color'

const _layout = () => {
  const changecolor = useColorScheme() || 'light'
  const theme = colors[changecolor]

  return (
    <>
      <StatusBar style={changecolor === 'dark' ? 'light' : 'dark'} />

      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: theme.navBackground },
          headerTintColor: theme.navText,
          headerTitleStyle: { color: theme.title, fontWeight: 'bold', fontSize: 20 },
        }}
      >
        <Stack.Screen name="index" options={{ title: 'Home' }} />
        <Stack.Screen name="contact" options={{ title: 'Contact' }} />
        <Stack.Screen name="about" options={{ title: 'About' }} />
        <Stack.Screen name="auth/login" options={{ title: 'Login' }} />
        <Stack.Screen name="auth/register" options={{ title: 'Register' }} />
      </Stack>
    </>
  )
}

export default _layout

const styles = StyleSheet.create({})
