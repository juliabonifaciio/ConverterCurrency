import React, { useEffect } from 'react';
import { View, StatusBar } from 'react-native';
import HomeScreen from '@/src/app/index'; 

export default function Layout() {
  useEffect(() => {
    // Configurar a barra de status para escuro
    StatusBar.setBarStyle('light-content'); // Estilo de texto claro para a barra de status
    StatusBar.setBackgroundColor('#000000'); // Cor de fundo da barra de status preta
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <HomeScreen />
    </View>
  );
}