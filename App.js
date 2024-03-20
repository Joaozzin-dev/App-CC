import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View } from 'react-native';

import { Perfil } from './src/pages/Perfil';
export default function App() {
  return (
    <>
      <Perfil/>
      <StatusBar style="auto" />
    </>
  );
}

