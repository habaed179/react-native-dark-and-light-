import { StyleSheet, Text, View, Image, useColorScheme } from "react-native";
import React from "react";
import { Link } from "expo-router";
import icon from "../assets/download.png";
import { colors } from "../color";

export default function Index() {
  const theme = useColorScheme();
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <Image
        source={icon}
        style={{ width: 100, height: 100, marginBottom: 20 }}
      />

      <Text style={styles.title}>Welcome</Text>

      <Link href="/about" style={styles.link}>
        Go to About
      </Link>
      <Link href="/contact" style={styles.link}>
        Go to contact
      </Link>
      <Text style={styles.link}><Link href="/auth/login">login</Link>   |   <Link href="/auth/register">register</Link></Text>
    </View>
  );
}

// Styles function with dynamic theme
const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors[theme].background,
    },

    title: {
      fontSize: 50,
      marginBottom: 20,
      fontWeight: "bold",
      color: colors[theme].title,
      textShadowRadius: 10,
      textShadowColor: colors[theme].shadow,
    },

    link: {
      fontSize: 18,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 8,
      fontWeight: "bold",
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
  });
