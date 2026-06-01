import React, { useState } from 'react';
import { Dimensions, View, Image } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import { useFonts } from 'expo-font';

import { Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';

import { Cinzel_400Regular, Cinzel_700Bold } from '@expo-google-fonts/cinzel';

import Home from './src/screens/Home';
import Agenda from './src/screens/Agenda';
import Ingresso from './src/screens/Ingresso';

import styles, { COLORS } from './src/styles/Styles';

export default function App() {
  const [index, setIndex] = useState(0);

  const routes = [
    { key: 'home', title: 'O Show' },
    { key: 'agenda', title: 'Agenda' },
    { key: 'ingresso', title: 'Ingresso' },
  ];

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Cinzel_400Regular,
    Cinzel_700Bold,
  });

  if (!fontsLoaded) return null;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('./src/assets/logo-teatro.png')}
            style={styles.logo}
          />
        </View>

        <TabView
          navigationState={{ index, routes }}
          renderScene={SceneMap({
            home: Home,
            agenda: Agenda,
            ingresso: Ingresso,
          })}
          renderTabBar={(props) => (
            <TabBar
              {...props}
              style={{
                backgroundColor: COLORS.background,
                borderBottomWidth: 1,
                borderBottomColor: COLORS.accent,
              }}
              indicatorStyle={{
                backgroundColor: COLORS.accent,
                height: 3,
              }}
              activeColor={COLORS.accent}
              inactiveColor={COLORS.text}
            />
          )}
          onIndexChange={setIndex}
          initialLayout={{ width: Dimensions.get('window').width }}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
