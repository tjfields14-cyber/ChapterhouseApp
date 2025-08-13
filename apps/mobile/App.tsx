
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Pressable, Linking } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chapterhouse Mobile</Text>
      <Text style={styles.subtitle}>Integration hub for the mobile app</Text>
      <Pressable onPress={() => Linking.openURL('http://localhost:3000')}>
        <Text style={styles.link}>Open Web Hub (localhost:3000)</Text>
      </Pressable>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0b0b0c', alignItems: 'center', justifyContent: 'center', padding: 24 },
  title: { fontSize: 24, fontWeight: '700', color: '#f2f2f2' },
  subtitle: { fontSize: 14, color: '#cfcfcf', marginTop: 6, marginBottom: 16 },
  link: { color: '#9ad0ff', textDecorationLine: 'underline', marginTop: 8 },
});
