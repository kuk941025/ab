import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}></SafeAreaView>
    </SafeAreaProvider>
  );
}
