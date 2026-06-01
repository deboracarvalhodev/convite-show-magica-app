import React from 'react';
import {
  StatusBar,
  ScrollView,
  View,
  Text,
  ImageBackground,
  Image,
} from 'react-native';

import ShowDetails from '../components/ShowDetails';

import styles from '../styles/Styles';

export default function Home() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <StatusBar barStyle="light-content" backgroundColor="#260101" />
      <ImageBackground
        source={require('../assets/background-cortina.jpg')}
        style={styles.hero}
        resizeMode="cover">
        <View style={styles.overlay}>
          <Text style={styles.heroText}>Você acredita em</Text>

          <Text style={styles.heroHighlight}>mágica?</Text>
        </View>
      </ImageBackground>

      <View style={styles.section}>
        <Image
          source={require('../assets/cartas.png')}
          style={styles.cards}
          resizeMode="contain"
        />

        <View style={{ height: 200 }} />

        <Text style={styles.sectionText}>
          Prepare-se para se surpreender com um espetáculo único, onde a
          realidade será desafiada e o impossível acontecerá diante dos seus
          olhos.
        </Text>
      </View>

      <ShowDetails />
    </ScrollView>
  );
}
